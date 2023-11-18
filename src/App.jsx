import React from "react";

function Clock() {
  return (
    <h1 className="hading">
      <span>Hello {new Date().toLocaleTimeString()}</span>
    </h1>
  )
}

function App() {
  return (
    <div>
      <Clock/>
    </div>
  );
}

export default App
