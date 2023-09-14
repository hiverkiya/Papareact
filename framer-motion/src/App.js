import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div> Framer Motion</div>
      <button onClick={() => setCount(count + 1)}>
        Click to restart the animation
      </button>
      <div className="cont">
        <motion.div
          key={count}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}

export default App;
