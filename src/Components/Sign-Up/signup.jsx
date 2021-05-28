import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

function SignUp (props) {
    const {name, room, signup, handleName, handleRoom} = props;

    return (
        signup === true ? 
        (<div className="body">
            <p 
            style={{margin: "auto", 
            textAlign: "center", 
            paddingTop: "10px", 
            fontSize: "25px"}}>
                Enter details to proceed
            </p>
            <form className="form">
                <label for="name">Enter your name</label>
                <br/>
                <input className="input" style={{ marginBottom: "10px"}} 
                type="text" 
                id="name" 
                name="name"
                value={name}
                onChange={(event) => handleName(event)}></input>
                <br/>
                <label for="room">Enter the room</label>
                <br/>
                <input className="input" 
                type="text" 
                id="room" 
                name="room"
                value={room}
                onChange={(event) => handleRoom(event)}></input>
                <br/>
                <Link to={`/chat?name=${name}&room=${room}`}>
                    <button onClick={event => !name || !room ? event.preventDefault() : null} className="button" type="submit">SIGN UP</button>
                </Link>
            </form>
        </div>)
        :
        (<></>)
    )
}

export default SignUp;