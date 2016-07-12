/* Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument, 
and write a listToArray function that produces an array from a list. Also write the helper functions prepend, which takes 
an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a 
list and a number and returns the element at the given position in the list, or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.*/

function arrayToList (array) {
	var root = {value: array[0], rest: null}, currentNode = root;  	
	for (var i = 1; i < array.length; i++) {
		var nextNode = {value: array[i], rest: null};
		currentNode.rest = nextNode;
		currentNode = nextNode;
	}
	return root;
}

function listToArray (root) {
	var array = [], currentNode = root;
	while (currentNode) {
		array.push(currentNode.value);
		currentNode = currentNode.rest;
	}
	return array;
}

function prepend (element, list) {
	return {value: element, rest: list};
}

function nth (list, index) {
	if (index) {
		return nth(list.rest, index - 1);
	} else {
		return list.value; 
	}
}
