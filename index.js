// Code your solutions in this file
function writeCards(array, event) {
  var newArray = [];
for (var i = 0; i < array.length; i++) {
  newArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
}
return newArray
}

writeCards(['john', 'lisa', 'mary'])

function countDown(int) {
var i = int;
while (i >= 0) {
  console.log(i);
  i--
}
}
