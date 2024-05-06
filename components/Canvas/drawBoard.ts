import { BoxType } from "@/types/boxType";

export default function drawBoard(ctx: CanvasRenderingContext2D, boxSize: BoxType, padding: number, canvasHeight: number, canvasWidth: number) {
  ctx.strokeStyle = "red";
  ctx.lineWidth = 0.5;
  ctx.rect(
    padding,
    padding,
    canvasWidth - 2 * padding,
    canvasHeight - 2 * padding,
  );
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(padding, padding + boxSize.height);
  ctx.lineTo(canvasWidth - padding, padding + boxSize.height);
  ctx.moveTo(padding + boxSize.height, padding);
  ctx.lineTo(padding + boxSize.height, canvasHeight - padding);
  ctx.moveTo(canvasWidth - padding - boxSize.height, padding);
  ctx.lineTo(canvasWidth - padding - boxSize.height, canvasHeight - padding);
  ctx.moveTo(padding, canvasHeight - (padding + boxSize.height));
  ctx.lineTo(canvasWidth - padding, canvasHeight - (padding + boxSize.height));
  ctx.stroke();

  for (let i = 1; i < 6; i++) {
    ctx.beginPath();
    const x = boxSize.height + padding + i * boxSize.width;
    ctx.moveTo(x, padding);
    ctx.lineTo(x, padding + boxSize.height);
    ctx.stroke();
  }
  for (let i = 1; i < 6; i++) {
    ctx.beginPath();
    const x = boxSize.height + padding + i * boxSize.width;
    ctx.moveTo(x, canvasHeight - padding);
    ctx.lineTo(x, canvasHeight - (padding + boxSize.height));
    ctx.stroke();
  }
  for (let i = 1; i < 6; i++) {
    ctx.beginPath();
    const y = boxSize.height + padding + i * boxSize.width;
    ctx.moveTo(canvasHeight - padding, y);
    ctx.lineTo(canvasHeight - (padding + boxSize.height), y);
    ctx.stroke();
  }
  for (let i = 1; i < 6; i++) {
    ctx.beginPath();
    const y = boxSize.height + padding + i * boxSize.width;
    ctx.moveTo(padding, y);
    ctx.lineTo(padding + boxSize.height, y);
    ctx.stroke();
  }


  //Corners
  writeText(ctx, "JAIL", padding + (boxSize.height / 2), padding + (boxSize.height / 2), -45 - 180, "Arial", "black", 20);
  writeText(ctx, "First\nBox", padding + (boxSize.height / 2), canvasHeight - (padding + (boxSize.height / 2)), 45, "Arial", "black", 20);
  writeText(ctx, "Second\nBox", canvasWidth - (padding + (boxSize.height / 2)), padding + (boxSize.height / 2), 45 + 180, "Arial", "black", 20);
  writeText(ctx, "↖️\nGO", canvasWidth - (padding + (boxSize.height / 2)), canvasHeight - (padding + (boxSize.height / 2)), -45, "Arial", "black", 20);

}

function writeText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, angle: number, font: string, color: string, size: number) {
  const angleInRadians = (angle * Math.PI) / 180;
  ctx.translate(x, y);
  ctx.rotate(angleInRadians);

  const textarr = text.split('\n');
  const lineHeight = 20;
  ctx.font = `${size}px ${font}`;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  textarr.forEach((line: string, i: number) => {
    ctx.fillText(line, 0, i * lineHeight);
  });
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

