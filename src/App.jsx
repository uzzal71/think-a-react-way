import React from "react";

class Clock extends React.Component {
  render () {
    return (
      <h1 className="hading">
        <span>Hello {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    )
  }
}

function App() {
  return (
    <div>
      <Clock locale="bn-BD">World</Clock>
    </div>
  );
}

export default App
