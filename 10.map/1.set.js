// Set
const set = new Set([1, 2, 3]);
console.log(set); // Set(3) { 1, 2, 3 }

// 사이즈 확인
console.log(set.size); // 3

// 아이템 존재 유무
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }
// 중복은 제외된다.
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }

// 삭제
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// 전부삭제
set.clear();
console.log(set); // Set(0) {}

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs); // Set(2) { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }

// 얕은 복사(Shallow Copy)
// - 객체를 복사할 때, 해당 객체만 복사하여 새 객체를 생성한다.

obj1.price = 10;
objs.add(obj1);
console.log(objs); // Set(2) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 } }

// quiz
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs); // Set(3) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 }, { name: '🍌', price: 5 } }

obj3.price = 8;
console.log(objs); // Set(3) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 }, { name: '🍌', price: 8 } }
