import ClickCounter from "./components/counterRenderProps/ClickCounter";
import Counter from "./components/counterRenderProps/Counter";
import HoverCounter from "./components/counterRenderProps/HoverCounter";

function App() {
    return (
      <div>
        <Counter render={(counter, incrementCounter) => <ClickCounter counter={counter} incrementCounter={incrementCounter}/>}/>
        <Counter render={(counter, incrementCounter) => <HoverCounter counter={counter} incrementCounter={incrementCounter}/>}/>
      </div>
    );
}

export default App
