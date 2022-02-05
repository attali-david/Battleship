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
		if (!!gameboard.receiveAttack(input)) {
			return true;
		}
	} else if (turn === false) {
		let randomInt = randomizer(0, 99);
		while (gameboard.verifyCoord(randomInt, false) === false) {
			randomInt = randomizer(0, 99);
		}
		gameboard.receiveAttack(randomInt);
		if (!!gameboard.receiveAttack(randomInt)) {
			console.log("computer should get another turn");
			return true;
		} else {
			return false;
		}
	}
	game.gamestate();
}

/*
As i loop through the length of the ship, i can check to see if any of the cells > 0 of the ship would land on a cell whose % 10 === 0
*/
