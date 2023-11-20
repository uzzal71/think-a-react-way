const TenperatureInput = ({ temperature, scale, onTemperatureChange }) => {
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    }

    return (
        <div>
             <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}:</legend>
                    <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e, scale)}/>
                </fieldset>
        </div>
    );
};

export default TenperatureInput;