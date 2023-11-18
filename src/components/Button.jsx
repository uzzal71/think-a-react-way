import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button type='button' onClick={() => this.handleClick('en-US')}>Click here</button>
        );
    }
};

export default Button;