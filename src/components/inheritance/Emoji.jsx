import React, { Component } from 'react';

export default class Emoji extends Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`
  render(overwrite) {
    let text = 'I am the Emoji Component';
    
    if (overwrite) text = overwrite;

    return <div>{text}</div>
  }
}
