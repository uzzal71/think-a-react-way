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
        // console.log('clock component rendering');
        const { date, locale } = this.state;
        /*
        let button;
        if (locale === 'bn-BD') {
            button = <Button change={this.handleClick} locale="en-US"/>
        } else {
            button = <Button change={this.handleClick} locale="bn-BD"/>
        }
        */

        return (
            <div>
                <h1 className="hading">
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? 
                    <Button change={this.handleClick} locale="en-US" show={false} enable={true}/> : 
                    <Button change={this.handleClick} locale="bn-BD" show={true} enable={false}/>
                }
            </div>
        );
    }
};

export default Clock;