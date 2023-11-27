import React, { Component } from 'react';
import withCounter from './Hoc/withCounter';

class ClickCounter extends Component {
    render() {
        const { counter, incrementCounter } = this.props;

        return <button onClick={incrementCounter}>Clicked {counter} times</button>;
        
    }
}

export default withCounter(ClickCounter);