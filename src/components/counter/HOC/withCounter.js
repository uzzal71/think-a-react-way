import React from 'react';

const withCounter = (originalComponent) => {
    class NewComponent extends React.Component {
        state = {
            count: 0,
        };
    
        incrementCount = () => {
            this.setState((prevState) => ({count: prevState.count + 1}));
        }

        render() {
            const { count } = this.state;
            return <originalComponent/>
        }
    }
    return NewComponent;
};

export default withCounter;