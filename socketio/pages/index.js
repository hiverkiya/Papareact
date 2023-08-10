import { io } from "socket.io-client";
import { useEffect, useState } from "react";

export default function Home() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    fetch("/api/socketio").finally(() => {
      const socket = io();

      setSocket(socket);
      socket.on("connect", () => {
        console.log("connect");
        socket.emit("Hello");
      });

      socket.on("a user connected", () => {
        console.log("a user connected");
      });
      socket.on("disconnect", () => {
        console.log("disconnect");
      });
      socket.on("pong", () => {
        console.log("<<<PONG CAME BACK");
      });
    });
  }, []);

  const handlePing = () => {
    console.log("PING SENT");
    socket.emit("ping", { foo: "bar" });
  };

  return (
    <div className="flex space-y-1 flex-col items-center justify-center min-h-screen py-2">
      <div className="text-5xl"> Socket IO DEMO</div>
      <div className="text-xl"> I am on the Client</div>

      <h3>{socket.connected ? "Socket Connected" : "Socket not connected"}</h3>
      <button
        onClick={handlePing}
        className="p-1 bg-lime-300 rounded-sm shadow-md"
      >
        Ping Server
      </button>
      <button
        onClick={() => socket.disconnect()}
        className="p-1 bg-red-300 rounded-sm"
      >
        Disconnect
      </button>
      <button
        className="p-1 bg-blue-300 rounded-sm"
        onClick={() => socket.connect()}
      >
        Connect
      </button>
    </div>
  );
}
