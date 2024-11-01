"use client";
import { useSocket } from "@/contexts/socketContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Player() {
  const { isConnected, sendJsonMessage, lastJsonMessage } = useSocket()!;
  const [msg, setMsg] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    if (!isConnected) return router.push("/");
  }, []);

  useEffect(() => {
    setMsg(() => JSON.stringify(lastJsonMessage));
  }, [lastJsonMessage]);

  function movePlayer() {
    sendJsonMessage({
      type: "play",
      params: { dice: Math.floor(Math.random() * 6) + 1 },
    });
  }

  return (
    <main>
      <div>{msg && msg}</div>
      <button onClick={movePlayer}>Move</button>
    </main>
  );
}
