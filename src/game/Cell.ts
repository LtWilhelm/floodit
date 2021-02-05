import { FloodIt } from "./FloodIt";
import { RGB } from '../util/rgb';
import { getRandomFromArray } from "../util/random";
import { sleep } from '../util/sleep';

export class Cell {
  posX: number;
  posY: number;
  game: FloodIt;
  constructor(x: number, y: number, game: FloodIt) {
    this.posX = x;
    this.posY = y;
    this.game = game;
    this.color = getRandomFromArray(game.availColors);

  }
  color: RGB;
  // top?: Cell;
  // bottom?: Cell;
  // left?: Cell;
  // right?: Cell;

  onClick = () => {
    this.game.chooseColor(this.color);
  }

  changeColor = async (color: RGB) => {
    const oldColor = this.color
    this.color = color;
    let endOfLine = true;
    await sleep(30);
    if (this.posY > 0) {
      const top = this.game.rows[this.posY - 1][this.posX];
      if (top.color.isEqual(oldColor)) {
        endOfLine = false;
        top.changeColor(this.color);
      }
    }
    if (this.posX > 0) {
      const left = this.game.rows[this.posY][this.posX - 1];
      if (left.color.isEqual(oldColor)) {
        endOfLine = false;
        left.changeColor(this.color);
      }
    }
    if (this.posY < this.game.size - 1) {
      const bottom = this.game.rows[this.posY + 1][this.posX];
      if (bottom.color.isEqual(oldColor)) {
        bottom.changeColor(this.color);
      }
    }
    if (this.posX < this.game.size - 1) {
      const right = this.game.rows[this.posY][this.posX + 1];
      if (right.color.isEqual(oldColor)) {
        endOfLine = false;
        right.changeColor(this.color);
      }
    }
    if (endOfLine) {
      this.game.turnInProgress = false;
    }
    if (this.posX === this.game.size - 1 && this.posY === this.game.size - 1) {
      this.game.checkWin();
    }
    this.render();
  }

  render = () => {
    const el = document.getElementById(`${this.posX},${this.posY}`);
    el.style.backgroundColor = this.color.getColorString();
    el.removeEventListener('mouseup', this.onClick);
  }
}