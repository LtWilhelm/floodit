import { RGB } from '../util/rgb';
import { Cell } from './Cell'

type row = Cell[]

export class FloodIt {
  constructor(size: number, colors: number = 6) {
    this.size = size;
    this.rows = [];
    this.availColors = [];
    for (let c = 0; c < colors; c++) {
      this.availColors.push(new RGB().randomize());
    }
    for (let y = 0; y < size; y++) {
      const row: Cell[] = []
      for (let x = 0; x < size; x++) {
        row.push(new Cell(x, y, this))
      }
      this.rows.push(row);
    }
  }

  rows: row[];
  size: number;

  availColors: RGB[];

  checkWin = () => this.rows.every(r => r[0].color.isEqual(this.rows[0][0].color) && r.every(c => c.color.isEqual(r[0].color)));

  mount = (id: string) => {
    const el = document.getElementById(id);
    el.setAttribute("style", `grid-template-columns: repeat(${this.size}, 2em);grid-template-rows: repeat(${this.size}, 2em);`);
    this.rows.forEach(r => {
      r.forEach(c => {
        const cell = document.createElement('div');
        cell.id = `${c.posX},${c.posY}`;
        cell.style.backgroundColor = c.color.getColorString();
        cell.addEventListener('mouseup', c.onClick);
        el.appendChild(cell);
      });
    });
  }

  chooseColor = (color: RGB) => {
    const first = this.rows[0][0];
    if (!first.color.isEqual(color)) {
      first.changeColor(color);
    }
  }
}