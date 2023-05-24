import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      second: "",
      answer: "",
    };
  }
  handleFirstName = (e) => {
    this.setState({ first: e.target.value });
  };
// done
  handleSecondName = (e) => {
    this.setState({ second: e.target.value });
  };

  calculateAnswer = () => {
    const { first, second } = this.state;

    if (first.trim() === "" || second.trim() === "") {
      this.setState({ answer: "Please enter the name" });
      return;
    }

    let remainingName1 = first;
    let remainingName2 = second;

    for (let i = 0; i < first.length; i++) {
      let s = first.charAt(i);
      if (remainingName2.includes(s)) {
        remainingName1 = remainingName1.replace(s, "");
        remainingName2 = remainingName2.replace(s, "");
      }
    }

    const remainingLength = remainingName1.length + remainingName2.length;
    const relationshipValue = remainingLength % 6;

    switch (relationshipValue) {
      case 1:
        this.setState({ answer: "Friends" });
        break;
      case 2:
        this.setState({ answer: "Love" });
        break;
      case 3:
        this.setState({ answer: "Affection" });
        break;
      case 4:
        this.setState({ answer: "Marriage" });
        break;
      case 5:
        this.setState({ answer: "Enemy" });
        break;
      case 0:
        this.setState({ answer: "Siblings" });
        break;
      default:
        this.setState({ answer: "Please Enter valid input" });
        break;
    }
  };

  clearState = () => {
    this.setState({ first: "", second: "", answer: "" });
  };

  render() {
    const { first, second, answer } = this.state;

    return (
      <div id="main">
        <input
          type="text"
          data-testid="input1"
          value={first}
          onChange={this.handleFirstName}
        />
        <input
          type="text"
          data-testid="input2"
          value={second}
          onChange={this.handleSecondName}
        />
        <button
          data-testid="calculate_relationship"
          onClick={this.calculateAnswer}
        >
          Calculate Relationship Future
        </button>
        <button data-testid="clear" onClick={this.clearState}>
          Clear
        </button>
        <br />
        <h3 data-testid="answer">{answer}</h3>
      </div>
    );
  }
}

export default App;

// done