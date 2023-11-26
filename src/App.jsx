import ClickCounter from "./components/counter/ClickCounter";
import Counter from "./components/counter/Counter";
import HoverCounter from "./components/counter/HoverCounter";

function App() {
  return (
    <div>
      <Counter render={(counter, incrementCount) => <ClickCounter counter={counter} incrementCount={incrementCount}/>}/>
      <Counter render={(counter, incrementCount) => <HoverCounter counter={counter} incrementCount={incrementCount}/>}/>
    </div>
  );
}

export default App
