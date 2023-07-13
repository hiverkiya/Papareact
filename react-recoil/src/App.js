import { useRef, useState } from "react";
import Message from "./Message";
function App() {
  const [user, setUser] = useState({
    name: "Sonny",
    age: 26,
    isMale: true,
  });

  return (
    <div className="App">
      <h1>recoil</h1>
      <h2>Logged in user:{user.name}</h2>
      <Message user={user} />
    </div>
  );
}

export default App;
