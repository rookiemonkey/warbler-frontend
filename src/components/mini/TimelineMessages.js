import React, { Component } from "react";
import { connect } from "react-redux";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import DiscoverPeopleItem from './DiscoverPeopleItem';
import MessageItem from "./MessageItem";
import MessageForm from "./MessageForm";
import Loader from './Loader';
import fetchMessage from "../../helpers/setMessages";
import deleteMessage from '../../helpers/deleteMessage';
import fetchDiscoverPeople from '../../helpers/setDiscoverPeople';

class TimelineMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messagesIsLoading: true,
      discoverPeopleIsLoading: true
    }
  }

  async componentDidMount() {
    await this.props.fetchMessage(this.props.skip);
    await this.setState({ ...this.state, messagesIsLoading: false })
    await this.props.fetchDiscoverPeople();
    await this.setState({ ...this.state, discoverPeopleIsLoading: false })
  }

  handleLoadMore = () => {
    this.props.fetchMessage(this.props.skip + 20);
  }

  render() {
    const { messages, discoverPeople, deleteMessage, userid } = this.props;
    const { discoverPeopleIsLoading, messagesIsLoading } = this.state;

    return (

      <div className="row col-sm-7" id="message-list">
        <div className="col" id="message-list-inner">
          <MessageForm />

          <h3 className="mt-3">Discover People</h3>
          {
            !discoverPeopleIsLoading
              ? <React.Fragment>
                <OwlCarousel
                  className="owl-theme"
                  loop
                  autoPlay
                  autoplayTimeout={1500}
                  margin={10}
                  nav
                  dots={false}
                  items={4}
                >
                  {
                    discoverPeople.map((people, ind) => {
                      if (people._id != userid)
                        return <DiscoverPeopleItem
                          key={ind}
                          username={people.username}
                          profilePicture={people.profilePicture}
                          _id={people._id}
                        />
                    })
                  }
                </OwlCarousel>
              </React.Fragment>
              : <Loader />
          }

          <ul className="list-group" id="messages">
            {
              !messagesIsLoading
                ? messages.map(m => (
                  <MessageItem
                    key={m._id}
                    date={m.createAt}
                    text={m.text}
                    username={m.user.username}
                    messageID={m._id}
                    authorID={m.user._id}
                    profileImageUrl={m.user.profilePicture}
                    deleteMessage={deleteMessage}
                  />
                ))
                : <Loader />
            }

            {
              !messagesIsLoading
                ? <button
                  className="btn btn-primary btn_loadmore"
                  onClick={this.handleLoadMore}
                >Load More</button>
                : null
            }
          </ul>

        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messageReducer.messages,
    skip: state.messageReducer.skip,
    discoverPeople: state.discoverReducer.discoverPeople,
    userid: state.sessionReducer.user._id
  };
}

export default connect(mapStateToProps,
  { fetchMessage, deleteMessage, fetchDiscoverPeople })(TimelineMessages);
