import React from 'react';
import Header from './Header';
import ConditionalDiv from './ConditionalsDiv';
import LoopsDiv from './LoopsDiv';

const Loops = () => (
    <div>
        <Header />
        <div>
            <h1>Loops and Conditionals</h1>

            <p>
                In this section we will discuss two concepts that are fundamental to algorithms and algorithmic thinking.
            </p>
        </div>

        <ConditionalDiv />
        <LoopsDiv />
    </div>
    
);


export default Loops;