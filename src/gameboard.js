/*eslint-disable*/
export { gameboards };
import { ships } from "./ship.js";

const gameboards = () => {
	const board = [];
	for (let i = 0; i < 100; i++) {
		board[i] = false;
	}
	// _win: false;
	return {
		board: board,
		// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
		placeShip(coord, ship) {
			board[coord] = ship;
			const placedShip = (document.getElementById(
				`${coord}`
			).textContent = "X");
			placedShip.setAttribute("class", "invisible");
		},
		receiveAttack(coord) {
			// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
			if (board[coord] === false) {
				board[coord] = true;
			} else {
				// PLACEHOLDER!!!! DELETE WITH DOM!!!!
				board[coord].hit(0);
			}
		},
		// Gameboards should be able to report whether or not all of their ships have been sunk.
	};
};
