import React, { useState } from 'react';

const Form = () => {
    const [number, setNumber] = useState(0)
    const incrementNumber = () => {
        setNumber((number) => number + 1);
    }
    return (
        <div>
            <h1>This section use for form!</h1>
            <button onClick={incrementNumber}>Clicked {number}</button>
        </div>
    );
};

export default Form;