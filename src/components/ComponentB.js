import { Component } from "react";

class ComponentB extends Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentB",
      data: [],
    };
    console.log("ComponentB in Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("ComponentB in getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentB in componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/user/")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    console.log("ComponentB in render");
    console.log(this.state.data);
    return (
      <>
        <h1>List of Users</h1>
        <ul style={{ listStyleType: "none", lineHeight: 1.9 }}>
          {this.state.data.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default ComponentB;
