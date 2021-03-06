const map = new Map([
  ['key1', 'π'],
  ['key2', 'π'],
]);
console.log(map); // Map(2) { 'key1' => 'π', 'key2' => 'π' }

// μ¬μ΄μ¦ νμΈ
console.log(map.size); // 2

// μ‘΄μ¬νλμ§ νμΈ
console.log(map.has('key1')); // true
console.log(map.has('key6')); // false

// μν
map.forEach((value, key) => console.log(value, key)); // π key1 π key2
console.log(map.keys()); // { 'key1', 'key2' }
console.log(map.values()); // { 'π', 'π' }
console.log(map.entries()); // { [ 'key1', 'π' ], [ 'key2', 'π' ] }

// μ°ΎκΈ°
console.log(map.get('key1')); // π
console.log(map.get('key6')); // undefined

// μΆκ°
map.set('key3', 'π');
console.log(map); // Map(3) { 'key1' => 'π', 'key2' => 'π', 'key3' => 'π' }

// μ­μ 
map.delete('key3');
console.log(map); // Map(2) { 'key1' => 'π', 'key2' => 'π' }

// μ λΆμ­μ 
map.clear();
console.log(map); // Map(0) {}

// μ€λΈμ νΈμμ ν° μ°¨μ΄μ ?
// κ΅¬μ‘°μμΌλ‘λ μ μ¬νμ§λ§
// μ€λΈμ νΈ κ²½μ° mapμμ μ¬μ©κ°λ₯ν λΉνΈμΈ ν¨μλ₯Ό μ¬μ©νμ§ λͺ»νλ€.
// μΈν°νμ΄μ€κ° λ€λ₯΄λ€.
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: 'λ§μλ μ°μ ' };
const obj = {
  [key]: milk,
};
console.log(obj); // { '[object Object]': { name: 'milk', price: 10, description: 'λ§μλ μ°μ ' } }

const map2 = new Map([[key, milk]]);
console.log(map2); // Map(1) { { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: 'λ§μλ μ°μ ' } }

console.log(obj[key]); // { name: 'milk', price: 10, description: 'λ§μλ μ°μ ' }
console.log(map2[key]); // undefined
console.log(map2.get(key)); // { name: 'milk', price: 10, description: 'λ§μλ μ°μ ' }
