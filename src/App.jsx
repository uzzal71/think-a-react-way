import React from "react";

function Clock({ locale }) {
  return (
    <h1 className="hading">
      <span>Hello {new Date().toLocaleTimeString(locale)}</span>
    </h1>
  )
}

function App() {
  return (
    <div>
      <Clock locale="bd-BD"/>
    </div>
  );
}

export default App
