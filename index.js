import { chessSquare, clgTriangle, fizzBuzz } from './tasks/01_tasks/index.js';
import { countChar, countBs, isEven, minimum } from './tasks/02_tasks/index.js';
import {
  nth,
  prepend,
  arrayToList,
  reverseArrayInPlace,
  reverseArray,
  sum,
  range,
  listToArray,
  deepEqual,
} from './tasks/03_tasks/index.js';

clgTriangle();
fizzBuzz();
chessSquare(8);

console.log(minimum(2, 3));
console.log(isEven(3));
console.log(countBs('Ban'));
console.log(countChar('BannC', ''));

console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(reverseArray([5, 4, 3, 2, 1]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));
console.log(arrayToList([1, 2, 3]));
console.log(listToArray({ value: 10, rest: { value: 20, rest: null } }));
console.log(prepend('sdsd', { value: 20, rest: null }));
console.log(
  nth({ value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }, 2)
);

let a = { a: 1, b: 2, c: { a: 1 } };
let b = { a: 1, b: 2, c: { a: 10 } };

console.log(deepEqual(a, b));
