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
const age = 13;
let type = age >= 18 ? "Aduld" : "Child";

const a = 5;
const b = 10;
let biggerNumber = a > b ? a : b;

function getBiggerNumber(a, b) {
    return a > b ? a : b;
}

function checkPasswort(passwort) {
    const correctPasswort = "Roman10";
    return passwort === correctPasswort ? "Passwort is correct" : "Passwort is falsch";
}

function getSubscriotion(type) {
  switch (type) {
    case "starter":
      return 0;
      break;
    case "professional":
      return 20;
      break;
    case "organization":
      return 50;
      break;
    default:
      return "Invalid subscription type";
  }
}

console.log(checkGrade(40)); // Unsatisfactory
console.log(checkGrade(75)); // Satisfactory
console.log(checkStorage(40, 10)); 
console.log(checkStorage(10, 20)); 
console.log(checkStorage(10, 0)); 
console.log(type);
console.log(biggerNumber);
console.log(getBiggerNumber(6, 9));
console.log(checkPasswort("Kluiko"));
console.log(getSubscriotion("professional"));