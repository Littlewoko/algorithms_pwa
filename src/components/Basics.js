import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Basics = () => (
    
    <div>
        <Header />
        <div>
            <h1>Basics</h1>
            <p>
                Here we will discuss the basics of algorithms and more specifically how they apply to the real world.
            </p>
            <h2>
                What is an algorithm?
            </h2>
            <p>
                Algorithms are simply sets of step-by-step instructions that a computer follows to complete a task or produce an output.
            </p>
            <p>
                As such "algorithmic thinking" is simply breaking a larger task in to the steps it takes to complete said task.
                For example, consider brushing your teeth. You can break the task of brushing your teeth into smaller tasks such as:
            </p>
            <ol>
                <li>Pick up toothbrush</li>
                <li>Apply toothpaste</li>
                <li>Brush teeth for 2 minutes</li>
                <li>Rinse mouth</li>
                <li>Rinse toothbrush</li>
                <li>Put toothbrush back</li>
            </ol>
            <p>
                This list could be expanded, or even simplified (abstracted) further. Following this list from the 
                first to final step would result in brushed teeth! This is the general idea of algorithms and they are 
                fundamental to computation (Though a computer algorithm generally would not lead to brushed teeth).
            </p>
            <Link to='/basics/challenge'>Challenge Task</Link>
        </div>
    </div>
    
);

export default Basics;