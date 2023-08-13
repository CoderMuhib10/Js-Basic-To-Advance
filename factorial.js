// function multifNumbers(nums) {
//   let sum = 0;
//   for (let i = 0; i <= nums; i++) {
//     sum += i;
//   }
//   return sum;
// }

// let result = sumofNumbers(7);
// console.log(result);
// function multifNumbers(nums) {
//   let sum = 1;
//   for (let i = 1; i <= nums; i++) {
//     sum *= i;
//   }
//   return sum;
// }

// let result = multifNumbers(5);
// console.log(result);
function multifNumbers(nums) {
    let sum = 1;
    for (let i = nums; i >=1 ; i--) {
      sum *= i;
    }
    return sum;
  }
  
  let result = multifNumbers(1);
  console.log(result);





  let resulty = 0;
for (let i = 0; i <= 10; i++) {
    result+=i
    console.log("total addition of number is",result);
}
// --------------------------------------->

for (let i = 10; i >= 1; i--) {
    let multi = 1;
    multi*=i
    console.log("reverse multiplication is",multi);
}


// --------------------------------------------------->
let summ = 1;
for (let i = 1; i <= 10; i++) {
    summ*=i
    console.log("total multiplication of number is",summ);
}