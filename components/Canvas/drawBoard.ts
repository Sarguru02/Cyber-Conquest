import { arrayType } from "@/types/arrayType";
import { BoxType, pointType } from "@/types/boxType";

export class Board {
  padding: number;
  height: number;
  width: number;
  boxSize: BoxType;
  uptexts: arrayType;
  downtexts: arrayType;
  lefttexts: arrayType;
  righttexts: arrayType;
  players: Array<Player> = [];
  centerPoints: Array<pointType> = [];

  constructor(
    padding: number,
    canvasHeight: number,
    canvasWidth: number,
    boxSize: BoxType,
    downTexts: arrayType,
    leftTexts: arrayType,
    upTexts: arrayType,
    rightTexts: arrayType,
  ) {
    this.padding = padding;
    this.height = canvasHeight;
    this.width = canvasWidth;
    this.boxSize = boxSize;
    this.uptexts = upTexts;
    this.downtexts = downTexts;
    this.lefttexts = leftTexts;
    this.righttexts = rightTexts;
    this.centerPoints = [];
    this.players = [];
  }

  writeText(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    angle: number,
    font: string,
    color: string,
    size: number,
  ) {
    const angleInRadians = (angle * Math.PI) / 180;
    ctx.translate(x, y);
    ctx.rotate(angleInRadians);

    const textarr = text.split("\n");
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
      angle: -45,
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
        angle: 0,
      });
    }

    //Left
    arr.push({
      x: this.fromStartX(this.boxSize.height / 2),
      y: this.fromEndY(this.boxSize.height / 2),
      width: this.boxSize.height,
      height: this.boxSize.height,
      text: "Crypto\nLocker",
      angle: 45,
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
        angle: 90,
      });
    }

    //Up
    arr.push({
      x: this.fromStartX(this.boxSize.height / 2),
      y: this.fromStartY(this.boxSize.height / 2),
      width: this.boxSize.height,
      height: this.boxSize.height,
      text: "No\nInternet",
      angle: 135,
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
        angle: 180,
      });
    }

    //Right
    arr.push({
      x: this.fromEndX(this.boxSize.height / 2),
      y: this.fromStartY(this.boxSize.height / 2),
      width: this.boxSize.height,
      height: this.boxSize.height,
      text: "Kronos",
      angle: -135,
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
        angle: -90,
      });
    }
    this.centerPoints = arr;
  }

  drawBoard(ctx: CanvasRenderingContext2D) {
    this.getCenterPoints();
    this.players.forEach((a) => a.draw(ctx));
    this.centerPoints.forEach((a) => {
      this.strokeFromCenter(ctx, a.x, a.y, a.width, a.height);
      this.writeText(ctx, a.text, a.x, a.y, a.angle, "Arial", "white", 12);
    });
  }

  strokeFromCenter(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
  ) {
    ctx.strokeRect(x - width / 2, y - height / 2, width, height);
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
  iterator: number;
  constructor(game: Board, color: string) {
    this.board = game;
    this.position = 0;
    this.color = color;
    this.x = this.board.centerPoints[this.position].x;
    this.y = this.board.centerPoints[this.position].y;
    this.iterator = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
		// this function will draw the player.... need to design this properly
		// It just draws a circle for now
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  update(n: number) {
    const path = this.board.centerPoints;
    const targetPoint = path[(this.position + 1) % 28];
    const dx = targetPoint.x - this.x;
    const dy = targetPoint.y - this.y;

    this.x += dx / 20; // Adjust the divisor to control the speed
    this.y += dy / 20;

    if (Math.abs(dx) < 10 && Math.abs(dy) < 10 && this.iterator <= n) {
      this.x = targetPoint.x;
      this.y = targetPoint.y;
      this.position = (this.position + 1) % 28;
      this.iterator += 1;
    }
    return this.iterator === n;
  }

  move(ctx: CanvasRenderingContext2D, n: number) {
    const animateFrame = () => {
      if (!this.update(n)) {
        requestAnimationFrame(() => animateFrame());
      }
      ctx.clearRect(0, 0, this.board.width, this.board.height);
      this.board.drawBoard(ctx);
      if (this.iterator === n) {
        this.iterator = 0;
      }
    };
    animateFrame();
  }
}
