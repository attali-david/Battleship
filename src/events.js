import { games } from "./gameloop.js";
import { game } from "./index.js";
export { events, controller };

let controller = new AbortController();

function events() {
	const cells = document.querySelectorAll(`.cell`);
	for (var i = 0; i < cells.length; i++) {
		cells[i].setAttribute("id", `${i}`);
		cells[i].addEventListener(
			"click",
			(e) => {
				game.turns(e.target.id, true);
				console.log("cell", e.target.id, e.target.innerHTML);
			},
			{ once: true }
		);
	}
}
