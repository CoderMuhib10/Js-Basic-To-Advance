
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5, // ------>object
    mouse: 1,
    pen: 25,
    shoes: 2,
  };
  
  const keys = Object.keys(shoppingCart); // ------> array of properties
  console.log(keys);
  
  const values = Object.values(shoppingCart); // ------> array of values
  
  for (var i = 0; i < keys.length; i++) {
    var properties = keys[i];
    var Values = values[i]; // ------> jodi object er nam er por third bracket a property er array deoa hoy thle oi object er vitorer value k bujhabe
    console.log(Values);
  }
  
  // // for in loop
  // for(var propertyName in shoppingCart){
  //     const value = shoppingCart[propertyName];
  //     console.log(propertyName, value);
  
  // }
  