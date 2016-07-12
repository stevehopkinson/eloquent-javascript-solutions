/* Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects 
with the same properties whose values are also equal when compared with a recursive call to deepEqual.*/

// Does this work? Or would it just return the base case for the first property it iterates over?

function deepEqual (a, b) {
	if (typeof a === "object" && typeof b === "object") {
		return Object.keys(a).concat(Object.keys(b)).every(function (property) {return deepEqual(a[property], b[property])});
	} else {
		return a === b;
	}	
}
