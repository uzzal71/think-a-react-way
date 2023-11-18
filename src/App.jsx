import ClockList from "./components/ClockList";

function App() {
  // console.log('app component rendering');
  const quantities = [1, 2, 3]

  return (
    <div>
      <ClockList quantities={quantities}/>
    </div>
  );
}

export default App
