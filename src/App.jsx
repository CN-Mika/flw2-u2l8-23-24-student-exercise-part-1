import './App.css'
import { useState } from "react";


function App() {
  return (
    <div className="App">
      <h1>iCount</h1>
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  const [count, setCount] = useState(0);
  function addToCount() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="counter">
      <button onClick={addToCount}>Click me</button>
      <button onClick={resetCount}>Reset Count</button>
      <p>You clicked {count} times</p>
    </div>
  );
}
