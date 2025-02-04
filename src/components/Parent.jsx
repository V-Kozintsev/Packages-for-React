import React from "react";
import { Component } from "react";
import { Child } from "./Child";

export class Parent extends Component {
  state = {
    count: 0,
    visible: true,
  };
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };
  componentDidMount() {
    console.log("parent mount");
  }
  componentDidUpdate() {
    console.log("parent mount");
  }
  render() {
    return (
      <div>
        <p>Parent</p>
        <p>count: {this.state.count}</p>
        <button onClick={this.handleClick}>click</button>
        <br />
        <button onClick={this.handleVisible}>
          {this.state.visible ? "show" : "hide"}
        </button>
        {this.state.visible && <Child />}
      </div>
    );
  }
}
