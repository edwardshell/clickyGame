import React, { Component } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import athletes from "./cards.json";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  state = {
    athletes
  };


  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <Wrapper>
          {this.state.athletes.map(athlete => (
            <Card id={athlete.id} key={athlete.id} image={athlete.image} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
