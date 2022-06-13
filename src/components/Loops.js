import React from 'react';
import Header from './Header';

const showFunc = () => {
    let div = document.getElementById('conditionalDiv');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}


const Loops = () => (
    
    <div>
        <Header />
        <div>
            <h1>Loops and Conditionals</h1>

            <p>
                In this section we will discuss two concepts that are fundamental to algorithms and algorithmic thinking.
            </p>
        </div>

        <h2> Conditionals <button onClick={showFunc}>Reveal</button></h2>
        
        <div id='conditionalDiv'>
            
            <p>
                Conditionals refer to the idea of an action being performed based on the status of a "condition". These Conditions 
                can resolve to TRUE or FALSE (this is the idea of boolean values, where something has two possible values and always resolves
                to one, such as true/false or 1/0). Our conditional action will only be performed if the condition we have set
                resolves to our desired boolean value.
            </p>

            <p>
                Real world example: 
                <ul>
                    <li>IF (It is raining) </li>
                    <li>THEN (Take an Umbrella)</li>
                    <li>ELSE (Leave without an umbrella)</li>
                </ul>
                
                In this example the conditional is "it is raning". If this is true "then" you should take an umbrella, if it is false (this is, 
                it is not raining") then you should leave without an umbrella. If statements are generally how conditionals are presented
                within code, and are absolutely critical to writing efficient and powerful algorithms. The example shown above is also an 
                example of "psuedocode" which presents a programming concept or algorithm without worry for specific syntax or programming 
                language, with the focus instead put on readability and understanding.
            </p>
        </div>
    </div>
    
);

export default Loops;