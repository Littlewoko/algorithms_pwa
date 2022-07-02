import React from 'react';
import ReactTooltip from 'react-tooltip';

import "../styles/components/_ifStatement.css";

const boolToolTip = 
    "Here 'It is raining' is our condition, and will resolve to either true or false";

const trueToolTip = "When it is raining (true) -> take an ubrella. " +
    "This is our conditional action";

const falseToolTip = "When it is not raining (false)" +
    " -> Do not take an umbrella. This is our default action.";

const IfStatement = () => (
    <div>
    
        <ul>
            <li data-tip={boolToolTip}>IF (It is raining) </li>
            <ReactTooltip />
            <li data-tip={trueToolTip}>THEN (Take an Umbrella)</li>
            <ReactTooltip />
            <li data-tip={falseToolTip}>ELSE (Leave without an umbrella)</li>
            <ReactTooltip />
        </ul>
    </div>
)

export default IfStatement;