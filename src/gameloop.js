import { gameboards } from "./gameboard.js";
import { ships } from "./ship.js";
import { players } from "./player.js";
import { events, controller } from "./events.js";

export { games };
const gameboard = gameboards();

const games = () => {
	// The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
	// const _patrol = ships(1);
	// const _sub = ships(2);
	// const _destroyer = ships(3);
	// const _battleship = ships(4);
	// const _carrier = ships(5);

	// axis generates a random integer
	function randomizer(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	// initializer ensures there is no doubling within cells and no wrapping across lines
	function initializer(min, max, shipLen, axisValue) {
		const int = randomizer(min, max, shipLen);

		for (var i = shipLen; i > 0; i--) {
			if ((int + i - 1) % 10 === 0) {
				console.log(`WRAP ERROR`);
				return initializer(min, max, shipLen);
			}
			// check if exceed 99 and 199
		}
		for (var i = shipLen; i > 0; i--) {
			let axisShift = i;
			if (axisValue > 0.5) {
				axisShift = 0;
				axisShift += 10;
			}
			if (shipLen === 1) {
				if (gameboard.verifyCoord(int, true) === true) {
					console.log(`BASE = 1: length: ${shipLen}, int: ${int}`);
					return int;
				} else {
					return initializer(min, max, shipLen);
				}
			} else if (shipLen > 1) {
				if (gameboard.verifyCoord(int + axisShift, true) === false) {
					return initializer(min, max, shipLen);
					console.log(`RECURSIVE: length: ${shipLen}, int: ${int}`);
				} else if (
					i === 1 &&
					gameboard.verifyCoord(int + axisShift, true) === true
				) {
					console.log(
						`BASE > 1: length: ${shipLen}, int: ${int}, axisValue: ${axisValue}`
					);
					return int;
				}
			}
		}
	}

	let _gamestate = true;

	return {
		// You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
		initialize() {
			const axisValue = randomizer(0, 1);
			for (var i = 5; i >= 0; i--) {
				gameboard.placeShip(initializer(0, 99, i, axisValue), ships(i));
				gameboard.placeShip(
					initializer(100, 199, i, axisValue),
					ships(i)
				);
			}
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
		// Create conditions so that the game ends once one players ships have all been sunk. This function is appropriate for the Game module.
		gamestate() {
			if (gameboard.endgame() === false) {
				_gamestate = false;
				controller.abort();
				console.log("win");
				// document.querySelectorAll(".cell").removeEventListener("click");
			}
		},
	};
};
