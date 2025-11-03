function checkGrade(grade) {
  if (grade >= 70) {
    return "Satisfactory";
  } else {
    return "Unsatisfactory";
  }
}
function checkStorage(available, ordered) {
    if (ordered === 0)
        return "There are no products in the order!"
  else if (ordered > available) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you";
  }
}

console.log(checkGrade(40)); // Unsatisfactory
console.log(checkGrade(75)); // Satisfactory
console.log(checkStorage(40, 10)); 
console.log(checkStorage(10, 20)); 
console.log(checkStorage(10, 0)); 