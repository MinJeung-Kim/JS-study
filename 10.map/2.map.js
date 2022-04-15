const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 사이즈 확인
console.log(map.size); // 2

// 존재하는지 확인
console.log(map.has('key1')); // true
console.log(map.has('key6')); // false

// 순회
map.forEach((value, key) => console.log(value, key)); // 🍎 key1 🍌 key2
console.log(map.keys()); // { 'key1', 'key2' }
console.log(map.values()); // { '🍎', '🍌' }
console.log(map.entries()); // { [ 'key1', '🍎' ], [ 'key2', '🍌' ] }

// 찾기
console.log(map.get('key1')); // 🍎
console.log(map.get('key6')); // undefined

// 추가
map.set('key3', '🍏');
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🍏' }

// 삭제
map.delete('key3');
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 전부삭제
map.clear();
console.log(map); // Map(0) {}

// 오브젝트와의 큰 차이점?
// 구조상으로는 유사하지만
// 오브젝트 경우 map에서 사용가능한 빌트인 함수를 사용하지 못한다.
// 인터페이스가 다르다.
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
  [key]: milk,
};
console.log(obj); // { '[object Object]': { name: 'milk', price: 10, description: '맛있는 우유' } }

const map2 = new Map([[key, milk]]);
console.log(map2); // Map(1) { { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '맛있는 우유' } }

console.log(obj[key]); // { name: 'milk', price: 10, description: '맛있는 우유' }
console.log(map2[key]); // undefined
console.log(map2.get(key)); // { name: 'milk', price: 10, description: '맛있는 우유' }
