import { useRef, useState } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const joke = useRandomJoke();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };
  return (
    <div className="app">
      <center>
        <h1> Generating Jokes</h1>
        <p>{joke}</p>
        <form>
          <input
            placeholder="First Name"
            value={firstName}
            ref={firstNameRef}
          />
          <input placeholder="Last Name" value={lastName} ref={lastNameRef} />
          <button onClick={generateJoke}>Generate a joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;
