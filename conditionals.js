var iphone = 95000;
var myBudget = 10000;
if (iphone < myBudget) {
  console.log("I can buy Iphone");
}

// this

// if (iphone > myBudget) {
//   console.log("I can't buy Iphone");
// }

// or,
else {
  console.log("I can't buy Iphone");
}

var isTall = true;
var isRich = false;
var isHandsome = true;
var isCaring = true;
var isRomantic = true;
var netWorth = 100000;
var need = 10000;
// if (isTall == true) {
//   console.log("Army selection done");
// } else {
//   console.log("dure jaiya mor");
// }

// if (
//   isTall == true &&
//   isHandsome == true &&
//   isCaring == true &&
//   isRomantic == true &&
//   // isRich!=true
//   isRich == false &&
//   //   isRich == true
//   netWorth >= need
// ) {
//   console.log("You're Perfect");
// } else {
//   console.log("You're not perfect");
// }

// if (
//   isCaring == true ||
//   isHandsome == true ||
//   isRich == true ||
//   isRomantic == true
// ) {
//   console.log("Your future is bright");
// } else {
//   console.log("Your future is not bright it's dark");
// }

// if (
//   (isHandsome == true && isCaring == true && isRomantic == true) ||
//   isRich == true
// ) {
//   console.log("Your future is bright");
// } else {
//   console.log("Your future is not bright it's dark");
// }

var balon = 7;
isworldChampion = true;
if (balon >= 7) {
  console.log("It's Messi or Ronaldo");
  if ((worldChampion = true)) {
    console.log(
      "It's definately Messsii"
    ); /* note:you can'tuse else if inside nested */
  } else {
    console.log("Donnoo know");
  }
} else {
  console.log("Some other player");
  if (worldChampion) {
    console.log("Messi");
  } else {
    console.log("donno again");
  }
}
