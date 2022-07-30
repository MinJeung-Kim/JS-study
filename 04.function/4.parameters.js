// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨.
function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  return a + b;
}
add(1, 2, 3);

// 매개변수 기본값 Default Parameters a = 1, b = 1
function add2(a = 1, b = 1) {
  console.log(a); // 1
  console.log(b); // 1
  return a + b;
}
add2();

console.clear();

// Rest 매개변수 Rest Parameters
function sum(...numbers) {
  console.log(numbers);
}
sum(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]

function sum2(a, b, ...numbers) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(numbers); // [ 3, 4, 5, 6, 7, 8 ]
}
sum2(1, 2, 3, 4, 5, 6, 7, 8);
