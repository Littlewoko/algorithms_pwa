import React from 'react';

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
        
        
    </div>

    </div>
)

export default LoopsDiv;