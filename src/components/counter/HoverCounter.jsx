import React from 'react';

export default class HoverCounter extends React.Component{
    state = {
        count: 0,
    };

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { count } = this.state;

        return (
            <div>
                <h1 onMouseOver={this.incrementCount}>Hovered { count } times</h1>
            </div>
        );
    }
};
