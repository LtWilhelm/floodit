import './index.css';
import {FloodIt} from './game/FloodIt';

let game: FloodIt;

const gameSizeSelect: HTMLSelectElement = document.querySelector('select[name="gameSize"]');
let gameSize = parseInt(gameSizeSelect.value);
gameSizeSelect.addEventListener('change', (e) => {
  gameSize = parseInt(gameSizeSelect.value);
})

const colorCountSelect: HTMLSelectElement = document.querySelector('select[name="colorCount"]');
let colorCount = parseInt(colorCountSelect.value);
colorCountSelect.addEventListener('change', (e) => {
  colorCount = parseInt(colorCountSelect.value);
})

const newGameButton = document.querySelector('button');
newGameButton.addEventListener('mouseup', newGame)

function newGame() {
  game = new FloodIt(gameSize, colorCount);
  
  game.mount('game');
}

newGame()
