import ClickCounter from "./components/counter/ClickCounter";
import User from "./components/counter/HOC/User";
import HoverCounter from "./components/counter/HoverCounter";

function App() {
  return (
    <div>
      <ClickCounter/>
      <HoverCounter/>
      <User name={() => "Uzzal Kumar Roy"}/>
    </div>
  );
}

export default App
