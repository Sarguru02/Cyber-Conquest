"use client";
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";
import { useSocket } from "@/contexts/socketContext";
import useSessionStorage from "@/hooks/useSessionStorage";
import { randomColor } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * need a good route name for this route
 */

type PlayerObj = {
  name: string;
  position: number;
};

export default function CreateGame() {
  const {
    connect,
    updateQueryParams,
    queryParams,
    sendJsonMessage,
    isConnected,
    lastJsonMessage,
  } = useSocket()!;
  const [key, setKey] = useState<string>("");
  const [players, setPlayers] = useState<PlayerObj[]>([]);
  const router = useRouter();
  const store = useSessionStorage({ gameKey: "", players });

  function handleLastMessage() {
    console.log(lastJsonMessage);
    if (lastJsonMessage && lastJsonMessage["type"] === "error") {
      window.alert(
        `${lastJsonMessage["params"]["message"]}, Probably start this from first again`,
      );
      console.log("error", lastJsonMessage);
      store.setValue("gameKey", "");
      store.setValue("players", []);
    }
    if (lastJsonMessage && lastJsonMessage["type"] === "info") {
      if (lastJsonMessage["params"]["players"]) {
        setPlayers(() =>
          lastJsonMessage["params"]["players"].map((p: string) => {
            return {
              name: p,
              position: 0,
              inJail: false,
              color: randomColor(),
            };
          }),
        );
      }
    }
  }

  useEffect(() => {
    const k = store.getValue("gameKey");
    if (!isConnected && k === "") {
      router.push("/");
      return;
    }
  }, []);

  useEffect(() => {
    if (!isConnected) {
      updateQueryParams({});
      updateQueryParams({ type: "host", name: "host" });
      connect();
    }

    const k = store.getValue("gameKey");
    if (isConnected && k === "") {
      sendJsonMessage({ type: "create", params: {} });
    }
    if (isConnected && k !== "") {
      setKey(k);
      sendJsonMessage({ type: "reconnect", params: { key: k } });
    }
  }, [isConnected]);

  useEffect(() => {
    if (lastJsonMessage && isConnected) {
      if (lastJsonMessage["key"]) {
        setKey(lastJsonMessage["key"]);
        store.setValue("gameKey", lastJsonMessage["key"]);
      } else {
        handleLastMessage();
      }
    }
  }, [lastJsonMessage]);

  function startGame() {
    //save to sessionStorage
    store.setValue("gameKey", key);
    store.setValue("players", players);

    // NEED: should save this to db too
    router.push("/game");
  }

  return (
    <div className="flex w-screen h-screen flex-col items-center justify-center">
      <h1 className="text-4xl">Create Game</h1>
      <div className="flex mt-5">
        <h1>waiting for players to join...</h1>
        <Loading className="text-gray-200" />
      </div>
      <div className="text-blue-500 p-3">Game Key: {key}</div>
      <div>
        <div className="text-xl text-white">Players waiting:</div>

        <ul className="list-disc">
          {players.map((player, index) => (
            <li key={index} className="text-slate-400">
              {player.name}
            </li>
          ))}
        </ul>
        <Button onClick={startGame}>Start Game</Button>
      </div>
    </div>
  );
}
