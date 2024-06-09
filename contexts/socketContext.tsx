"use client";
import useWebSocket, { WebSocketHookResult } from "@/hooks/useSocket";
import { createContext, useContext } from "react";

const socketContext = createContext<WebSocketHookResult | null>(null);

export function useSocket(){
	return useContext(socketContext);
}

export function SocketProvider({ children }: { children: React.ReactNode }) {
	const url = process.env.NEXT_PUBLIC_WEBSOCKET_URL;
	const socket = useWebSocket(url!);
	return <socketContext.Provider value={socket}>{children}</socketContext.Provider>;
}
