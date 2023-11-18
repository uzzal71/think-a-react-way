import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange } = this.props;
        const { change: nextChange } = nextProps;
        if (currentChange === nextChange) return false;
        else return false
    }

    render() {
        console.log('button component rendering');
        const { change } = this.props;

        return (
            <button type='button' onClick={change}>Click here</button>
        );
    }
};

export default Button;