const TenperatureInput = ({ temperature, scale, onTemperatureChange }) => {
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    }
    
    return (
        <div>
             <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}:</legend>
                    <input type="text" value={temperature} onChange={onTemperatureChange}/>
                </fieldset>
        </div>
    );
};

export default TenperatureInput;