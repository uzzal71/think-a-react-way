import React from "react";
import TemperatureInput from "./TenperatureInput";

export default class Calculator extends React.Component {
    render() {
        return(
            <div>
                <TemperatureInput scale="c"/>
                <TemperatureInput scale="f"/>
                {/* <BoilingVerdict celsius={parseFloat(temperature)}/> */}
            </div>
        );
    }
}