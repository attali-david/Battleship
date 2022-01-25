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
		console.log("here");
		gameboard.receivedAttack(input);
	} else if (turn === false) {
		let randomInt = int(0, 100);
		console.log(randomInt);
		while (gameboard.board[randomInt] === true) {
			randomInt = int(0, 100);
		}
		gameboard.receiveAttack(randomInt);
	}
}
