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
		gameboard.receivedAttack(input);
	} else if (turn === false) {
		let randomInt = int(100, 199);
		console.log(randomInt);
		while (gameboard.board[randomInt] === true) {
			randomInt = int(100, 199);
		}
		gameboard.receiveAttack(randomInt);
	}
}
