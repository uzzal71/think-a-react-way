import React from 'react';

const HoverCounter = ({ counter, incrementCount } ) => {
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered { counter } times</h1>
        </div>
    );
};

export default HoverCounter;
