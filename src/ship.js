/* eslint-disable */
export { ships };

const ships = (length) => {
	return {
		length,
		whereHit: new Array(length).fill(false),
		isDead: false,
		hit(num) {
			this.whereHit[num] = true;
			this.isSunk();
		},
		isSunk() {
			if (!this.whereHit.includes(false)) {
				this.isDead = true;
			}
		},
	};
};
