// 함수 선언문 function nema() { }
// 함수 표현식 const name = function () {}
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2)); // 3

// 화살표 함수 const name = () => { }
let add2 = (a, b) => {
  return a + b;
};
console.log(add2(3, 4)); // 7

// 리턴만 하는 함수라면 괄호와 return 키워드 생략 가능.
let add3 = (a, b) => a + b;
console.log(add3(3, 4)); // 7

// 생성자 함수 const object = new Function();

// 즉각적으로 호출되는 함수 표현식:IIFE(Immediatey-Invoked Function Expressions)
(function run() {
  console.log('🥰');
})();
