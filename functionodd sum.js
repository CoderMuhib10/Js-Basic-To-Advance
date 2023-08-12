// function EvenOddSum(nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const remainder = nums[i] % 2;
//     if (remainder == 0) {
//       const even = nums[i];
//       sum = sum + even;
//       console.log(sum);
//     }

// }
// return sum;
// }

// const valuesArr = [22, 49, 93,100 , 88, 77, 24];
// let result = EvenOddSum(valuesArr);
// console.log(result);

//------------------------------------>
// function findOdd(numbers) {
//   let oddNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//     let remainder = element % 2;
//     if (remainder !== 0) {
//       oddNumbers.push(element);
//     }
//   }
//   return oddNumbers;
// }
// const num = [23, 29, 27, 58, 93, 14];
// const FinalOdds = findOdd(num);
// // console.log(FinalOdds);
// // ------------------------------------->
// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// let Finalresult = findSum(FinalOdds);
// console.log(Finalresult);

//------------------------------------>
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 /* || arr[i]%2===0 */) {
      sum += arr[i];
    }
  }
  return sum;
}
let nums = [12, 33, 43, 2, 3, 7, 4];
let result = findSum(nums);
console.log(result);
