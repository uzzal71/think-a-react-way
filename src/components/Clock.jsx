import React from 'react';

class Clock extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    */
    state = { date: new Date(), locale: 'bn-BD' }

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

    handleClick() {
        this.setState({
            locale: 'en-US'
        })
    }

    render() {
        const { date, locale } = this.state
        return (
            <div>
                <h1 className="hading">
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1>
                <button type='button' onClick={this.handleClick}>Click here</button>
            </div>
        );
    }
};

export default Clock;