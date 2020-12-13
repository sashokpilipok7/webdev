import React, { Component } from "react";

type CounterProps = {
  title: string;
};

type CounterState = {
  count: number;
};

class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  componentDidMount(): void {}

  setCountUp = (e: React.MouseEvent) => {
    this.setState(({ count }) => ({
      count: ++count,
    }));
  };

  setCountDown = (e: React.MouseEvent) => {
    this.setState(({ count }) => ({
      count: --count,
    }));
  };

  setCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    this.setState({ count: Number(value) });
  };

  render() {
    const { count } = this.state;
    const { title } = this.props;
    return (
      <>
        <h2>{title}</h2>
        <div> {count} </div>
        <button onClick={this.setCountDown}>minus</button>
        <button onClick={this.setCountUp}>plus</button>
        <h3>Or change it by custom input</h3>
        <input type="text" value={count} onChange={this.setCount} />
      </>
    );
  }
}

export default Counter;
