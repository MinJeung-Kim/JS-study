// 함수 내부에서 외부로 부터 주어진 인자의 값을 변경하는 것은 💩
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소)

// 나쁜 예 💩
function display(num) {
  num = 5; // ❌
  console.log(num); // 5
}
const value = 4;
display(value);
console.log(value); // 4

function displayObj(obj) {
  obj.name = 'Bob'; // ❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(obj); // { name: 'Bob' }
}

const ellie = { name: 'Elie' };
displayObj(ellie);
console.log(ellie); // { name: 'Bob' }

// 좋은 예  ✨
function changeName(obj) {
  return { ...obj, name: 'Bob' }; // 새로운 오브젝트 생성
}
