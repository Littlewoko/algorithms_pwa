import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class ChallengeForm extends React.Component {
    constructor() {
        super();
        this.state = {
            option_one : false,
            option_two : false,
            option_three : false,
            options : ["1", "2", "3"],
        }
    }

    handleOption1Change = (e) => {
        if (e.target.value === "1") {
            this.setState({
                option_one:true,
            })
        } else {
            this.setState({
                option_one:false,
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Challenge</h1>
                <label for="one">1.</label>
                <select name="one" id="one" onChange={this.handleOption1Change}>
                    <option value="option one">Option One</option>
                    {this.state.options.map((option) => 
                        <option value={option}>{option}</option>)}
                </select>
            </div>
        );
    }
}

const BasicsChallenge = () => (
    
    <div>
        <Header />
        <h1>Basics Challenge Task</h1>
        <p>Using the drop down boxes available try to complete this algorithm!</p>
        <ChallengeForm />
        <Link to='/basics'>Back</Link>
        <Link to='/loops'>Next</Link>

    </div>
    
);

export default BasicsChallenge;