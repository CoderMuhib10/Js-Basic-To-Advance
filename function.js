function giveWater(money) {
  console.log("stand up");
  console.log("go towards the filter");
  console.log("fill water");
  console.log("comeback and give me the glass");
  // ctrl+l =select current line
}

giveWater(30);

// var ShoppingCart ={
//   book:5,
//   pen:9,
//   Football:5,
//   GraphicsTab:1,
//   Laptop:6

// }
// var props=Object.keys(ShoppingCart)
// var values=Object.values(ShoppingCart)
// // console.log(ShoppingCart);
// for(var i=0;i<props.length;i++){
  
// console.log(props[i],values[i]);

// }




// ----------------------------------->

/* 
function functionName (parameters){
    function body
    return 
}

var returnedValue = functionName(parameters value) 
*/

// function getAverage(assignment1, assignment2, assignment3) {
//   const total = assignment1 + assignment2 + assignment3;
//   const average = total / 3;
//   console.log(average);
// }
// getAverage(60, 60, 60);

function getAverage(assignment1, assignment2, assignment3) {
  const total = assignment1 + assignment2 + assignment3;
  const average = total / 3;
  return average;
}

var myAverage = getAverage(60, 60, 60); //if you use return then only calling the function will not work you must put the call in a variable and then print that variable.
console.log("my average so far: ", myAverage);