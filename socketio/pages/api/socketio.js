import { Server } from "socket.io";

export default function socketIOHandler(req, res) {
  if (!res.socket.server.io) {
    console.log("First use, starting SOCKET.IO");
    const io = new Server(res.socket.server);

    io.on("connection", (socket) => {
      socket.broadcast.emit("a user joined the chat");
      socket.on("message", (msg) => {
        socket.broadcast.emit("message_recieved", msg);
        console.log(msg);
      });
    });

    res.socket.server.io = io;
  } else {
    console.log("Socket.io is running already");
  }
  res.end();
}
export const config = {
  api: {
    bodyParser: false,
  },
};
