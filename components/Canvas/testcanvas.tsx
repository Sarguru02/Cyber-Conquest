"use client"
import { useRef, useEffect, useState } from 'react';
import drawBoard from './drawBoard';
import { arrayType } from '@/types/arrayType';

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
			const sampleTexts: arrayType = ["1", "2", "3", "4", "5", "6"];
			const boxSize = { width: 75, height: 100 };
			const padding = 10;
			const canvasWidth = boxSize.width * 6 + boxSize.height * 2 + 2*padding;
			const canvasHeight = boxSize.width * 6 + boxSize.height * 2 + 2*padding;
			drawBoard(context, boxSize, 10, canvasHeight, 75*6 + 100*2 + 20, sampleTexts, sampleTexts, sampleTexts, sampleTexts);
		}
	}, [context]);


	return <canvas ref={canvasRef} width={670} height={670} />;
};

export default Canvas;
