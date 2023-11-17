import React from "react";

function App() {
  // const element = React.createElement('h1', {className: 'heading'}, 'hello world');
  // const element1 = <h1>Hello world</h1>;
  // console.log(element1);
  const index = 0;
  const element = (
    <h1 className="heading", tabIndex={index}>
      Hello world
    </h1>
  )
  /*
  element = {
    type: 'h1',
    props: {
      className: 'heading',
      tabIndex: 0,
      children: 'hellow world'
    }
  }
  */
 console.log(element)
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App
