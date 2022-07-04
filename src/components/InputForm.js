import React from "react";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ' ', correct: props.correct};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        const correct = this.state.value === this.state.correct;
        alert(correct ? "Correct!" : "Try Again...");
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Answer:
              <input type="number" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default InputForm;