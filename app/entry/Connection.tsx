import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

/**
 * This is just an example of how you can use websockets in next.js
 * you can take this as reference and implement it properly
 * lastJsonMessage will have the message sent by the server
 * sendJsonMessage is used to send message to the server
 * readyState will have the state of the connection
 */
type connectionProps = {
  name: string;
  type: string;
};

const socketUrl = "ws://localhost:42069/";
export default function Connection({ name, type }: connectionProps) {
  const { sendJsonMessage, readyState, lastJsonMessage } = useWebSocket(
    socketUrl + name,
    {
      onOpen: () => console.log("Connected"),
      queryParams: { type, name },
    },
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("message:", lastJsonMessage);
  }, [lastJsonMessage]);

  function submitter(e: any) {
    e.preventDefault();
    sendJsonMessage({ message });
    setMessage("");
  }

  return (
    <div>
      Hello, {name}
      <form onSubmit={submitter}>
        <input
          type="text"
          placeholder="message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button>Send</button>
      </form>
    </div>
  );
}
