/*eslint-disable*/
export { gameboards };
import { ships } from "./ship.js";

const gameboards = () => {
	let _board = {};
	for (let i = 0; i < 199; i++) {
		_board[i] = false;
	}
	// !!!!!!!!must differentiate between computer ships and human ships
	let _win = 5;

	return {
		// Report whether or not all of their ships have been sunk.
		endgame() {
			if (_win > 0) {
				return true;
			} else {
				return false;
			}
		},
		// Places ships at specific coordinates by calling the ship factory function.
		placeShip(coord, ship, axisValue) {
			let axisCoord = 0;

			for (var i = 0; i < ship.length; i++) {
				ship.whereHit[coord + axisCoord] = false;
				_board[coord + axisCoord] = ship;
				// document.getElementById(coord + axisCoord).innerHTML = "X";

				if (axisValue > 50) {
					axisCoord += 10;
				} else {
					axisCoord += 1;
				}
			}
		},
		// Takes a coordinate, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
		receiveAttack(coord) {
			if (_board[coord] === false) {
				_board[coord] = "miss";
				document.getElementById(coord).setAttribute("class", "miss");
				return false;
			} else if (typeof _board[coord] === "object") {
				document.getElementById(coord).setAttribute("class", "hit");
				_board[coord].hit(coord);
				if (!!_board[coord].isSunk()) {
					_win--;
					console.log("sunk", _win);
					this.endgame();
				}
				return true;
			}
		},
		verifyCoord(coord, value) {
			if (_board[coord] === "miss" && value === false) {
				return false;
			}
			if (typeof _board[coord] === "object" && value === true) {
				return false;
			}
			return true;
		},
	};
};
