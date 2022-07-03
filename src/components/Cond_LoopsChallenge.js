import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const variableToolTip = "n is a variable which holds a value that can change. Here the value TEN has been assigned"
const greaterThanToolTip = "n > 5 can be read as n is greater than five. This is our conditional statement."
const ChallengeTwo = () => (
    
    <div>
        <Header />
        <Link to='/loops'>Back</Link>
        <h1>Conditonals and Loops Challenge Task</h1>
        <p>Take on the following challenges and test your understanding!</p>
        <h2>Condtionals</h2>
        <p>What value does the variable n contain following this statement?</p>
        <ul>
            <li data-tip={variableToolTip}>n = 10</li>
            <ReactTooltip />
            <li data-tip={greaterThanToolTip}>IF (n {">"} 5) </li>
            <ReactTooltip />
            <li data-tip={""}>THEN (n = 5)</li>
            <ReactTooltip />
            <li data-tip={""}>ELSE (n * 2)</li>
            <ReactTooltip />
        </ul>
        <Link to='/representation'>Next</Link>

    </div>
    
);

export default ChallengeTwo;