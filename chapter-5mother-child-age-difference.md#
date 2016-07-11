# Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). 

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function hasMother(person) {
	return byName[person.mother] != undefined;
}

function motherChildAgeDifference(person) {
	return person.born - byName[person.mother].born;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

console.log(average(ancestry.filter(hasMother).map(motherChildAgeDifference)));
