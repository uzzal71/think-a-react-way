import React from "react";
import Section from "./components/Section";
import ClickCounter from "./components/counterRenderProps/ClickCounter";
import Counter from "./components/counterRenderProps/Counter";

class App extends React.Component {
  state = {
    theme: 'dark'
  };

  render() {
    const { theme } = this.state;

    return (
      <div>
        <Counter render={(counter, incrementCounter) => <ClickCounter counter={counter} incrementCounter={incrementCounter}/>}/>
        <Section theme={theme}/>
      </div>
    );
  }
}

export default App
