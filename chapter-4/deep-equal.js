/* Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects 
with the same properties whose values are also equal when compared with a recursive call to deepEqual.*/

function deepEqual (a, b) {
	if (typeof a === "object" && typeof b === "object") {
        for (var property in a) {
        	 return deepEqual(a[property], b[property]);
        }
    } else {
        return a === b;
    }	
}