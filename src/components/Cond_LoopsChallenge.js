import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import ConditionalsChallenge from './ConditionalsChallenge';

const ChallengeTwo = () => (
    
    <div>
        <Header />
        <Link to='/loops'>Back</Link>
        <h1>Conditonals and Loops Challenge Task</h1>
        <p>Take on the following challenges and test your understanding!</p>
        <ConditionalsChallenge />
        <Link to='/representation'>Next</Link>

    </div>
    
);

export default ChallengeTwo;