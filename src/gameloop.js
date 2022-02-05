import { gameboards } from "./gameboard.js";
import { ships } from "./ship.js";
import { players } from "./player.js";
import { events, controller } from "./events.js";

export { games };
const gameboard = gameboards();

// The game loop should set up a new game by creating Players and Gameboards. For now just populate each Gameboard with predetermined coordinates. You can implement a system for allowing players to place their ships later.
const games = () => {
	// const _patrol = ships(1);
	// const _sub = ships(2);
	// const _destroyer = ships(3);
	// const _battleship = ships(4);
	// const _carrier = ships(5);

	let _gamestate = true;

	return {
		// You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.
		initialize() {
			for (var i = 5; i >= 0; i--) {
				let axisValue = randomizer(0, 100);
				gameboard.placeShip(
					initializer(0, 99, i, axisValue),
					ships(i),
					axisValue
				);
				gameboard.placeShip(
					initializer(100, 199, i, axisValue),
					ships(i),
					axisValue
				);
			}
		},
		// The game loop should step through the game turn by turn using only methods from other objects.
		turns(coord, turn) {
			if (_gamestate === true) {
				players(gameboard, true, coord);
				if (_gamestate === true && !players(gameboard, true, coord)) {
					let computerTurn = players(gameboard, false);
					if (_gamestate === true && !!computerTurn) {
						console.log("computer goes again");
						players(gameboard, false);
					}
				}
			}
		},
		// Create conditions so that the game ends once one players ships have all been sunk. This function is appropriate for the Game module.
		gamestate() {
			if (gameboard.endgame() === false) {
				_gamestate = false;
				controller.abort();
				// document.querySelectorAll(".cell").removeEventListener("click");
			}
		},
	};
};

// axis generates a random integer
function randomizer(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// initializer ensures there is no doubling within cells and no wrapping across lines
function initializer(min, max, shipLen, axisValue) {
	const int = randomizer(min, max, shipLen);
	let axisCoord;
	if (axisValue > 50) {
		axisCoord = 10;
	} else {
		axisCoord = 0;
	}
	// Checks if ships wrap around rows horizontally or beyond board vertically. If so, recursively calls initializer().
	if (int < 100 && int + shipLen * 10 > 100) {
		return initializer(min, max, shipLen, axisValue);
	}
	if (int >= 100 && int + shipLen * 10 > 199) {
		return initializer(min, max, shipLen, axisValue);
	}
	for (var i = shipLen; i > 0; i--) {
		if ((int + i - 1) % 10 === 0) {
			return initializer(min, max, shipLen, axisValue);
		}
	}
	// Checks if ships are doubled up in cells. If so, recursively calls initializer().
	for (var i = shipLen; i > 0; i--) {
		if (shipLen === 1) {
			if (gameboard.verifyCoord(int, true) === true) {
				return int;
			} else {
				return initializer(min, max, shipLen, axisValue);
			}
		} else if (shipLen > 1) {
			if (gameboard.verifyCoord(int + axisCoord, true) === false) {
				return initializer(min, max, shipLen, axisValue);
			} else if (
				i === 1 &&
				gameboard.verifyCoord(int + axisCoord, true) === true
			) {
				return int;
			}
		}
	}
}
