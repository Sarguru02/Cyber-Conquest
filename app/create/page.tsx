'use client'
import { Button } from "@/components/ui/button";
import { Loading } from "@/components/ui/loading";
import { useSocket } from "@/contexts/socketContext"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * need a good route name for this route
 */
export default function CreateGame() {
	const { queryParams, isConnected, lastJsonMessage } = useSocket()!;
	const [key, setKey] = useState<string>("");
	const [players, setPlayers] = useState<string[]>([]);
	const router = useRouter();

	function handleLastMessage() {
		if (lastJsonMessage && lastJsonMessage['type'] === 'info') {
			setPlayers(() => lastJsonMessage['params']['players']);
			console.log(lastJsonMessage);
		}
	}

	useEffect(() => {
		if (!isConnected) {
			return router.push("/");
		}
	}, [])

	useEffect(() => {
		if (lastJsonMessage && isConnected) {
			if (lastJsonMessage['key']) {
				setKey(lastJsonMessage['key']);
			} else {
				handleLastMessage();
			}
		}
	}, [lastJsonMessage])


	function startGame(){
		router.push('/game')
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
						<li key={index} className="text-slate-400">{player}</li>
					))
					}</ul>
				<Button onClick={startGame}>Start Game</Button>
			</div>
		</div>
	)
}
