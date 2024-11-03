"use client";
import { useRef, useEffect } from "react";

type CanvasProps = {
  width: number;
  height: number;
};
/**
 * This hook is used to create a canvas and use it properly I suppose. 
 *
 * Parameters : draw function, 2d canvas context
 *
 */


const useCanvas = (
  draw: (ctx: CanvasRenderingContext2D) => void,
  options: CanvasProps = { width: 500, height: 500 },
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;
    canvas.width = options.width;
    canvas.height = options.height;
    draw(context);
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
