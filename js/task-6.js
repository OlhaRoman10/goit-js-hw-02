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


console.log(getSubstring("Hello world", 3));
console.log(normalizeInput("das IST SpAm", "upper"));
console.log(countClient(18, 25));