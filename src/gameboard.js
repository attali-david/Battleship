/*eslint-disable*/
export { gameboards };
import { ships } from "./ship.js";

const gameboards = () => {
	let _board = {};
	for (let i = 0; i < 199; i++) {
		_board[i] = false;
	}
	let _win = 1;

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
		placeShip(coord, ship) {
			for (var i = 0; i < ship.length; i++) {
				ship.whereHit[coord + i] = "ship";
				_board[coord + i] = ship.whereHit[coord + i];

				console.log(_board);
				document.getElementById(coord + i).innerHTML = "X";
			}
			// _board[coord] = true;
			// console.log(coord, _board[coord]);
		},
		// Takes a coordinate, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
		receiveAttack(coord) {
			if (_board[coord] === false) {
				_board[coord] = "miss";
				document.getElementById(coord).setAttribute("class", "miss");
			} else if (_board[coord] != false && _board[coord] != "miss") {
				_board[coord].hit(num);
				document.getElementById(coord).setAttribute("class", "hit");
				_win--;
				this.endgame();
			}
		},
		verifyCoord(coord) {
			if (_board[coord] === "miss") {
				return false;
			}
			return true;
		},
	};
};
