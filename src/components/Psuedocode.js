import React from "react";
import ReactTooltip from "react-tooltip";

const tip = "Both of these are equivalent, they simply present the information differently. One is closer to human language, while the other is closer to true code. They are both still examples of pseudo code though!"

const Psuedocode = () => (
    <div>
    <h2>Pseudo Code</h2>
    <p> 
        The method of representation that you have seen in previous sections is known as 
        pseudo code. There is no standardised syntax for pseudo code, instead the writer 
        uses a mix of human language and programming concepts to create easy to understand 
        steps. This method is mostly used for planning, documentation and explanation in order
        to present a programming concept to others, or to quickly write down an algorithm
        which can be translated to code later.
    </p>
    <p data-tip={tip}>?</p>
    <img src="pseudo_while.PNG" alt="Pseudocode while loop" 
    height="400" width="700"/>
    <ReactTooltip />
    </div>

)

export default Psuedocode;