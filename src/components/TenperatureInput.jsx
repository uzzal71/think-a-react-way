import React from "react";

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

export default class TemperatureInput extends React.Component {
    state = {
        temperature: ''
    };

    onTemperatureChange = (e) => {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        const { temperature } = this.state;
        const { scale } = this.props;

        return(
            <div>
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}:</legend>
                    <input type="text" value={temperature} onChange={this.onTemperatureChange}/>
                </fieldset>
            </div>
        );
    }
}