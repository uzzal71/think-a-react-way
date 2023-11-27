import { Component } from 'react';

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  render() {
    const { render } = this.props;
    const { counter } = this.state;

    return render(counter, this.incrementCounter);
  }
}
