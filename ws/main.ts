import ws from "ws"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
const wss = new ws.Server({port: 42069})

const clients = new Map();

type GameRoom = {
	hostId: string;
	players: Set<WebSocket>
}

type Rooms = {
	[gameid: string]: GameRoom;
}

const rooms: Rooms = {};


wss.on('connection', (ws)=>{
})
