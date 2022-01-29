/*eslint-disable*/
import { gameboards } from "./gameboard.js";
import { ships } from "./ship.js";
import { players } from "./player.js";

export { games };
const games = () => {
	// The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
	const patrol = ships(1);
	const sub = ships(2);
	const destroyer = ships(3);
	const battleship = ships(4);
	const carrier = ships(5);

	const int = function randomizer(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const gameboard = gameboards();

	return {
		// You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
		initialize() {
			gameboard.placeShip(int(0, 99), patrol);
			gameboard.placeShip(int(0, 99), patrol);
			gameboard.placeShip(int(0, 99), patrol);
			gameboard.placeShip(int(0, 99), patrol);
			gameboard.placeShip(int(0, 99), patrol);
			gameboard.placeShip(int(100, 199), patrol);
			gameboard.placeShip(int(100, 199), patrol);
			gameboard.placeShip(int(100, 199), patrol);
			gameboard.placeShip(int(100, 199), patrol);
			gameboard.placeShip(int(100, 199), patrol);
		},
		// The game loop should step through the game turn by turn using only methods from other objects.
		turn(input, value) {
			players(gameboard, value, input);
		},
		// Create conditions so that the game ends once one players ships have all been sunk. This function is appropriate for the Game module.6
	};
};
// humanBoard.endgame() === true ||
// computerBoard.endgame() === true
