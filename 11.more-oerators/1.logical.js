// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐻' };
const obj2 = { name: '🐯', owner: 'Ellie' };

// if문 안에서 논리연산자를 사용하면 불리언값으로 변환되어 평가된다.
if (obj1 && obj2) {
  console.log('둘다 true!');
}
if (obj1 || obj2) {
  console.log('둘다 true!');
}

// obj1이 true이기때문에 obj2는 평가되지않고(단축평가) result변수에 할당된다.
let result = obj1 && obj2;
console.log(result); // { name: '🐯', owner: 'Ellie' }

// 활용예
// 조건이 truthy일때 && 무언가를 해야 할 경우
// 조건이 falshy일때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('주인이 없어');
  }
  animal.owner = '바뀐주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('주인이 있어');
  }
  animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1); // { name: '🐻' }
console.log(obj2); // { name: '🐯', owner: '바뀐주인!' }

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); // { name: '🐻', owner: '새로운주인!' }
console.log(obj2); // { name: '🐯', owner: '바뀐주인!' }

// null 또는 undefined인 경우를 확인할때
let item; //= { price: 1 };
const price = item && item.price;
console.log(price); // undefined

// 기본값을 설정
// default parameter는 null과 undefined인 경우
function print(message) {
  const text = message || 'Hello';
  console.log(text); // Hello
}
print('');
