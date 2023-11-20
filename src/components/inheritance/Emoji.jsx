import React, { Component } from 'react'

export default class Emoji extends Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`
  render(overwrite) {
    return (
      <div>Emoji</div>
    )
  }
}
