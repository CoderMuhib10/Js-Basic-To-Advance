function findLargest(arr) {
  let largest = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > largest) {
      largest = arr[index];
    }
  }
  return largest;
}

const array = [2, 12, 8, 7, 15, 20];
// let result = findLargest(array);        |
// console.log(result);                    |--------------->this and
// console.log(findLargest(array));                    --------------->this are same
