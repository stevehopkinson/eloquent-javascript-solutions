/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from 
start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program 
and see whether it does indeed return 55.*/

function range(start, end, step = 1) {
	var result = [], steps = Math.ceil((end - start) / step);
  	for (var i = 0; i <= steps; i ++) {
    	result.push(start + i * step); 
    }
  	return result;
}

function sum(array) {
  	return array.reduce(function (a, b) {return a + b});
}
