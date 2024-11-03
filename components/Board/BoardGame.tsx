"use client";
import React, { useEffect, useState } from "react";
import { Board } from "../Canvas/drawBoard";
import useCanvas from "@/hooks/useCanvas";
import { arrayType } from "@/types/arrayType";
import { Button } from "../ui/button";
// import AsidePanel from "../AsidePanel/AsidePanel";

const BoardGame = ({ players }: { players: any }) => {
	const canvasHeight = 670;
	const canvasWidth = 670;
	const boxSize = { width: 75, height: 100 };
	const sampleTexts: arrayType = ["1", "2", "3", "4", "5", "6"];
	const padding = 10;
	const [board, setBoard] = useState<Board | null>(null);
	const [curPlayer, setCurPlayer] = useState<number>(0);
	useEffect(
		() =>
			setBoard(
				new Board(
					padding,
					canvasHeight,
					canvasWidth,
					boxSize,
					sampleTexts,
					sampleTexts,
					sampleTexts,
					sampleTexts,
				),
			),
		[],
	);
	console.log(players);

	function draw(ctx: CanvasRenderingContext2D) {
		if (board) {
			ctx.strokeStyle = "white";
			board.drawBoard(ctx);
		}
	}

	function move(value: number) {
		if (canvasRef.current) {
			const ctx = canvasRef.current.getContext("2d");
			if (ctx && board) {
				board.players[curPlayer].move(ctx, value);
				setCurPlayer(prev => (prev + 1) % players.length);
			}
		}
	}

	function addPlayer() {
		if (canvasRef.current) {
			const ctx = canvasRef.current.getContext("2d");
			if (ctx && board) {
				// here we need to add players with colors 
				// also we need to add them to the board in the db
				board.add_player("red");
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				board.drawBoard(ctx);
			}
		}
	}

	function rollDice() {
		const dice1 = Math.ceil(Math.random() * 6);
		const dice2 = Math.ceil(Math.random() * 6);
		move(dice1 + dice2);
	}
	const canvasRef = useCanvas(draw, {
		width: canvasWidth,
		height: canvasHeight,
	});

	return (
		<>
			<canvas ref={canvasRef}></canvas>
			<Button onClick={addPlayer}>Add Player</Button>
			<Button onClick={rollDice}>Roll the dice</Button>
			{/*<AsidePanel />*/}
		</>
	);
};

export default BoardGame;
