import { useCallback, useState } from "react";
import Button from "./components/useCallBackMemo/Button";
import ShowCount from "./components/useCallBackMemo/ShowCount";
import Title from "./components/useCallBackMemo/Title";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []); // count1

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEventOrOdd = () => {
    let i = 0;
    while(i < 1000000000) i += 1; // costly operation
    return count1 % 2 === 0;
  }

  return (
    <div className="app">
      <Title/>
      <ShowCount count={count1} title="Counter 1"/>
      <span>{isEventOrOdd() ? 'Even' : 'Odd'}</span>
      <Button handleClick={incrementByOne}>Increment by one</Button>
      <hr/>
      <ShowCount count={count2} title="Counter 2"/>
      <Button handleClick={incrementByFive}>Increment by five</Button>
    </div>
  );
}

export default App
