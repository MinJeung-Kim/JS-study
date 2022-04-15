// Symbol 심벌
// 유일한 키를 생성할 수 있다.
const map = new Map();
const key1 = 'key';
const key2 = 'key';
map.set(key1, 'Hello');
// 원시타입이기 때문에 값이 똑같아서 동일한 key라고 간주한다.
console.log(map.get(key2)); // Hello
console.log(key1 === key2); // true

// 심볼로 값을 생성하면 서로 다른 유일한 키를 만들수 있다.
const key3 = Symbol('key');
const key4 = Symbol('key');
map.set(key3, 'Hello');
console.log(map.get(key4)); // undefined
console.log(key3 === key4); // false

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

// 해당 심벌의 문자열 확인
console.log(Symbol.keyFor(k1)); // key
// Symbol.keyFor() : 전역 레지스트리에 보관된 심벌에 한해서만 정보를 가져올 수 있다.
// key3에서 만든 심벌은 일반심벌이다.
console.log(Symbol.keyFor(key3)); // undefined

// 맵과 오브젝트에서 키를 이용할때 유용하게 사용할 수 있다.
// 유니크한 키를 생성할 수 있다,
const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj); // { [Symbol(key)]: 'Hello', [Symbol(key)]: 1 }
console.log(obj[k1]); // Hello
console.log(obj[Symbol('key')]); // undefined
