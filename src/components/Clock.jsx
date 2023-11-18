import React from 'react';

class Clock extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = { date: new Date(), locale: new Date() };
        this.handleClick = this.handleClick.bind(this);
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

    handleClick = (locale) => {
        this.setState({
            locale,
        })
    }

    render() {
        const { date, locale } = this.state
        return (
            <div>
                <h1 className="hading">
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1>
                <button type='button' onClick={() => this.handleClick('en-US')}>Click here</button>
                {/* this.handleClick.bind(this, 'en-US') */}
            </div>
        );
    }
};

export default Clock;