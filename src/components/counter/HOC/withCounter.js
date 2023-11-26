import React from 'react';

const withCounter = (originalComponent) => {
    class NewComponent extends React.Component {
        state = {
            count: 0,
        };
    
        incrementCount = () => {
            this.setState((prevState) => ({count: prevState.count + 1}));
        }
    }
    return NewComponent;
};

export default withCounter;