import React from "react";

export default class Calculator extends React.Component {
    state = {
        temperature: ''
    };

    const onTemperatureChange = (e) => {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        const {temperature} = this.state;
        return(
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input type="text" value={temperature} onChange={this.onTemperatureChange}/>
            </fieldset>
        );
    }
}