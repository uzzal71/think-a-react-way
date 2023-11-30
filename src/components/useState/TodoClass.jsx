import React, { Component } from 'react';

export default class TodoClass extends Component {
    state = {
        todo: '',
        waring: null,
    };

    handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')
            ? 'You need JavaScript skill to complete the task. Do you have it'
            : null;

        this.setState({
            todo: inputValue,
            warning
        })
    };
    
    render() {
        const { todo, waring } = this.state;

        return (
            <div>TodoClass</div>
        )
    }
}
