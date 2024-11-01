import { io } from "socket.io-client";

const URL = "http://localhost:42069/";

export const socket = io(URL, { autoConnect: false });
