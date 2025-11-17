function findNumber(start, end, divisor) {
  for (let index = start; index <= end; index++) {
    if (index % divisor === 0) {
      return index;
    }
  }
}

findNumber(2, 6, 5);