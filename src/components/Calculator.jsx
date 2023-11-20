import React from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TenperatureInput";

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    onTemperatureChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale: scale
        })
    }

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.onTemperatureChange}/>
                <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.onTemperatureChange}/>
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}