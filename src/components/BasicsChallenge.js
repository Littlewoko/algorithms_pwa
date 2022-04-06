import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

let options = [
    {key:"1", value:"Read Menu"},
    {key:"2", value:"Order Meal"},
    {key:"3", value:"Eat Meal"}
]

class ChallengeForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            option_one : false,
            option_two : false,
            option_three : false,
            correct: false,
            options: props.options,
        }
    }

    checkOptions = () => {
        this.setState({
            correct: this.state.option_one && this.state.option_two && this.state.option_three
        })
    }

    handleOption1Change = (e) => {
        if (e.target.value === options[0].value) {
            this.setState({
                option_one:true,
            })
        } else {
            this.setState({
                option_one:false,
            })
        }
    }

    handleOption2Change = (e) => {
        if (e.target.value === options[1].value) {
            this.setState({
                option_two:true,
            })
        } else {
            this.setState({
                option_two:false,
            })
        }
    }

    handleOption3Change = (e) => {
        if (e.target.value === options[2].value) {
            this.setState({
                option_three:true,
            })
        } else {
            this.setState({
                option_three:false,
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Challenge</h1>
                {this.state.correct ? <p>Correct!</p> : <p></p>}
                <div>
                    <label for="one">1. </label>
                    <select name="one" id="one" onChange={this.handleOption1Change}>
                        <option value="option one">First Step</option>
                        {this.state.options.map((option) => 
                            <option value={option.value} key={option.key}>{option.value}</option>)}
                    </select>
                </div>
                <div>
                <label for="two">2. </label>
                    <select name="two" id="two" onChange={this.handleOption2Change}>
                        <option value="option two">Second Step</option>
                        {this.state.options.map((option) => 
                            <option value={option.value} key={option.key}>{option.value}</option>)}
                    </select>
                </div>
                <div>
                <label for="three">3. </label>
                    <select name="three" id="three" onChange={this.handleOption3Change}>
                        <option value="option three">Third Step</option>
                        {this.state.options.map((option) => 
                            <option value={option.value} key={option.key}>{option.value}</option>)}
                    </select>
                </div>
                <button onClick={this.checkOptions}>Check</button>
            </div>
        );
    }
}

const BasicsChallenge = () => (
    
    <div>
        <Header />
        <h1>Basics Challenge Task</h1>
        <p>Using the drop down boxes available try to put the steps in the correct order!</p>
        <ChallengeForm options={options}/>
        <Link to='/basics'>Back</Link>
        <Link to='/loops'>Next</Link>

    </div>
    
);

export default BasicsChallenge;