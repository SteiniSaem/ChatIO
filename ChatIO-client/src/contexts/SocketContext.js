import { createContext } from "react";
import connectToSocketServer from "socket.io-client";

const SocketContext = createContext({
  socket: connectToSocketServer("http://localhost:8080")
});

export default SocketContext;
