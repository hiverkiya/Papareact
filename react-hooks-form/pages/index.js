import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  const favColor = useRef(null);
  const [firstName, setFirstName] = useState("");
  const lastName = useRef(null);
  return (
    <div className="flex flex-col justify-center items-center py-2">
      <div className="text-4xl py-2"> React Hooks Form</div>
      <form className="flex flex-col space-y-3 text-center">
        <input
          className="border border-black text-center"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} //less performant
        />
        <input
          className="border border-black text-center"
          placeholder="Last name"
          type="text"
          ref={lastName} // more performant
        />
        <input
          className="border border-black text-center"
          type="text"
          ref={favColor}
          placeholder="Favourite color"
        />
        <button
          className="py-2 p-1 bg-green-300 rounded-xl"
          onClick={handleClick}
        >
          {" "}
          Send the details
        </button>
      </form>
      <Link href="/form">
        <button className="py-5 mt-3 p-3 bg-blue-300">
          Go to the React Hooks form implementation
        </button>
      </Link>
    </div>
  );
}
