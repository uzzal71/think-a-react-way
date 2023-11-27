import React, { Component } from 'react';
import withCounter from './Hoc/withCounter';

class HoverCounter extends Component {
    render() {
        const { counter, incrementCounter } = this.props;
        
        return <h1 onMouseOver={incrementCounter}>Hovered {counter} times</h1>
    }
}

export default withCounter(HoverCounter);
