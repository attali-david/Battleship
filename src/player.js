/*eslint-disable*/
import { gameboards } from "./gameboard.js";
export { players };

const int = function randomizer(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

function players(gameboard, turn, input) {
	if (turn === true) {
		gameboard.receiveAttack(input);
	} else if (turn === false) {
		let randomInt = int(0, 99);
		while (gameboard.board[randomInt] === "miss") {
			randomInt = int(0, 99);
		}
		gameboard.receiveAttack(randomInt);
	}
}
