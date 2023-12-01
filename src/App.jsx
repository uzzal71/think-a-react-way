import { useState } from "react";
import MyComponent from "./components/useEffect/MyComponent";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <div>{show && <MyComponent/>}</div>
      <p>
        <button type="button" onClick={() => setShow((presShow) => !presShow)}>{show ? 'Hide post' : 'Show post'}</button>
      </p>
    </div>
  );
}

export default App
