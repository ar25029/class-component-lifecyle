import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timeOn: false,
    };
  }

  handleTimeOn = () => {
    this.setState((prevState) => {
      return {
        timeOn: !prevState.timeOn,
      };
    });
  };
  render() {
    return (
      <>
        {/* <h1>APP</h1> */}
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>
        <ErrorBoundary>
          <ComponentB />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
