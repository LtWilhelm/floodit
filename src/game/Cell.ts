import { FloodIt } from "./FloodIt";
import { RGB } from '../util/rgb';
import { getRandomFromArray } from "../util/random";

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
}