/**
 * @param {number[]} input 
 * @returns number
 */
const part1 = input => {
  return input.reduce((count, currentVal, currentIndex, array) => {
    if (currentIndex === 0) {
      return count;
    }
    return count + (currentVal > array[currentIndex - 1] ? 1 : 0);
  }, 0);
};

/**
 * @param {number[]} input 
 * @returns number
 */
const part2 = input => {
  const sum = (a, b) => a + b;
  
  let prevValue = input.slice(0, 3).reduce(sum, 0);
  let increaseCount = 0;

  for (let i = 1; i <= input.length - 3; i++) {
    let currentValue = input.slice(i, i + 3).reduce(sum, 0);

    if (currentValue > prevValue) {
      increaseCount++;
    }

    prevValue = currentValue;
  }

  return increaseCount;
};
