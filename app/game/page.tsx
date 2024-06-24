'use client';
import { useEffect, useState } from 'react';
import { useSocket } from "@/contexts/socketContext";
import useSessionStorage from '@/hooks/useSessionStorage';
import { arrayType } from '@/types/arrayType';
import { Board } from '@/components/Canvas/drawBoard';
import AsidePanel from '@/components/AsidePanel/AsidePanel';
import useCanvas from '@/hooks/useCanvas';

export default function Home() {
	const {updateQueryParams, connect, sendJsonMessage, lastJsonMessage, isConnected } = useSocket()!;
	const [players, setPlayers] = useState([]);
	const store = useSessionStorage({ gameKey: "", players });
	const canvasHeight = 670;
	const canvasWidth = 670;
	const boxSize = { width: 75, height: 100 };
	// get this sampleTexts from database to design custom boards.
	const sampleTexts: arrayType = ["1", "2", "3", "4", "5", "6"];
	const padding = 10;
	const [board, setBoard] = useState<Board | null>(null);
	const canvasRef = useCanvas(draw, { width: canvasWidth, height: canvasHeight });

	function draw(ctx: CanvasRenderingContext2D) {
		if (board) {
			ctx.strokeStyle = "white";
			board.drawBoard(ctx);
		}
	}


	function move() {
		if (canvasRef.current) {
			const ctx = canvasRef.current.getContext("2d");
			if (ctx && board) {
				board.players[0].move(ctx, 5);
			}
		}
	}


	function addPlayer() {
		if (canvasRef.current) {
			const ctx = canvasRef.current.getContext("2d");
			if (ctx && board) {
				console.log("Adding player"); board.add_player("red");
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				board.drawBoard(ctx);
			}
		}
	}

	useEffect(() => {
		if (!isConnected) {
			updateQueryParams({});
			updateQueryParams({ type: 'host', name: "host" });
			connect();
		}

		const k = store.getValue('gameKey');
		if (isConnected && k !== "") {
			sendJsonMessage({ type: 'reconnect', params: { key: k } });
		}
	}, [isConnected])

	useEffect(() => {
		const board = new Board(padding, canvasHeight, canvasWidth, boxSize, sampleTexts, sampleTexts, sampleTexts, sampleTexts); 
		setBoard(()=>board);
		const players = store.getValue('players')!;
		console.log(players);
		players.forEach(p => {
			const ctx = canvasRef.current?.getContext("2d");
				board.add_player(p.color);
				ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
				board.drawBoard(ctx!);
		})
		sendJsonMessage({type: 'start', params:{}})
	}, [])

	return (
		<main>
			<canvas ref={canvasRef}></canvas>
			<AsidePanel />
		</main>
	);
}
