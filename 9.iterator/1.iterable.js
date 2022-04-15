// Iterable하다는건 순회가 가능하다는 거지!
// [Symbol.iterator]() : IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는 것은
// 순회 가능한 객체다! 라는것을 의미한다.
// 순회가 가능하면 무엇을 할 수 있나?
// 바로! 빙글빙글 도는 반복문, 연산자들을 사용할 수 있다.

const array = [1, 2, 3];
console.log(array.values()); // Object [Array Iterator] {}
console.log(array.entries()); // Object [Array Iterator] {}
console.log(array.keys()); // Object [Array Iterator] {}

// 배열의 값을 순회하면서 item에 할당.
for (let item of array) {
  console.log(item); // 1 2 3
}
for (let item of array.values()) {
  console.log(item); // 1 2 3
}

// iterator 사용해보기!
// next()의 반환 값은 {done: Boolean, value: any}와 같은 형태
// done=true는 반복이 종료되었음을 의미
// done=false일땐 value에 다음 값이 저장된다.
const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value); // 1 2 3
}

// 일반 오브젝트 : Symbol.iterator가 없다.
// - for in을 사용
const obj = { id: 123, name: 'Roxie' };
// for (const item of obj) {
//   console.log(item); // TypeError: obj is not iterable
// }

for (const key in obj) {
  console.log(key); // id name
}
