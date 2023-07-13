import { useRef, useState } from "react";
import Message from "./Message";
import { atom, useRecoilState } from "recoil";
import { userState } from "./Atoms/userState";


function App() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div className="App">
      <h1>recoil</h1>
      <h2>Logged in user:{user.name}</h2>
      <Message user={user} />
    </div>
  );
}

export default App;
