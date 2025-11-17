function getSubstring(string, length) {
    return string.slice(0, length)
}

function normalizeInput(input, to) {
  if (to === "upper") {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function countClient(clientCounter, maxClients) {
    let counter = clientCounter; 
    while (counter < maxClients) {
        console.log(counter);
        counter += 1;
    }
}

function countNumber(numberCounter, maxNumber) {
    let count = numberCounter; 
    do {
        console.log(`Count: ${count}`);
	count += 1;
    } while (count < maxNumber);
   
}

function sumUpTo(number) {
    let sum = 0;
    for (let i = 0; i <= number; i+=1) {
        sum += i;
        
    }
    return sum;
}



console.log(getSubstring("Hello world", 3));
console.log(normalizeInput("das IST SpAm", "upper"));
console.log(countClient(18, 25));
console.log(countNumber(6, 5));
console.log(sumUpTo(5));
