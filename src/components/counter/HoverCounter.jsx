import React from 'react';

const HoverCounter = ({ counter, incrementCount, theme } ) => {
    const style = theme === 'dark' ? {backgroundColor: '#000', color: '#fff'} : null;

    return (
        <div>
            <h1 style={style} onMouseOver={incrementCount}>Hovered { counter } times</h1>
        </div>
    );
};

export default HoverCounter;
