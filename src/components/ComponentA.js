import { Component } from "react";

class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "Component A",
    };
    console.log("ComponentA in Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentA in getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentA in componentDidMount");
  }

  render() {
    console.log("ComponentA in render");
    return <h1>{this.state.name}</h1>;
  }
}

export default ComponentA;
