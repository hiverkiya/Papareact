import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const messageRef = useRef(null);
  useEffect(() => {
    let socket = null;
    fetch("/api/socketio").finally(() => {
      socket = io();
      setSocket(socket);
      // EVENT LISTENERS
      socket.on("connect", () => {
        setIsConnected(true);
        console.log("connected");
      });

      socket.on("a user joined the chat", () => {
        console.log("a user joined the chat");
      });

      socket.on("disconnect", () => {
        setIsConnected(false);
        console.log("disconnected");
      });
      socket.on("message_recieved", (msg) => {
        console.log("message came back", msg);
        setMessages([...messages, msg]);
      });
    });
    return () => {
      setSocket(null);
    };
  }, [messages]);

  const sendMessage = () => {
    console.log("PING SENT");
    socket.emit("message", messageRef.current.value);
    setMessages([...messages, messageRef.current.value]);
    messageRef.current.value = "";
  };

  return (
    <div className="flex space-y-1 flex-col items-center justify-center min-h-screen py-2">
      <div className="text-5xl"> Socket IO DEMO</div>
      <div className="text-xl"> I am on the Client</div>
      <input
        className="border-black border rounded-lg text-center"
        ref={messageRef}
        type="text"
        placeholder="Enter a message"
      />
      <button
        onClick={sendMessage}
        className="p-1 bg-lime-300 rounded-sm shadow-md"
      >
        Send a message
      </button>
      <h5>{isConnected ? "You are connected" : "You are disconnected"}</h5>

      {isConnected ? (
        <button
          onClick={() => socket.disconnect()}
          className="p-1 bg-red-300 rounded-sm"
        >
          Disconnect
        </button>
      ) : (
        <button
          className="p-1 bg-blue-300 rounded-sm"
          onClick={() => socket.connect()}
        >
          Connect
        </button>
      )}

      {messages.map((message, i) => (
        <p key={i}>{message}</p>
      ))}
    </div>
  );
}
