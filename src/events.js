export { events };

function events() {
	const cells = document.querySelectorAll(`.cell`);
	for (var i = 0; i < cells.length; i++) {
		cells[i].setAttribute("id", `${i}`);
		cells[i].addEventListener("click", (e) => {
			console.log("hello", e.target.id, e.target.innerHTML);
		});
	}
}
