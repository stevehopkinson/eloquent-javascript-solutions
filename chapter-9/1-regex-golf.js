/* For each of the following items, write a regular expression to test whether any of the given substrings 
occur in a string. The regular expression should match only strings containing one of the substrings described. 
Do not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can 
make it any smaller.

car and cat
pop and prop
ferret, ferry, and ferrari
Any word ending in ious
A whitespace character followed by a dot, comma, colon, or semicolon
A word longer than six letters
A word without the letter e */

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/\b\w*ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s(\.|,|:|;)/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/\w{7,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/\b[^e\s]+\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);
