import { arrayType } from "@/types/arrayType";
import { BoxType } from "@/types/boxType";

export default function drawBoard(ctx: CanvasRenderingContext2D, boxSize: BoxType, padding: number, canvasHeight: number, canvasWidth: number,downTexts: arrayType,leftTexts: arrayType,upTexts: arrayType,rightTexts: arrayType) {
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

  leftTexts.reverse();
  downTexts.reverse();

  //Corners
  writeText(ctx, "↖️\nGO", canvasWidth - (padding + (boxSize.height / 2)), canvasHeight - (padding + (boxSize.height / 2)), -45, "Arial", "black", 20);
  writeText(ctx, "Crypto\nLocker", padding + (boxSize.height / 2), canvasHeight - (padding + (boxSize.height / 2)), 45, "Arial", "black", 20);
  writeText(ctx, "No Internet", padding + (boxSize.height / 2), padding + (boxSize.height / 2), -45 - 180, "Arial", "black", 20);
  writeText(ctx, "Kronos", canvasWidth - (padding + (boxSize.height / 2)), padding + (boxSize.height / 2), 45 + 180, "Arial", "black", 20);

  rightTexts.forEach((text: string, i: number) => {
    const xPos = canvasWidth - (padding + (boxSize.height / 2));
    const yPos = boxSize.height + (i * boxSize.width) + (boxSize.width / 2) + padding;
    writeText(ctx, text, xPos, yPos, 270, "Arial", "black", 15);
  });


  downTexts.forEach((text: string, i: number) => {
    const xPos = canvasWidth-(boxSize.height + (i * boxSize.width) + (boxSize.width / 2) + padding);
    const yPos = canvasHeight - (padding + (boxSize.height / 2));
    writeText(ctx, text, xPos, yPos, 0, "Arial", "black", 15);
  });

  leftTexts.forEach((text: string, i: number) => {
    const xPos = padding + (boxSize.height / 2);
    const yPos = canvasHeight -(boxSize.height + (i * boxSize.width) + (boxSize.width / 2) + padding);
    writeText(ctx, text, xPos, yPos, 90, "Arial", "black", 15);
  });

  upTexts.forEach((text: string, i: number) => {
    const xPos = boxSize.height + (i * boxSize.width) + (boxSize.width / 2) + padding;
    const yPos = padding + (boxSize.height / 2);
    writeText(ctx, text, xPos, yPos, 180, "Arial", "black", 15);
  });
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

