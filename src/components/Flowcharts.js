import React from "react";
import ReactTooltip from "react-tooltip";

const tip = "This is the same algorithm for counting to five as presented above!";

const Flowcharts = () => (
    <div>
    <h2>Flowcharts</h2>
    <p>
        Flowcharts are a visual tool for representing algorithms. They make use
        of multiple different shapes each of which represents a different task, such as
        a decision or an action. These shapes are connected with arrows that allow
        the reader to determine the "flow" of the program, or in other wodrds which 
        order to read the shapes.
    </p>
    <p data-tip={tip}>?</p>
    <ReactTooltip />
    <img src="flow_shapes.png" alt="Flowchart shapes" 
    width="350" height="400" />
    <img src="flowchart.png" alt="Flowchart" 
    width="350" height="400"/>
    </div>
)

export default Flowcharts;