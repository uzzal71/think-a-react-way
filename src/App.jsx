import React from "react";
import Section from "./components/Section";
import ClickCounter from "./components/counter/ClickCounter";
import Counter from "./components/counter/Counter";

class App extends React.Component {
  state = {
    theme: 'dark'
  };

  render() {
    const { theme } = this.state;

    return (
      <div>
        <Counter>
        {(counter, incrementCount) => <ClickCounter counter={counter} incrementCount={incrementCount}/>}
        </Counter>
        <Section theme={theme}/>
      </div>
    );
  }
}

export default App
