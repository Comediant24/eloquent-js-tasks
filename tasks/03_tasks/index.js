export const range = (start, end, step = start < end ? 1 : -1) => {
  let arr = [];
  step;
  if (step > 0) {
    for (let i = start; i <= end; i += step) arr.push(i);
  } else {
    for (let i = start; i >= end; i += step) arr.push(i);
  }
  return arr;
};

export const sum = (arr) => {
  return arr.reduce((a, b) => a + b);
};

export const reverseArray = (arr) => {
  let reverseArr = [];
  arr.forEach((element) => {
    reverseArr.unshift(element);
  });
  return reverseArr;
};

export const reverseArrayInPlace = (array) => {
  let right = null;
  let length = array.length;

  for (let left = 0; left < length / 2; left += 1) {
    right = length - 1 - left;
    let temporary = array[left];
    array[left] = array[length - 1 - left];
    array[right] = temporary;
  }

  return array;
};

export const arrayToList = (arr) => {
  if (arr.length === 0) return null;
  return {
    value: arr[0],
    rest: arrayToList(arr.slice(1)),
  };
};

export const listToArray = (list) => {
  let array = [];
  for (let i = list; i; i = i.rest) {
    array.push(i.value);
  }
  return array;
};

export const prepend = (value, list) => {
  return { value, rest: list };
};

export const nth = (list, num) => {
  if (!list) return undefined;
  if (num === 0) return list.value;
  else return nth(list.rest, num - 1);
};

export const deepEqual = (a, b) => {

  if (a === b) return true;

  if (a === null || typeof a !== 'object' || b == null || typeof b !== 'object')
    return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;
  
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
};
