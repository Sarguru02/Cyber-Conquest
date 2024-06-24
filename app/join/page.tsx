'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loading } from "@/components/ui/loading";
import { useSocket } from "@/contexts/socketContext"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function JoinGame() {
	const { lastJsonMessage, isConnected, sendJsonMessage } = useSocket()!;
	const [key, setKey] = useState<string>("");
	const router = useRouter();
	useEffect(() => {
		if (!isConnected) return router.push("/");
	}, [])


	useEffect(() => {
		if (lastJsonMessage && isConnected) {
			console.log(lastJsonMessage)
		}
	}, [lastJsonMessage])


	function join() {
		sendJsonMessage({ type: 'join', params: { code: key } })
		router.push("/player");
		return
	}


	return (<div className="w-[400px] h-screen flex flex-col align-center justify-center">
		<Input value={key} onChange={e => setKey(() => e.target.value)} />
		<Button onClick={() => join()}>Join</Button>
		<Loading className="h-10 w-10" />
	</div>)
}
