import React from "react";

function App() {
  const element = React.createElement('h1', null, 'hello world');
  const element1 = <h1>Hello world</h1>;
  console.log(element1);
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App
