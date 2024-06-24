'use client';
import { useState, useEffect } from 'react';

interface WebSocketOptions {
  queryParams?: Record<string, string>;
}

export interface WebSocketHookResult {
  connect: () => void;
  disconnect: () => void;
  sendMessage: (message: string) => void;
  sendJsonMessage: (message: any) => void;
  isConnected: boolean;
  lastMessage: string | null;
  lastJsonMessage: any;
	updateQueryParams: (QueryParams: Record<string, string>) => void;
	queryParams: Record<string, string>;
}

const useWebSocket = (url: string, options: WebSocketOptions = {}): WebSocketHookResult => {
  const { queryParams: initialQueryParams = {} } = options;
  const [queryParams, setQueryParams] = useState<Record<string, string>>(initialQueryParams);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [lastMessage, setLastMessage] = useState<string | null>(null);
  const [lastJsonMessage, setLastJsonMessage] = useState<any>(null);
  const [messageQueue, setMessageQueue] = useState<any[]>([]);

  useEffect(() => {
    if (isConnected) {
      const queryString = Object.keys(queryParams)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
        .join('&');
      const ws = new WebSocket(`${url}?${queryString}`);

      ws.onopen = () => {
        setSocket(ws);
      };

      ws.onclose = () => {
        setSocket(null);
      };

      ws.onmessage = (event) => {
        const message = event.data;
        setLastMessage(message);
        try {
          const jsonMessage = JSON.parse(message);
          setLastJsonMessage(jsonMessage);
        } catch (error) {
          console.error('Error parsing JSON message:', error);
        }
      };

      return () => {
        if (ws) {
          ws.close();
          setSocket(null);
        }
      };
    }
  }, [isConnected, queryParams]); // Adding queryParams as a dependency

useEffect(() => {
    // Your existing useEffect hook...

    if (socket && socket.readyState === WebSocket.OPEN && messageQueue.length > 0) {
      // Send queued messages
      messageQueue.forEach((queuedMessage) => {
        if (typeof queuedMessage === 'string') {
          socket.send(queuedMessage);
        } else {
          socket.send(JSON.stringify(queuedMessage));
        }
      });
      setMessageQueue([]); // Clear the message queue
    }
  }, [socket, messageQueue]);

  const sendMessage = (message: string) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    } else {
      console.warn('WebSocket connection is not open. Queuing message...');
      setMessageQueue(prevQueue => [...prevQueue, message]);
    }
  };

  const sendJsonMessage = (message: any) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket connection is not open. Queuing message...');
      setMessageQueue(prevQueue => [...prevQueue, message]);
    }
  };
  const connect = () => {
    setIsConnected(true);
  };

  const disconnect = () => {
    setIsConnected(false);
  };

 //  const sendMessage = (message: string) => {
 //    if (socket && socket.readyState === WebSocket.OPEN) {
 //      socket.send(message);
 //    } else {
 //      console.error('WebSocket connection is not open.');
 //    }
 //  };
	//
	//
	// const sendJsonMessage = (message: any) => {
	// 	if(socket && socket.readyState === WebSocket.OPEN){
	// 		socket.send(JSON.stringify(message));
	// 	} else {
	// 		console.error("WebSocket connection is not open.");
	// 	}
	// }

  const updateQueryParams = (newQueryParams: Record<string, string>) => {
    setQueryParams(newQueryParams);
  };

  return { connect, disconnect, sendMessage, sendJsonMessage, updateQueryParams, isConnected, lastMessage, lastJsonMessage, queryParams };
};

export default useWebSocket;
