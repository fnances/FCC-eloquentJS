function MultiplicatorUnitFailure(message) {
	this.message = message;
	this.stack = (new Error()).stack;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnit Error";


function primitiveMultiply(a, b) {
	if (Math.random() < 0.5)

		return a * b;
	else
		throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
	for (;;) {

		try {
			return primitiveMultiply(a, b);
		} catch (e) {
			if (!e instanceof MultiplicatorUnitFailure) {
				throw e;
			}
		}
	}
}
console.log(reliableMultiply(8, 8));
// → 64
