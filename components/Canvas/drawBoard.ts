import { arrayType } from "@/types/arrayType";
import { BoxType, pointType } from "@/types/boxType";

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
	players: Array<Player> = [];
	centerPoints:Array<pointType> = [];

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
		this.centerPoints = [];
		this.players = [];
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
		//Down
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


		//Left
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


		//Up
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


		//Right
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
		this.centerPoints = arr;
	}

	drawBoard() {
		this.getCenterPoints();
		this.players.forEach(a => a.draw());
		this.centerPoints.forEach(a => {
			this.strokeFromCenter(a.x, a.y, a.width, a.height);
			this.writeText(a.text, a.x, a.y, a.angle, "Arial", "black", 12);
		})
	}

	strokeFromCenter(x: number, y: number, width: number, height: number) {
		this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
	}
	add_player(color: string) {
		// Implementation for adding a player can be added here.
		this.getCenterPoints();
		this.players.push(new Player(this, color));
	}

}

export class Player {
	board: Board;
	position: number;
	color: string;
	x: number;
	y: number;
	constructor(game: Board, color: string) {
		this.board = game;
		this.position = 0;
		this.color = color;
		this.x = this.board.centerPoints[this.position].x;
		this.y = this.board.centerPoints[this.position].y;
	}

	draw() {
		this.board.ctx.fillStyle = this.color;
		this.board.ctx.beginPath();
		this.board.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
		this.board.ctx.fill();
	}

	update() {
		var finalX = this.board.centerPoints[(this.position + 1) % 28].x;
		var finalY = this.board.centerPoints[(this.position + 1) % 28].y;
		if (this.x !== finalX) {
			var dx = finalX - this.x;
			if (Math.abs(dx) > 1) {
				this.x += dx / (10 * 5);
			} else {
				this.x = finalX;
			}
		} else {
			if (this.y !== finalY) {
				var dy = finalY - this.y;
				if (Math.abs(dy) > 1) {
					this.y += dy / (10 * 5);
				} else {
					this.y = finalY;
				}
			} else {
				this.x = finalX;
				this.y = finalY;
				return true;
			}
		}
		return false;
	}

	moveOne() {
		const width = this.board.boardWidth;
		const height = this.board.boardHeight;
		this.board.ctx.clearRect(0, 0, width, height);
		this.board.drawBoard();
		console.log(this.position, this.x, this.y);
		if (!this.update()) {
			requestAnimationFrame(this.moveOne.bind(this));
		}
	}

	move(n: number) {
		n = n - 1;
		while (this.position !== n) {
			this.moveOne();
			this.position = (this.position + 1) % 28;
		}
	}
}
