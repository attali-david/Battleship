/*eslint-disable*/
import { gameboards } from "./gameboard.js";
import { players } from "./player.js";
export { games };
const games = () => {
	const int = function randomizer(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const human = players();
	const computer = players();
	const humanBoard = gameboards();
	const computerBoard = gameboards();

	for (let i = 0; i < 5; i++) {
		humanBoard.placeShip(int(), patrol);
		computer.placeShip(int(), patrol);
	}
	// return {
	// 	render() {

	// 	}
	// 	turn() {

	// 	}
	// }
};
// The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
// You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
// The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
// Create conditions so that the game ends once one players ships have all been sunk. This function is appropriate for the Game module.
