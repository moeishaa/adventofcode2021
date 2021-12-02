/**
 * @param {string[]} input 
 * @returns number
 */
const part1 = input => {
  const [position, depth] = input.reduce((soFar, current) => {
    const [action, amount] = current.split(' ');

    if (action === 'forward') {
      soFar[0] = soFar[0] + Number(amount);
    } else {
      soFar[1] = soFar[1] + ((action === 'down' ? 1 : -1) * Number(amount));
    }

    return soFar;
  }, [0, 0]);

  return position * depth;
};

/**
 * @param {string[]} input 
 * @returns number
 */
const part2 = input => {
  let aim = 0;

  const [position, depth] = input.reduce((soFar, current) => {
    const [action, amount] = current.split(' ');
    const amountInt = Number(amount);

    if (action === 'forward') {
      soFar[0] = soFar[0] + amountInt;
      soFar[1] = soFar[1] + (aim * amountInt);
    } else {
      aim = aim + ((action === 'down' ? 1 : -1) * amountInt);
    }

    return soFar;
  }, [0, 0]);

  return position * depth;
};
