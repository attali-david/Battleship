import { games } from "./gameloop.js";
export { events };

const game = games();

function events() {
	const cells = document.querySelectorAll(`.cell`);
	for (var i = 0; i < cells.length; i++) {
		cells[i].setAttribute("id", `${i}`);
		cells[i].addEventListener("click", (e) => {
			game.turn(e.target.id, true);
			console.log("cell", e.target.id, e.target.innerHTML);
		});
	}
}

// computerBoard doesn't need to be clickable
// multiplayer?

// adding event listeners twice for some reason
