import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000)
    }

    render() {
        return (
        <h1 className="hading">
            <span>{this.props.children} {this.state.date.toLocaleTimeString(this.props.locale)}</span>
        </h1>
        );
    }
};

export default Clock;