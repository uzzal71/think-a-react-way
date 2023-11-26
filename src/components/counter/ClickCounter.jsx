import React from 'react';

const ClickCounter = ({ counter, incrementCount }) => {
    return (
        <div>
            <button type="button" onClick={incrementCount}>Clicked { counter } times</button>
        </div>
    );
};

export default ClickCounter;
