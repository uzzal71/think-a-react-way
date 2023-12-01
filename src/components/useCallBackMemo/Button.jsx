import React from 'react';

const Button = ({handleClick, children}) => {
    return (
        <div>
            <button type='button' onClick={handleClick}>{children}</button>
        </div>
    );
};

export default Button;