// return을 명시적으로 하지 않으면 undefined 자동으로 반횐됨!
function add(a, b) {
  //   return a + b;
}

const result = add(1, 2);
console.log(result);

// 사용예 : 조건이 맞지 않을 경우 도입부분에서 함수를 일찍이 종료함!
function print(num) {
  // 원하는 조건이 아니라면 함수 종료
  if (num < 0) {
    return;
  }
  console.log(num);
}
print(12);
print(-12);
