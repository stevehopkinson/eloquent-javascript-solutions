/* For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes 
an array as argument and produces a new array that has the same elements in the inverse order. The second, 
reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse 
its elements. Neither may use the standard reverse method. */

function reverseArray(array) {
  	var result = [];
  	array.forEach(function (a) {result.unshift(a)});
  	return result;
}

function reverseArrayInPlace(array) {
  	temp = reverseArray(array);
  	for (var i = 0; i < array.length; i++) {
    	  array[i] = temp[i];
    }
}
