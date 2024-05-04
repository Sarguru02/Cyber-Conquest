//export default function drawRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, angle: number = 0, color: string = 'red', name: string = 'rectangle') {
//	ctx.save();
//	ctx.rotate(angle);
//	ctx.translate(x + width / 2, y + height / 2);
//	ctx.fillStyle = color;
//	ctx.fillRect(-height / 2, -width / 2, width, height);
//	ctx.font = '20px Arial';
//	ctx.fillStyle = 'black';
//	// center the text in the rectangle
//	ctx.textAlign = 'center';
//	ctx.textBaseline = 'middle';
//	ctx.fillText(name, 0, 0);
//	ctx.restore();
//}
//45*Math.PI/180
//      ctx.save(); // Save the current transformation state
//      ctx.translate(x + boxWidth / 2, y + boxHeight / 2); // Translate to the center of the box
//      ctx.rotate(Math.PI / 2); // Rotate by 90 degrees clockwise
//      ctx.fillStyle = 'orange';
//      ctx.fillRect(-boxHeight / 2, -boxWidth / 2, boxHeight, boxWidth); // Draw the rotated box
//      // Draw text inside the rotated box
//      const text = "Rotated Box";
//      ctx.fillStyle = 'white';
//      ctx.textAlign = 'center';
//      ctx.textBaseline = 'middle';
//      ctx.fillText(text, 0, 0);
//      ctx.restore(); // Restore the previous transformation state
//
export const drawRect = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, angle: number = 0, color: string = 'red', name: string = 'rectangle') => {
	ctx.save();
	ctx.translate(x + width / 2, y + height / 2);
	ctx.rotate(angle);
	console.log("x and y", x, y)
	ctx.fillStyle = color;
	ctx.fillRect(-width / 2, -height / 2, width, height);
	ctx.font = '20px Arial';
	ctx.fillStyle = 'black';
	// center the text in the rectangle
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(name, 0, 0);
	ctx.restore();
};
