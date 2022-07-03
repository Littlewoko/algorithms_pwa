import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import ConditionalDiv from './ConditionalsDiv';
import LoopsDiv from './LoopsDiv';

const Loops = () => (
    <div>
        <Header />
        <Link to='/Basics'>Back</Link>
        <div>
            <h1>Loops and Conditionals</h1>

            <p>
                In this section we will discuss two concepts that are fundamental to algorithms and algorithmic thinking.
            </p>
        </div>

        <ConditionalDiv />
        <LoopsDiv />
        <Link to='/Loops/Challenge'>Next</Link>
    </div>
    
);


export default Loops;