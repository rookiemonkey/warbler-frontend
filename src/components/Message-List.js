import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchMessage from "../helpers/setMessages";
import MessageItem from "./Message-Item";

const MessageList = async () => {

    const dispatch = useDispatch();
    await fetchMessage(dispatch);

    const messages = useSelector(state => state.messageReducer)
    const output = messages.map((m) => {
        console.log("this is a message: ===============", m)
        return (
                <MessageItem
                    key={m._id}
                    date={m.createdAt}
                    text={m.text}
                    username={m.user.username}
                    profileImageUrl={m.user.profileImageUrl}
                />
            );
        });

    return output;
};

export default MessageList;
