/*eslint-disable*/
import { game } from "./index.js";
export { players };

function randomizer(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function players(gameboard, turn, input) {
	if (turn === true) {
		gameboard.receiveAttack(input);
	} else if (turn === false) {
		let randomInt = randomizer(0, 99);
		while (gameboard.verifyCoord(randomInt) === false) {
			randomInt = randomizer(0, 99);
		}
		gameboard.receiveAttack(randomInt);
	}
	game.gamestate();
}
