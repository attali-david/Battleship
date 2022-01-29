/*eslint-disable*/
export { gameboards };
import { ships } from "./ship.js";

const gameboards = () => {
	let _board = {};
	for (let i = 0; i < 199; i++) {
		_board[i] = false;
	}
	let _win = 5;

	return {
		// board: _board,
		// Gameboards should be able to report whether or not all of their ships have been sunk.
		endgame() {
			if (_win > 0) {
				return true;
			} else {
				return false;
			}
		},
		// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
		placeShip(coord, ship) {
			_board[coord] = true;
			console.log("_BOARD", _board);
			document.getElementById(coord).innerHTML = "P";
		},
		// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
		receiveAttack(coord) {
			if (_board[coord] === false) {
				// keep track of missed
				// ERROR: New board here!!!!!!!!!! Old board rewritten?
				console.log("OH NO");
				console.log("_BOARD", _board);
				_board[`${coord}`] = "miss";
				document
					.getElementById(`${coord}`)
					.setAttribute("class", "miss");
			} else {
				// PLACEHOLDER!!!! DELETE WITH DOM!!!!
				// _board[coord].hit(0);
				document
					.getElementById(`${coord}`)
					.setAttribute("class", "hit");
			}
		},
	};
};
