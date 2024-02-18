import React from "react";

class Counter extends React.Component {
  state = { count: 3 };

  handleDecrement = () => {
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  };

  handleIncrement = () => {
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  };
  render() {
    const date = new Date("june 21 1996");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
