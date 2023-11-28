import React from 'react';

const HoverCounter = ({ counter, incrementCount, theme, switchTheme } ) => {
    const style = theme === 'dark' ? {backgroundColor: '#000', color: '#fff'} : null;
    console.log('HoverCounter rendered');

    return (
        <div>
            <h1 style={style} onMouseOver={incrementCount}>Hovered { counter } times</h1>
            <button type="button" onClick={switchTheme}>Change Theme</button>
        </div>
    );
};

export default HoverCounter;
