import React from 'react';

class Clock extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    */
    state = { date: new Date() }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date } = this.state
        return (
        <h1 className="hading">
            <span>{date.toLocaleTimeString("bn-BD")}</span>
        </h1>
        );
    }
};

export default Clock;