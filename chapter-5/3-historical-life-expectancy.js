/* Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century 
by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, f) {
	var groups = {};
  	array.forEach(function (person) {
      	var group = f(person);
     	if  (groups[group]) {
         	groups[group].push(person); 
        } else {
         	groups[group] = [person]; 
        }
    });
  	return groups;
};

function getCentury(person) {
 	return Math.ceil(person.died / 100); 
}

function getAge(person) {
 	return person.died - person.born; 
}

var centuries = groupBy(ancestry, getCentury);

for (var century in centuries) { 
  centuries[century] = average(centuries[century].map(getAge));
};

console.log(centuries);
