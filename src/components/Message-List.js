import React, { Component } from "react";
import { connect } from "react-redux";
import fetchMessage from "../helpers/setMessages";
import deleteMessage from '../helpers/deleteMessage';
import MessageItem from "./Message-Item";

class MessageList extends Component {

  componentDidMount() {
    this.props.fetchMessage();
  }

  render() {
    const { messages, deleteMessage } = this.props;
    let messageList = messages.map(m => (
      <MessageItem
        key={m._id}
        date={m.createAt}
        text={m.text}
        username={m.user.username}
        messageID={m._id}
        profileImageUrl={m.user.profilePicture}
        deleteMessage={deleteMessage}
      />
    ));
    return (

      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" id="messages">
            {messageList}
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
