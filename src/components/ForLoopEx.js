import React from "react";
import ReactTooltip from "react-tooltip";

const loopTip = "The number of repetitions is known prior to the loop commencing."

const ForLoopEx = () => (
    <div>
        Below is an example of a FOR loop:

        <ul>
        <li data-tip={loopTip}>For(5 loops)</li>
        <ReactTooltip />
        <ul>
        <li>eat</li>
        </ul>
        </ul>

    </div>
);

export default ForLoopEx;