export function clgTriangle() {
  let sharp = '';
  for (let i = 1; i < 8; i++) {
    sharp += '#';
    console.log(sharp);
  }
}

export function fizzBuzz() {
  let clgArr = [];
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      clgArr.push('BuzzFizz');
    } else if (i % 3 === 0) {
      clgArr.push('Fizz');
    } else if (i % 5 === 0) {
      clgArr.push('Buzz');
    } else {
      clgArr.push(i);
    }
  }
  console.log(clgArr.join(', '));
}

export function chessSquare(size) {
  let str = '';
  for (let i = 0; i < size; i++) {
    for (let j = i % 2; j < size; j++) {
      if (j % 2 === 0) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    if (i % 2 !== 0) str += '#';
    str += '\n';
  }
  console.log(str);
}
