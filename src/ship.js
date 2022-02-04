/* eslint-disable */
export { ships };

const ships = (length) => {
	return {
		length,
		// whereHit: new Array(length).fill("ship"),
		whereHit: {},
		isDead: false,
		hit(num) {
			this.whereHit[num] = true;
			this.isSunk();
		},
		isSunk() {
			if (!this.whereHit.hasOwnProperty(false)) {
				this.isDead = true;
			}
		},
	};
};
