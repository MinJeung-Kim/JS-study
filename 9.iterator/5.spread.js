// Spread 연산자, 전개구문
// 모든 Iterable은 Spread될 수 있다.
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다.
// function(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018도입

function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums)); // 6

// Rest parameters

function sum(first, second, ...nums) {
  console.log(nums); // [ 3, 4, 5 ]
}
sum(1, 2, 3, 4, 5);

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr); // ['🍏', '🥝', '🍓', '🍌']
arr = [...fruits1, ...fruits2];
console.log(arr); // ['🍏', '🥝', '🍓', '🍌']

// Object
const ellie = { name: 'Ellie', age: 20, home: { address: 'home' } };
const update = {
  ...ellie,
  job: 's/w engineer',
};
console.log(ellie); // { name: 'Ellie', age: 20, home: { address: 'home' } }
console.log(update); // { name: 'Ellie', age: 20, home: { address: 'home' }, job: 's/w engineer' }
