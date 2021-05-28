import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

// importing components
import ChatBox from '../ChatBox/chatbox';

let socket;
const ENDPOINT = 'http://localhost:3001/';

function Chat (props) {
    let history = useHistory();

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        console.log(props.location);
        const {name, room} = queryString.parse(props.location.search);
        console.log("Data from URL : ", name, room);
        // connecting to the server
        socket = io(ENDPOINT, {transports: ['websocket', 'polling', 'flashsocket']});
        console.log("Socket client : ", socket);
        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, () => {
        });

        return () => {
            // socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, props.location.search]);

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        });
    }, [messages]);

    // helper function to send messages
    const sendMessage = (event) => {
        event.preventDefault();

        socket.emit('sendMessage', message, () => {
            setMessage('');
        })
    }

    const handleClose = () => {
        console.log("User disconnected");
        socket.emit('disconnection');
        // socket.off();
        // push the user to a different link
        history.push('/');
    }

    console.log("Message : ", message);
    console.log("Messages : ", messages);

    return (
        <div>
            {/* <div>
                <input value={message} 
                onChange={event => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}></input>
            </div> */}
            <ChatBox message={message} 
            messages={messages}
            room={room}
            name={name}
            sendMessage={sendMessage}
            setMessage={setMessage}
            handleClose={handleClose}/>
        </div>
    )
}

export default Chat;