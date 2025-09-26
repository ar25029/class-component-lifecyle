import { Component } from "react";

class TimerOne extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.timeId = null;
    console.log("TimerOner Constructor");
    this.handleIncrease = this.handleIncrease.bind(this);
  }

  static getDerivedStateFromProps() {
    console.log("TimerOner getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("TimerOner componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("TimerOner shouldComponentUpdate");
    return true;
  }
  handleIncrease() {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  }
  handleDecrease = () => {
    this.setState((prev) => {
      return { count: prev.count - 1 };
    });
  };
  render() {
    const { timeOn, handleTimeOn } = this.props;

    return (
      <>
        {/* <button onClick={this.handleDecrease}>Decrease</button> */}
        <h1>{this.state.count}</h1>
        <button onClick={() => handleTimeOn()}>
          {!timeOn ? "Start" : "Stop"}
        </button>
        {/* <button onClick={this.handleIncrease}>Increase</button> */}
      </>
    );
  }
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("TimerOner getSnapshotBeforeUpdate");
    console.log("TimerOner getSnapshotBeforeUpdate", prevProp);
    console.log("TimerOner getSnapshotBeforeUpdate", prevState);
    return null;
  }

  componentDidUpdate(prevProp, prevState) {
    console.log("TimerOner componentDidUpdate");
    if (prevProp.timeOn !== this.props.timeOn) {
      if (this.props.timeOn) {
        this.timeId = setInterval(() => {
          this.setState((prev) => ({ count: prev.count + 1 }));
        }, 500);
      } else {
        clearInterval(this.timeId);
      }
    }
  }
}
export default TimerOne;
