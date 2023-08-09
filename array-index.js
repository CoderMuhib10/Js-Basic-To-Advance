let numbers = [2, 3, 1, 0, 10, 9];

// change/update value of an element in a Array

numbers[3] = 23;

// get a element of an arroy with by declaring a variable
let we = numbers[4];
console.log(we);

// get an element of an array with console log


/* console.log(numbers[2]); */

// find the index of a element in an array by declaring a variable
let where = numbers.indexOf(10);
console.log(where);

// find the index of an element in an array with console log
console.log(numbers.indexOf(9));
// find the length of an array  by declaring a variable
let totalNumbers = numbers.length;
console.log("the length of this array is",totalNumbers);

// find the length of an array with console log
console.log("the length of this array is"+ numbers.length);


let marksClassNine = [92, 75, 89, 56, 45, "absent", null];
console.log(marksClassNine);

//if you try to access or print a value which is not exist in the array then it'll show undefined.

// console.log(marksClassNine[7]);

// again if you try to find the index of an element which doesn't exist in the array then it'll show -1 as the index of that non existant value/data

console.log(marksClassNine.indexOf(100));

// add a new vallue in the array
marksClassNine[7] = 98;
console.log(marksClassNine[7]);
console.log(marksClassNine);

// what if i add a new value by skipping 1  value
// marksClassNine[9] = 99;
// console.log(marksClassNine);

// what if i add a new value by skipping 2 or more value
marksClassNine[10] = 99;
console.log(marksClassNine);
