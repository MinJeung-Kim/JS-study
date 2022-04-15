// 산술 연산자(Arithmetic operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지값
// ** 지수(거듭제곱)

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); // es7
console.log(Math.pow(5, 2)); // es7이전 거듭제곱 연산

// + 연산자 주의점!
let text = '두개의' + '문자를';
console.log(text); // 두개의문자를

text = '1' + 1; // 문자열 + 숫자 = 문자열
console.log(text); // '11'
