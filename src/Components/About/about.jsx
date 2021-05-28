import React from 'react';

function About (props) {
    return (
        props.about === true ? 
        <div>Home page with "About CHAT-APP" section</div>
        : 
        <></>
    )
}

export default About;