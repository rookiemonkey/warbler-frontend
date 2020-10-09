import React, { Component } from "react";
import { connect } from "react-redux";
import fetchMessage from "../helpers/setMessages";
import deleteMessage from '../helpers/deleteMessage';
import MessageItem from "./Message-Item";
import MessageFormTimeline from "./MessageForm-Timeline";

class MessageList extends Component {

  componentDidMount() {
    this.props.fetchMessage();
  }

  render() {
    const { messages, deleteMessage } = this.props;

    return (

      <div className="row col-sm-9" id="message-list">
        <div className="offset-2 col-sm-10" id="message-list-inner">
          <MessageFormTimeline />
          <ul className="list-group" id="messages">
            {
              messages.map(m => (
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
            }
          </ul>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messageReducer
  };
}

export default connect(mapStateToProps, { fetchMessage, deleteMessage })(MessageList);
