var obj = {
	here: {
		is: "an"
	},
	object: 2
};

function deepEqual(obj1, obj2) {

	if (((typeof obj1 === "object") && (typeof obj2 === "object")) && ((obj1 !== null) && (obj2 !== null))) {

		for (var prop in obj2) {
			if ((!obj1[prop]) && (obj1[prop] !== obj2[prop])) {
				return false;
			} else {
				return deepEqual(obj1[prop], obj2[prop]);
			}
		}
		return true;

	}

	return obj1 === obj2;

}

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {
	here: 1,
	object: 2
}));

console.log(deepEqual(obj, {
	here: {
		is: "an"
	},
	object: 2
}));
