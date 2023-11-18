import React from 'react';
import Button from './Button';

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
        console.log('clock component rendering');
        const { date, locale } = this.state;
        
        return (
            <div>
                <h1 className="hading">
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick.bind(this, 'en-US')}></Button>
            </div>
        );
    }
};

export default Clock;