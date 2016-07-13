/* Design an interface that abstracts iteration over a collection of values. An object that provides this interface 
represents a sequence, and the interface must somehow make it possible for code that uses such an object to iterate 
over the sequence, looking at the element values it is made up of and having some way to find out when the end of the 
sequence is reached.

When you have specified your interface, try to write a function logFive that takes a sequence object and calls console.log 
on its first five elements—or fewer, if the sequence has fewer than five elements.

Then implement an object type ArraySeq that wraps an array and allows iteration over the array using the interface you 
designed. Implement another object type RangeSeq that iterates over a range of integers (taking from and to arguments to 
its constructor) instead. */

function ArraySeq(array) {
	this.sequence = array; 
	this.index = 0;
}

Object.defineProperties(ArraySeq.prototype, {
	"next": {get: function() { return this.sequence[this.index++]}},
	"end": {get: function() { return this.sequence.length <= this.index }}
});

function RangeSeq(from, to) {
	this.value = from;
	this.to = to;
}

Object.defineProperties(RangeSeq.prototype, {
	"next": {get: function() { return this.value++ }},
	"end": {get: function() { return this.value > this.to }}
});

function logFive(seq) {
	for (var i = 0; i < 5 && !seq.end; i++) {
		console.log(seq.next); 
	}
}
