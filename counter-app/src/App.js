import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function incre() {
    setCount(count + 1);
  }
  function decre() {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <p> hello</p>
      <p> Count = {count}</p>
      <button onClick={incre}>+</button>
      <button onClick={decre}>-</button>
    </div>
  );
}

export default App;
