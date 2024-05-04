"use client"
import React, { useRef, useEffect } from 'react';

interface CanvasProps {
	width: number;
	height: number;
}

const Canvas = ({ width = window.innerWidth, height = window.innerHeight }: CanvasProps) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const boxsize = {
		width: 150, 
		height: 175,
	}

	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas.getContext('2d');
			context.beginPath();
			context?.rect(20, 20, boxsize.width, boxsize.height);
			context?.fill();
			context?.beginPath();
			context?.rect(20+boxsize.width+10, 20, boxsize.width, boxsize.height);
			context.fill();
		}
	}, []);

	return <canvas ref={canvasRef} height={height} width={width} />;
};

export default Canvas;
