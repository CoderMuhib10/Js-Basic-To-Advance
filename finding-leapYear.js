function LeapYear(year) {
  const remainder = year % 4;
  const lasCheck=year%100;
  if ((remainder == 0 ) && (lasCheck==0)) {
    return true;
  } else {
    return "invalid year";
  }
}

const isLeapYear = LeapYear(2023);
console.log(isLeapYear);