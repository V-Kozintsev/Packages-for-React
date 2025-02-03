import React from "react";
import { Component } from "react";

export class Child extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentDidMount() {
    console.log("child mount");
  }
  componentDidUpdate() {
    console.log("child mount");
  }
  render() {
    return (
      <div>
        <p>Child</p>
        <p>count: {this.state.count}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}
