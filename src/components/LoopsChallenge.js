import ReactTooltip from 'react-tooltip';
import InputForm from './InputForm';

const iteratorToolTip = "i is our iterator, initialised to zero";
const lessThanToolTip = "WHILE i is less than six";
const actionToolTip = "Add two to the value of i"

const LoopsChallenge = () => (
    <div>
    <h2>Loops</h2>
        <p>How many loops will occur in the following WHILE loop?</p>
        <ul>
            <li data-tip={iteratorToolTip}>i = 0</li>
            <ReactTooltip />
            <li data-tip={lessThanToolTip}>WHILE (i {"<"} 6)</li>
            <ReactTooltip />
            <ul>
            <li data-tip={actionToolTip}>i = i + 2</li>
            <ReactTooltip />
            </ul>

        </ul>
    
    </div>
)

export default LoopsChallenge;