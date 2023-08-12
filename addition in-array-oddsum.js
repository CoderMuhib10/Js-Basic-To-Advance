function EvenOddSum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    const remainder = nums[i] % 2;
    if (remainder == 0) {
        const even=nums[i]
      sum += even;
    }
  }
  return sum;
}

const valuesArr = [22, 49, 58, 42];
EvenOddSum(valuesArr);
console.log(EvenOddSum);
