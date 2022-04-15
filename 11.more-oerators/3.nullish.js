// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined

let num = 0;
// 0은 falshy한 값이라 ||(or)연산자를 쓰면 -1을 출력한다
console.log(num || '-1'); // -1
// num의 값이 없을때만 -1 출력
console.log(num ?? '-1'); // 0
