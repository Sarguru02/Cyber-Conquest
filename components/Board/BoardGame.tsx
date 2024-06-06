"use client"
import React, { useEffect, useState } from "react";
import { Board } from "../Canvas/drawBoard";
import useCanvas from "@/hooks/useCanvas";
import { arrayType } from "@/types/arrayType";
import AsidePanel from "../AsidePanel/AsidePanel";

const BoardGame = () => {
	const canvasHeight = 670;
	const canvasWidth = 670;
	const boxSize = { width: 75, height: 100 };
	const sampleTexts: arrayType = ["1", "2", "3", "4", "5", "6"];
	const padding = 10;
	const [board, setBoard] = useState<Board | null>(null);
	useEffect(() => setBoard(new Board(padding, canvasHeight, canvasWidth, boxSize, sampleTexts, sampleTexts, sampleTexts, sampleTexts)), []);

	function draw(ctx: CanvasRenderingContext2D) {
		if (board) {
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
				board.add_player("red");
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				board.drawBoard(ctx);
			}
		}
	}
	const canvasRef = useCanvas(draw, { width: canvasWidth, height: canvasHeight });

	return (
		<>
			<canvas ref={canvasRef}></canvas>
			<button onClick={addPlayer}>Add Player</button>
			<button onClick={move}>Move</button>
			<AsidePanel />
		</>
	)
};

export default BoardGame;
