import React, {Component} from "react";
//import ReactDOM from 'react-dom'
import Counter from "./component/Counter";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
    };

    this.mountCounter = () => this.setState({mount: true});
    this.unmountCounter = () => this.setState({mount: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount
        </button>
        {this.state.mount ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
