import React, { Component } from 'react'

export default class Emoji extends Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`
  render() {
    return (
      <div>Emoji</div>
    )
  }
}
