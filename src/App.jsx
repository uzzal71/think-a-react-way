import React from "react";
import Section from "./components/Section";
import ClickCounter from "./components/counterRenderProps/ClickCounter";
import Counter from "./components/counterRenderProps/Counter";
import ThemeContext from "./contexts/themeContext";

class App extends React.Component {
  state = {
    theme: 'dark'
  };

  switchTheme = (key) => {
    this.setState(({ theme })=> {
      if (theme === 'dark') return {theme: 'light'}
      else return {theme: 'dark'}
    })
  }

  render() {
    const { theme } = this.state;

    return (
      <div>
        <Counter render={(counter, incrementCounter) => <ClickCounter counter={counter} incrementCounter={incrementCounter}/>}/>
        <ThemeContext.Provider value={{ theme: theme }}><Section /></ThemeContext.Provider>
      </div>
    );
  }
}

export default App
