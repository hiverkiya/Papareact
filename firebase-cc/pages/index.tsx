import axios from "axios";
import { MouseEvent, useState } from "react";
type requestType = {
  specialKey: {
    number: number;
    passphrase: string;
  };
  word: string;
};
export default function Home() {
  const [input, setInput] = useState<string>("");
  const [text, setText] = useState<string>("");
  const sendWord = async (e) => {
    e.preventDefault();
    const requestBody: requestType = {
      specialKey: {
        number: 123,
        passphrase: "secret",
      },
      word: input,
    };

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/api/caseFlipper`,
      requestBody
    );
    setText(response.data.word);
  };
  return (
    <div className="items-center justify-center flex flex-col min-h-screen">
      <h1 className=""> Enter a word</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="border border-black p-2 m-2"
        placeholder="Word here"
      />
      <button onClick={sendWord} className="p-1 bg-blue-300 rounded-md">
        Send the Word
      </button>

      <p>The Flipped word is : {text} </p>
    </div>
  );
}
