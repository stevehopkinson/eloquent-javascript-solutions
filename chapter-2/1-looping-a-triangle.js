/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

for (var i = 1; i <= 7; i++) {
  console.log(Array(i + 1).join("#"));
}
