// forEach is used to loop in each Element of an array

// const m = [12, 98, 99, 36, 93, 83, 83];
// m.forEach(function noisy(val) {
//   console.log(val + 2);
// });
// --------------------------------------
// your objectName.forEach---->keyword(body);
// ----------------------------------------------->

// forIn is used to loop in an object
const obj = {
  home: "new york",
  mobile: "02992222299",
  name: "yuri",
  skill: "pro",
};

for (const key in obj) {
  console.log(key+":"+obj["key"]);
}
// for--->keyword(declare a variable in---keyword obj---your objectName) {
//   body
// }


