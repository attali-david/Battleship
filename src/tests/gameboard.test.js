/**
 * @jest-environment jsdom
 */
/*eslint-disable*/
import { gameboards } from "../gameboard.js";
import { ships } from "../ship.js";

const game = gameboards();
const patrol = ships(1);

//internal command
test("Ships are placed", () => {
	game.placeShip(5, patrol);
	expect(game.board[5]["length"]).toBe(1);
});

// outgoing command ship.hit() || _missed attack
test("The enemy has attacked", () => {
	game.placeShip(5, patrol);
	game.receiveAttack(5);
	// console.log(game.board[5]);
	expect(game.board[5]["isDead"]).toBe(true);
});
