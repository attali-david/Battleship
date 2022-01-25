/* eslint-disable */
import { ships } from "../ship.js";
const testElement = ships(3);

test("I have a ship", () => {
	expect(testElement.length).toBe(3);
	expect(testElement.whereHit).toHaveLength(3);
	expect(testElement.isDead).toBeFalsy();
});

test("Ship has been hit", () => {
	// for (var i = 0; i < testElement.whereHit.length; i++) {
	// 	testElement.hit(i);
	// 	expect(testElement.whereHit[i]).toBeTruthy();
	// }
	testElement.hit(0);
	// console.log(testElement.whereHit);
	expect(testElement.whereHit[0]).toBe(true);
});

test("Ship is sunk", () => {
	testElement.hit(0);
	testElement.hit(1);
	testElement.hit(2);
	expect(testElement.length).toBe(3);
	expect(testElement.isDead).toBe(true);
});
