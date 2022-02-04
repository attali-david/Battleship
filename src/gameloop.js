import { gameboards } from "./gameboard.js";
import { ships } from "./ship.js";
import { players } from "./player.js";
import { events, controller } from "./events.js";

export { games };
const gameboard = gameboards();

const games = () => {
	// The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
	const _patrol = ships(1);
	const _sub = ships(2);
	const _destroyer = ships(3);
	const _battleship = ships(4);
	const _carrier = ships(5);

	function randomizer(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	let _gamestate = true;

	return {
		// You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
		initialize() {
			// gameboard.placeShip(int(0, 99), _patrol);
			// gameboard.placeShip(int(0, 99), _patrol);
			// gameboard.placeShip(int(0, 99), _patrol);
			// gameboard.placeShip(int(0, 99), _patrol);
			// gameboard.placeShip(int(0, 99), _patrol);
			// gameboard.placeShip(int(100, 199), _patrol);
			// gameboard.placeShip(int(100, 199), _patrol);
			// gameboard.placeShip(int(100, 199), _patrol);
			gameboard.placeShip(randomizer(100, 199), _sub);
			gameboard.placeShip(randomizer(100, 199), _patrol);
		},
		// The game loop should step through the game turn by turn using only methods from other objects.
		turns(coord, turn) {
			if (_gamestate === true) {
				players(gameboard, true, coord);
				if (_gamestate === true) {
					players(gameboard, false);
				}
			}
		},
		gamestate() {
			if (gameboard.endgame() === false) {
				_gamestate = false;
				controller.abort();
				alert("You won!");
				// document.querySelectorAll(".cell").removeEventListener("click");
			}
		},
		// Create conditions so that the game ends once one players ships have all been sunk. This function is appropriate for the Game module.
	};
};
