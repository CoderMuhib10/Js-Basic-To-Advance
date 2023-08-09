 // function foo() {
//   console.log("foo");
//   bar();
// }
// function bar() {
//   console.log("bar");
// }

// foo();

// function make_avg(num1, num2, num3) {
//   var avg = num1 + num2 + num3 / 3;
//   return avg;

// }

// var theAvg = make_avg(5, 24, 9);
// console.log("the avarage is",theAvg);

// function make_avg(values) {
//     if (values.length === 0) {
//         return 0; // Avoid division by zero
//     }

//     const sum = values.reduce((total, num) => total + num, 0);
//     const avg = sum / values.length;

//     return avg;
// }

// // Example usage
// const values = [10, 20, 30, 40, 50];
// const average = make_avg(values);
// console.log("Average:", average);

// var signal = "green";

// if (signal == "red") {
//   console.log("Danger!!Danger!!");
// } else if (signal == "yellow") {
//   console.log("Stop!!Stopp!");
// } else if (signal == "green") {
//   console.log(
//     "lamine yamal is on fire ,Run Yamal Run.I'm coming ,I'm gonna compete with you"
//   );
// } else {
//   console.log("Error 404");
// }

// var paw=["blacky","mady","cuty"]

// console.log(typeof "blacky");

// function ConvertInch(inch) {
//   const feet = inch / 12;
//   return feet;
// }

// const myInch = 144;
// const num2 = 60;
// const num3 = 120;
// const myfeet = ConvertInch(num3);
// console.log(myfeet);

function cycle(miles) {
  const kilom = miles * 1.609;
  return kilom;
}

const totalRoad = cycle(2);


function EvenOdd(numbers){
 const Even= numbers %2;
 
  if (Even==0) {
    return true;
  }
  else{
    return false;
  }
}

const isEven =EvenOdd(44);
console.log(isEven);