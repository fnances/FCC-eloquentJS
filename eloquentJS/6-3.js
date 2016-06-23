function ArraySeq(array) {
	this.array = array;
	this.index = 0;
}

ArraySeq.prototype.current = function () {
	return this.array[this.index];
};



ArraySeq.prototype.hasNext = function () {
	return this.array.length >= this.index;
};

ArraySeq.prototype.next = function () {
	this.index += 1;
};

function RangeSeq(froms, to) {
	this.from = froms;
	this.to = to;

}

RangeSeq.prototype.next = function () {
	this.from += 1;
}

RangeSeq.prototype.current = function () {
	return this.from;
}

RangeSeq.prototype.hasNext = function () {
	return this.from <= this.to;
}


function logFive(sequence) {
	for (var i = 0; i < 5; i++) {

		if (sequence.hasNext()) {
			console.log(sequence.current());
		}
		sequence.next();
	}

}


console.log(logFive(new ArraySeq([1, 2, 3, 4, 5])));
console.log(logFive(new RangeSeq(100, 104)));
