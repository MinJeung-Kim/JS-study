const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1); // number
console.log(typeof num2); // object

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.NaN); // NaN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

// 특정한 속성에 숫자가 있는지 없는지 확인
if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}
if (num1 < Number.MAX_VALUE) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
// e+2 => 10의 2승 = 1.02 * 10/2
console.log(num3.toExponential()); // 1.02e+2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안되때는 지수표기법 사용

// 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 2.220446049250313e-16
}
// EPSILON : 자바스크립트에서는 2진수로 계산하고 10진수로 반환하는 과정에서 부동소수점까지 계산되지 않는 작은 오차범위를 나타낸다.
const num = 0.1 + 0.2 - 0.2;
console.log(num); // 0.10000000000000003

function isEqual(original, expected) {
  //   return original === expected; // false

  // 오차범위를 무시하려면
  return Math.abs(original - expected) < Number.EPSILON; // true
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1));
