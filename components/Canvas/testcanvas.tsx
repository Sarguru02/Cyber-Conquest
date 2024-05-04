"use client"
import { useRef, useEffect, useState } from 'react';
import drawBoard from './drawBoard';

const Canvas = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current!;
		const ctx = canvas.getContext('2d')!;
		setContext(ctx);
		canvas.width = 75*6 + 100*2 + 20;
		canvas.height = 75*6 + 100*2 + 20;
	}, []);

	useEffect(() => {
		if (context) {
			drawBoard(context, { width: 75, height: 100 }, 10, 75*6 + 100*2 + 20, 75*6 + 100*2 + 20);
		}
	}, [context]);


	return <canvas ref={canvasRef} width={670} height={670} />;
};

export default Canvas;
