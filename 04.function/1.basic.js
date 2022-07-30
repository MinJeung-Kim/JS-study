// 사용예제 1
function add(num1, num2) {
  // return : 함수에서 외부로 값을 반환.
  return num1 + num2;
}

// 함수 호출 및 인자 전달.
// result에 반환된 값 저장.
const result = add(1, 2);
console.log(result);

// 사용예제 2
let lastName = '김';
let firstName = '민정';
// let fullName = `${lastName} ${firstName}`;
console.log(fullName(firstName, lastName));

let lastName2 = '박';
let firstName2 = '철수';
// let fullName2 = `${lastName2} ${firstName2}`;
console.log(fullName(firstName2, lastName2));

// 함수로 변경
function fullName(firstName, lastName) {
  return `${lastName} ${firstName} ✋`;
}
