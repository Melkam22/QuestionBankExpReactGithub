import React from 'react';
import '../App.css';
import Form from './Form';

const Replay = ({score, rematch}) => (
    <div className="replayBox"> 
    <div className="showScore">You have scored {score} out of 10 questions.</div>
    <p>Thank you for taking part and you are kindly asked <br/>to fill in the below input fields.</p>
    <Form />
    <br />
    <br/>
    <button className="rematch" onClick={rematch}>Replay</button>

    </div>
)

export default Replay;