import React from "react";
import Section from "./components/Section";
import ClickCounter from "./components/counterRenderProps/ClickCounter";
import Counter from "./components/counterRenderProps/Counter";
import ThemeContext from "./contexts/themeContext";

class App extends React.Component {
  state = {
    theme: 'dark',
    switchTheme: () => {
      this.setState(({ theme })=> {
        if (theme === 'dark') return {theme: 'light'}
        else return {theme: 'dark'}
      })
    }
  };

  render() {
    return (
      <div>
        <Counter render={(counter, incrementCounter) => <ClickCounter counter={counter} incrementCounter={incrementCounter}/>}/>
        <ThemeContext.Provider value={this.state}><Section /></ThemeContext.Provider>
      </div>
    );
  }
}

export default App
