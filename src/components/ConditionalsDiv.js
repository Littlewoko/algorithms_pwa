import React from 'react';

import IfStatement from './IfStatement';

const showFuncConditional = () => {
    let div = document.getElementById('conditionalDiv');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }

    let elem = document.getElementById('cButton');
    if (elem.innerHTML === "Hide") {
        elem.innerHTML = 'Show';
    }
    else {
        elem.innerHTML = 'Hide';
    }
}

const ConditionalDiv = () => (
    <div>
        <h2> Conditionals 
            <button id='cButton' onClick={showFuncConditional}>
                {"Hide"}
            </button>
        </h2>
    
    <div id='conditionalDiv'>
        <p>
            Conditionals refer to the idea of an action being performed based on the status of a "condition". These Conditions 
            can resolve to TRUE or FALSE (this is the idea of boolean values, where something has two possible values and always resolves
            to one, such as true/false or 1/0). Our conditional action will only be performed if the condition we have set
            resolves to true, else our default action will be performed.

            Interact to gain more insight into the following code.
        </p>

        <IfStatement />

        <p>
            If statements are generally how conditionals are presented
            within code, and are absolutely critical to writing efficient and powerful algorithms. The example shown above is also an 
            example of "psuedocode" which presents a programming concept or algorithm without worry for specific syntax or programming 
            language, with the focus instead being on readability and understanding.
        </p>
    </div>

    </div>
)

export default ConditionalDiv;
