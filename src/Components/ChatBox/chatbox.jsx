import React, { useEffect } from 'react';
import './chatbox.css';

// importing libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindowClose, faArrowLeft, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

// importing components
import Messages from '../Messages/messages';

function ChatBox(props) {
    const {message, messages, room, name, sendMessage, setMessage, handleClose} = props;

    useEffect(() => {
        console.log("Messages in ChatBox : ", messages);
    })

    return (
        <div className="chat-body">
            <div className="chat-navbar">
                <div>
                   {/* arrow icon  */}
                   <FontAwesomeIcon icon={faArrowLeft}
                   style={{paddingTop: "24px", 
                   paddingLeft: "25px", 
                   color:"white", 
                   fontSize: "large"}}/>
                </div>
                <div className="room-name">
                    <b>{room}</b>
                </div>
                <div>
                    {/* close icon */}
                    <FontAwesomeIcon icon={faWindowClose}
                    style={{paddingTop: "24px", 
                    paddingLeft: "50px", 
                    color:"white", 
                    fontSize: "large"}}
                    onClick={handleClose}/>
                </div>
            </div>

            {/* display messages */}
            <div style={{ overflow: "auto"}}>
                <Messages messages={messages} name={name}/>
            </div>

            <div className="chat-input">
                <input value={message}
                onChange={event => setMessage(event.target.value)}
                onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null}
                style={{ border: "thistle", borderRadius: "10px", outline: "none"}}></input>
                <button className="send-btn" onClick={event => sendMessage(event)}>
                    Send
                    <FontAwesomeIcon className="send-icon" icon={faPaperPlane}
                    style={{ fontSize: "large"}}/>
                </button>
            </div>
        </div>
    )
}

export default ChatBox;