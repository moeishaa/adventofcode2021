const generateCountMap = input => {
  const binaryLength = input[0].length;
  const countMap = {};

  for (let i = 0; i < binaryLength; i++) {
    countMap[i] = { '0': 0, '1': 0 };
    
    for (let j = 0; j < input.length; j++) {
      const char = input[j].charAt(i);
      countMap[i][char] = countMap[i][char] + 1;
    }
  }

  return countMap;
};

/**
 * @param {string[]} input 
 * @returns number
 */
const part1 = input => {
  const countMap = generateCountMap(input);

  const { gamma, epsilon } = Object.values(countMap).reduce((rates, current) => {
    const mostCommonBit = current['0'] > current['1'] ? '0' : '1';
    const leastCommonBit = current['0'] < current['1'] ? '0' : '1';

    rates.gamma = rates.gamma + mostCommonBit;
    rates.epsilon = rates.epsilon + leastCommonBit;

    return rates;
  }, { gamma: '', epsilon: '' });

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

/**
 * @param {string[]} input 
 * @returns number
 */
const part2 = input => {
  let oxygenRating;
  let co2Rating;
  let oxygenRatingList = [...input];
  let co2RatingList = [...input];
  let i = 0;
  let j = 0;

  while (!oxygenRating) {
    const countMap = generateCountMap(oxygenRatingList);
    const value = Object.values(countMap)[i];
    let oxygenLookupBit;

    if (value['0'] === value['1']) {
      oxygenLookupBit = '1';
    } else {
      oxygenLookupBit = value['0'] > value['1'] ? '0' : '1';
    }

    oxygenRatingList = oxygenRatingList.filter(bitStr => bitStr.charAt(i) === oxygenLookupBit);
      
    if (oxygenRatingList.length === 1) {
      oxygenRating = oxygenRatingList[0];
    }

    i++;
  }

  while (!co2Rating) {
    const countMap = generateCountMap(co2RatingList);
    const value = Object.values(countMap)[j];
    let co2LookupBit;

    if (value['0'] === value['1']) {
      co2LookupBit = '0';
    } else {
      co2LookupBit = value['0'] < value['1'] ? '0' : '1';
    }

    co2RatingList = co2RatingList.filter(bitStr => bitStr.charAt(j) === co2LookupBit);
      
    if (co2RatingList.length === 1) {
      co2Rating = co2RatingList[0];
    }

    j++;
  }
  
  return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2);
};
