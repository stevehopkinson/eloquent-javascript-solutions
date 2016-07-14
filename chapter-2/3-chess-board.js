/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each 
position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for 
any size, outputting a grid of the given width and height. */

var size = 8, evenRow = "", oddRow = "";

for (var i = 0; i < size; i++) {
	oddRow += i % 2 ? " " : "#";
	evenRow += i % 2 ? "#" : " ";
}

for (var i = 0; i < size; i++) {
	console.log(i % 2 ? oddRow : evenRow);
}
