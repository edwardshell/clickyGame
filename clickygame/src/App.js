import React, { Component } from "react";
// import Header from "./components/Header";
import Card from "./components/Card";
import athletes from "./cards.json";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  state = {
    athletes,
    score: 0
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light sticky-top">
          <span className="navbar-brand mb-0 h1">ClickyGame!</span>
          <span className="navbar-brand mb-0 h1">Guessed right</span>
          <span className="navbar-brand mb-0 h1">
            Score: {this.state.score}
          </span>
        </nav>
        <Jumbotron />
        <Wrapper>
          {this.state.athletes.map(athlete => (
            <div onClick={this.handleIncrement}>
            <Card id={athlete.id} key={athlete.id} image={athlete.image} />
            </div>
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
