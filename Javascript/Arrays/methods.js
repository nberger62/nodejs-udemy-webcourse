/*
push will add data to the end of an array

pop will remove data from the last item of the array*/

var colors = ["red", "blue", "green", "yellow", "orange", "black", "violet", "white", "aqua", "teal"];
colors.push("purple");
console.log(colors);
/*
 'red',    'blue',
  'green',  'yellow',
  'orange', 'black',
  'violet', 'white',
  'aqua',   'teal',
  'purple'
  */
colors.pop("purple");
console.log(colors);
/*
[
  'red',    'blue',
  'green',  'yellow',
  'orange', 'black',
  'violet', 'white',
  'aqua',   'teal'
]
*/

/*
use unshift to add to the front of an array

use shift to remove from the front of an array. In the example below the color red was removed because it had the index of 0
*/
colors.shift();
console.log(colors);
/*
[
  'blue',   'green',
  'yellow', 'orange',
  'black',  'violet',
  'white',  'aqua',
  'teal'
]
*/

/*
Use indexOf() to find the index of any item in the array! This helps to see if an item is present or not

Use Slice --- slice() to copy certain parts of an array
*/
var watercolors = colors.slice(6, 9);
console.log(watercolors);

/*
[ 'white', 'aqua', 'teal' ]
*/
