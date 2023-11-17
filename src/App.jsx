import React from "react";

function App() {
  const element = React.createElement('h1', null, 'hello world');
  console.log(element);
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App
