/* eslint-disable */
export { ships };

const ships = (length) => {
	return {
		length,
		whereHit: {},
		isDead: false,
		hit(coord) {
			this.whereHit[coord] = true;
		},
		isSunk() {
			if (!Object.values(this.whereHit).includes(false)) {
				console.log(this.whereHit.hasOwnProperty(false));
				this.isDead = true;
				return true;
			}
		},
	};
};
