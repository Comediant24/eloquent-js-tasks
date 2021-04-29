export const minimum = (a, b) => {
  return a < b ? a : b;
};

export const isEven = (num) => {
  if (num < 0) return 'sorry, we need a positive number';
  if (num === 0) return true;
  if (num === 1) return false;
  return isEven(num - 2);
};

export const countBs = (str) => {
  let count = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'B') count++;
  }
  return count;
};

export const countChar = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
};
