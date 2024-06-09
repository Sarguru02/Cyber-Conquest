'use client';
import {useEffect} from 'react';
import BoardGame from "@/components/Board/BoardGame";
import { useSocket } from "@/contexts/socketContext";

export default function Home() {
	const { sendJsonMessage, lastJsonMessage, isConnected, queryParams} = useSocket()!;


	useEffect(() => {
	  console.log(queryParams);

	}, [])
	
  return (
    <main>
      <BoardGame />
    </main>
  );
}
