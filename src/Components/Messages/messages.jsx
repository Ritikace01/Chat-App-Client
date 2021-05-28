import React, { useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './messages.css';

// importing components
import Message from '../Message/message';

function Messages(props) {
    const {messages, name} = props;

    useEffect(() => {
        console.log("Messages in messages.js : ", messages);
    })

    return (
        messages.map((message, index) => {
            console.log("Message & index in messages.jsx : ", message, index);
            return (
            <div key={index}>
                <Message message={message} name={name}/>
            </div>
            )
        })
    )
}

export default Messages;