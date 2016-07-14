/*Write a function countBs that takes a string as its only argument and returns a number that indicates how many 
uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates 
the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use 
of this new function.*/

function countChar(string, char) {
	return string.split("").map(function (c) { return c === char ? 1 : 0 }).reduce(function (a, b) { return a + b });
};

function countBs(string) {
	return countChar(string, "B");
};
