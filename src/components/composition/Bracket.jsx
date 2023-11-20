import { Component } from 'react';

export default class Bracket extends Component {
    addBracket= (text, emoji) => `[${emoji} ${text} ${emoji}]`

    render() {
        return this.props.children({addBracket: this.addBracket});
    }
}
