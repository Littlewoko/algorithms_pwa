import React from "react";
import ReactTooltip from "react-tooltip";

const loopTip = "The loop will run WHILE the condition 'hungry' is TRUE. It will run repeatedly until 'hungry' is FALSE, which is checked before each run."

const conditionalTip = "Check whether or not eating has caused us to become full."

const updateTip = "set Hungry to false. This will cause the loop condition to resolve to false causing it to cease running. It is important to update the loop condition at some point in order to prevent infinite loops which can break our programs!"

const setConditionTip = "With a WHILE loop we set up our condition prior to the loop commencing."
const WhileLoopEx = () => (
    <div>
        Below is an example of a WHILE loop:

        <ul>
            <li data-tip={setConditionTip}>Hungry = true</li>
            <ReactTooltip />
            <li data-tip={loopTip}>WHILE (Hungry)</li>
            <ReactTooltip />
            <ul>
                <li>eat</li>
                <li data-tip={conditionalTip}>IF (Full)</li>
                <ReactTooltip />
                <li data-tip={updateTip}>THEN (Hungry = false)</li>
                <ReactTooltip />
            </ul>
        </ul>
    </div>
);

export default WhileLoopEx;