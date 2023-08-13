// ------------------------------------>number validation check.
// function add(a,b){
//     if(typeof a !== "number" || typeof b !== 'number'){
//         return "please give me two numbers"
//     }
//     return a+b;
// }

// console.log(add('3',5))

// ---------------------------------------->string validation check

function add(a, b) {
  if (typeof a !== "string" || typeof b !== "string") {
    return "please give me string";
  }
  return a + b;
}

console.log(add("hi" + " ", "Muhib"));

// ------------------------------------>array validation check

// function findSum(arr){

//     if(!Array.isArray(arr)){
//         return "please provide me an Array"
//     }

//     let sum = 0;
//     for(let i of arr){
//         sum+=i
//     }
//     return sum;
// }

// const x = [1,2,3,4,5];
// console.log(findSum("dfalfjdalfjalf"))

// ------------------------------------>array lengths validation check
// function findSum(arr){

//     if(!Array.isArray(arr)){
//         return "please provide me an Array"
//     }
// if ( arr.length>4) {
//     return "please provide me an Array with 4 items"
// }
//     let sum = 0;
//     for(let i of arr){
//         sum+=i
//     }
//     return sum;
// }

// const x = [1,2,3,4/*,5*/];
// console.log(findSum(x))

// -------------------------------------------->each word validation check by finding vowel consonent.
// function findVowel(s) {
//   if (typeof s !== "string") {
//     return "plese give me a string";
//   }
//   let vowel = 0;
//   let vowelare = [];
//   let consare = [];
//   let consonent = 0;
//   for (let i = 0; i < s.length; i++) {
//     let character = s[i].toLowerCase();
//     if (
//       character === "a" ||
//       character === "e" ||
//       character === "i" ||
//       character === "o" ||
//       character === "u"
//     ) {
//       vowelare.push(s[i]);
//       vowel++;
//     } else if (character !== " " && character !== "8" && character !== "7") {
//       consare.push(s[i]);
//       consonent++;
//     }
//   }
//   const info = {
//     totalV: vowel,
//     totalC: consonent,
//     vowels: vowelare,
//     consonents: consare,
//   };
//   return info;
// }
// console.log(findVowel("Master the B8sics in One Video7 "));
// -------------------------------------------------------------->
