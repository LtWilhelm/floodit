import { randomInRange } from './random';

export class RGB {
  red: number;
  green: number;
  blue: number;
  isEqual = (rgb2: RGB) => (
    this.blue === rgb2.blue &&
    this.green === rgb2.green &&
    this.red === rgb2.red
  )
  randomize = () => {
    this.red = randomInRange(0, 256);
    this.green = randomInRange(0, 256);
    this.blue = randomInRange(0, 256);
    return this;
  }
  getColorString = () => `rgb(${this.red}, ${this.green}, ${this.blue})`;
}