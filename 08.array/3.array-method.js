// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['🍉', '🍎', '🍍'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false

// 특정한 아이템의 위취를 찾을때
console.log(fruits.indexOf('🍎')); // 1

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍉')); // true

// 추가 - 제일 뒤
// push, pop, unshift, shift, splice => 배열 자체를 수정(업데이트)
let length = fruits.push('🍑'); // [ '🍉', '🍎', '🍍', '🍑' ]
console.log(fruits);
console.log(length); // 4

// 추가 - 제일 앞
length = fruits.unshift('🫐'); // [ '🫐', '🍉', '🍎', '🍍', '🍑' ]
console.log(fruits);
console.log(length); // 5

// 제거 - 제일 뒤
let lastItem = fruits.pop();
console.log(fruits); // [ '🫐', '🍉', '🍎', '🍍' ]
console.log(lastItem); // 제거된 아이템 => 🍑

// 제거 - 제일 앞
lastItem = fruits.shift();
console.log(fruits); // [ '🍉', '🍎', '🍍' ]
console.log(lastItem); // 제거된 아이템 => 🫐

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log(fruits); // [ '🍉', '🍍' ]
console.log(deleted); // 제거된 아이템 => [ '🍎' ]

fruits.splice(1, 0, '🫐', '🍑');
console.log(fruits); // [ '🍉', '🫐', '🍑', '🍍' ]

// 잘라진 새로운 배열을 만듦
let newArr = fruits.slice(0, 2);
console.log(newArr); // [ '🍉', '🫐' ]
console.log(fruits); // [ '🍉', '🫐', '🍑', '🍍' ]

newArr = fruits.slice();
console.log(newArr); // [ '🍉', '🫐', '🍑', '🍍' ]

newArr = fruits.slice(-1);
console.log(newArr); // [ '🍍' ]

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]

console.clear();

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
  [1, 2, 3],
  [4, [5, 6]],
];
console.log(arr); // [ [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]

// flat : 1단계까지
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]

// flat : 2단계까지
console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]
arr = arr.flat(3);

// 특정한 값으로 배열을 채우기 -  배열 자체를 수정
arr.fill(0);
console.log(arr); // [ 0, 0, 0, 0, 0, 0 ]

arr.fill('s', 1, 3);
console.log(arr); // [ 0, 's', 's', 0, 0, 0 ]

arr.fill('a', 1);
console.log(arr); // [ 0, 'a', 'a', 'a', 'a', 'a' ]

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); // 0,a,a,a,a,a

text = arr.join(' | ');
console.log(text); // 0 | a | a | a | a | a
