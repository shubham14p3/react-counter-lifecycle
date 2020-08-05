import React, {Component} from "react";

export class Counter extends Component {
  constructor(props) {
    //    console.log("Constructor");
    //    console.log("-----------------");
    super(props);
    this.state = {
      counter: 0,
    };

    this.increment = () => this.setState({counter: this.state.counter + 1});
    this.decrement = () => this.setState({counter: this.state.counter - 1});
  }

  componentDidMount() {
    console.log("Component Did Mount");
    console.log("-----------------");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    console.log("-----------------");
  }
  render() {
    // console.log("Render");
    // console.log("-----------------");
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">Counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default Counter;
