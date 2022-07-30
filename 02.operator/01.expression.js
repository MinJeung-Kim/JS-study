let b; // 선언문
b = 2; // 표현식 && 할당문

// let a = let b; // 선언문은 할당할 수 없다.
let a = (b = 2);
console.log(a); // 2
