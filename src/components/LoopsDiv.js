import React from 'react';
import ForLoopEx from './ForLoopEx';
import WhileLoopEx from './WhileLoopEx';

const showFuncLoop = () => {
    let div = document.getElementById('loopDiv');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }

    let elem = document.getElementById('lButton');
    if (elem.innerHTML === "Hide") {
        elem.innerHTML = 'Show';
    }
    else {
        elem.innerHTML = 'Hide';
    }
}

const LoopsDiv = () => (
    <div>
        <h2> Loops 
            <button id='lButton' onClick={showFuncLoop}>
                {"Hide"}
            </button>
        </h2>
    
    <div id='loopDiv'>
        <p>
            Loops make use of conditionals and are a logical next step from if statements (As seen above).
            A loop will repeat an action WHILE a condition is true, or FOR a specific number of repetitions.
            This forms the basis of the while loop and the for loop, our two options for repeating a task.
        </p>

        <WhileLoopEx />

        <ForLoopEx />
        
    </div>

    </div>
)

export default LoopsDiv;