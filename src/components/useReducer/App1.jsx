import ComplexCounter from "./components/useReducer/ComplexCounter";
import Counter from "./components/useReducer/Counter";
import CounterThree from "./components/useReducer/CounterThree";

const App = () => {
  return (
    <div className="app">
      <Counter/>
      <hr/>
      <ComplexCounter/>
      <hr/>
      <CounterThree/>
    </div>
  );
}

export default App
