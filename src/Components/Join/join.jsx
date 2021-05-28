import { React, useState } from 'react';
import './join.css';

// Import different components
import SignUp from '../Sign-Up/signup';
import About from '../About/about';

function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const [signup, setSignUp] = useState(false);
    const [about, setAbout] = useState(true);

    const handleSignUp = async (e) => {
        await setSignUp(true);
        await setAbout(false);
        console.log("Sign up value : ", signup);
        console.log("About value : ", about);
    }

    const handleAbout = async () => {
        await setAbout(true);
        await setSignUp(false);
    }

    const handleName = async (e) => {
        await setName(e.target.value);
        console.log("Name : ", name);
    }

    const handleRoom = async (e) => {
        await setRoom(e.target.value);
        console.log("Room : ", room);
    }

    return (
        <div>
        <div className="navbar">
            <div className="heading">
                <h3 style={{ color:"white", margin:"0px", padding:"0px"}}>Welcome to CHAT-APP</h3>
            </div>
            <ul className="list" style={{ margin: "0px", padding: "0px"}}>
                <li className="items" onClick={handleAbout}>About CHAT-APP</li>
                <li className="items" onClick={handleSignUp}>Sign Up</li>
                <li className="items">Login</li>
            </ul>
        </div>
        <SignUp signup={signup} 
        name={name} 
        room={room} 
        handleName={handleName}
        handleRoom={handleRoom}/>
        <About about={about}/>
        </div>
    )
}

export default Join;