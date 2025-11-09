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

console.log(getSubstring("Hello world", 3));
console.log(normalizeInput("das IST SpAm", "upper"));