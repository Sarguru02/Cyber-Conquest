import { arrayType } from "@/types/arrayType";
import { BoxType } from "@/types/boxType";

export class Board {
	ctx: CanvasRenderingContext2D;
	padding: number;
	height: number;
	width: number;
	boxSize: BoxType;
	uptexts: arrayType;
	downtexts: arrayType;
	lefttexts: arrayType;
	righttexts: arrayType;
	boardWidth: number;
	boardHeight: number;
	centerPoints: Array<{ x: number, y: number }>;

	constructor(ctx: CanvasRenderingContext2D, padding: number, canvasHeight: number, canvasWidth: number, boxSize: BoxType, downTexts: arrayType, leftTexts: arrayType, upTexts: arrayType, rightTexts: arrayType) {
		this.ctx = ctx;
		this.padding = padding;
		this.height = canvasHeight;
		this.width = canvasWidth;
		this.boxSize = boxSize;
		this.uptexts = upTexts;
		this.downtexts = downTexts;
		this.lefttexts = leftTexts;
		this.righttexts = rightTexts;
		this.boardWidth = canvasWidth - padding;
		this.boardHeight = canvasHeight - padding;
		this.centerPoints = [{ x: (this.boardWidth - (this.boxSize.height / 2)), y: (this.boardHeight - this.boxSize.height / 2) }];
	}


	writeText(text: string, x: number, y: number, angle: number, font: string, color: string, size: number) {
		const angleInRadians = (angle * Math.PI) / 180;
		this.ctx.translate(x, y);
		this.ctx.rotate(angleInRadians);

		const textarr = text.split('\n');
		const lineHeight = 20;
		this.ctx.font = `${size}px ${font}`;
		this.ctx.fillStyle = color;
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		textarr.forEach((line: string, i: number) => {
			this.ctx.fillText(line, 0, i * lineHeight);
		});
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
	}


	fromStartX(x: number) {
		return this.padding + x;
	}

	fromEndX(x: number) {
		return this.width - (this.padding + x);
	}


	fromStartY(y: number) {
		return this.padding + y;
	}

	fromEndY(y: number) {
		return this.height - (this.padding + y);
	}


	getCenterPoints() {
    const arr = [];
    arr.push({
      x: this.fromEndX(this.boxSize.height / 2),
      y: this.fromEndY(this.boxSize.height / 2),
      width: this.boxSize.height,
      height: this.boxSize.height,
      text: "GO",
      angle: (-45),
    });
    for (let j = 0; j < 6; j++) {
      arr.push({
        x: this.fromEndX(
          this.boxSize.height + this.boxSize.width * j + this.boxSize.width / 2,
        ),
        y: this.fromEndY(this.boxSize.height / 2),
        width: this.boxSize.width,
        height: this.boxSize.height,
        text: this.downtexts[j],
        angle: (0),
      });
    }
    arr.push({
      x: this.fromStartX(this.boxSize.height / 2),
      y: this.fromEndY(this.boxSize.height / 2),
      width: this.boxSize.height,
      height: this.boxSize.height,
      text: "Crypto\nLocker",
      angle: (45),
    });
    for (let j = 0; j < 6; j++) {
      arr.push({
        x: this.fromStartX(this.boxSize.height / 2),
        y: this.fromEndY(
          this.boxSize.height + this.boxSize.width * j + this.boxSize.width / 2,
        ),
        width: this.boxSize.height,
        height: this.boxSize.width,
        text: this.lefttexts[j],
        angle: (90),
      });
    }
    arr.push({
      x: this.fromStartX(this.boxSize.height / 2),
      y: this.fromStartY(this.boxSize.height / 2),
      width: this.boxSize.height,
      height: this.boxSize.height,
      text: "No\nInternet",
      angle: (135),
    });

    for (let j = 0; j < 6; j++) {
      arr.push({
        x: this.fromStartX(
          this.boxSize.height + this.boxSize.width * j + this.boxSize.width / 2,
        ),
        y: this.fromStartY(this.boxSize.height / 2),
        width: this.boxSize.width,
        height: this.boxSize.height,
        text: this.uptexts[j],
        angle: (180),
      });
    }
    arr.push({
      x: this.fromEndX(this.boxSize.height / 2),
      y: this.fromStartY(this.boxSize.height / 2),
      width: this.boxSize.height,
      height: this.boxSize.height,
      text: "Kronos",
      angle: (-135),
    });
    for (let j = 0; j < 6; j++) {
      arr.push({
        x: this.fromEndX(this.boxSize.height / 2),
        y: this.fromStartY(
          this.boxSize.height + this.boxSize.width * j + this.boxSize.width / 2,
        ),
        width: this.boxSize.height,
        height: this.boxSize.width,
        text: this.righttexts[j],
        angle: (-90),
      });
    }
		return arr;
	}

	drawBoard() {
		const centres = this.getCenterPoints();
		centres.forEach(a => {
			this.strokeFromCenter(a.x, a.y, a.width, a.height);
			this.writeText(a.text, a.x, a.y, a.angle, "Arial", "black", 12);
		})
	}

	strokeFromCenter(x: number, y: number, width: number, height: number) {
		this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
	}

	add_player() {

	}
}
