const fruits = ['π', 'π', 'π', 'π'];

// λ°°μ΄μ λΉκΈ λΉκΈ λλ©΄μ μνλ κ²(μ½λ°±ν¨μ)μ ν λ
// μ½λ°±ν¨μλ λ°°μ΄μ μΈμλ§λ€ νλ²μ© νΈμΆλ¨!
fruits.forEach((value) => console.log(value));

// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμλ
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = { name: 'π₯', price: 2 };
const item2 = { name: 'πͺ', price: 3 };
const item3 = { name: 'π', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => {
  return value.name === 'πͺ';
});

console.log(result); // { name: 'πͺ', price: 3 }

// findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
result = products.findIndex((value) => {
  return value.name === 'πͺ';
});

console.log(result); // 1

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.some((item) => item.name === 'πͺ');
console.log(result); // true

// λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ λ€ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.every((item) => item.name === 'πͺ');
console.log(result); // false

//  μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘!
result = products.filter((item) => item.name === 'πͺ');
console.log(result); // [ { name: 'πͺ', price: 3 }, { name: 'πͺ', price: 3 } ]

console.clear();

// map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ μλ‘μ΄ λ°°μ΄ μμ±!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result); // [ 2, 4, 6, 8, 10 ]

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else return item;
});
console.log(result); // [ 1, 4, 3, 8, 5 ]

// Flatmap : μ€μ²©λ λ°°μ΄μ μ«μ ν΄μ€

result = nums.map((item) => [1, 2]);
console.log(result); // [ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

result = nums.flatMap((item) => [1, 2]);
console.log(result); // [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];

// sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
// λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts); // [ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort(); // λ¬Έμμ΄ ννλ‘ λ³νλμ΄ μ λ ¬λ¨.
console.log(numbers); // [ 0, 1, 10, 2, 4, 5 ]

// < 0 aκ° μμΌλ‘ μ λ ¬, μ€λ¦μ°¨μ
// > 0 bκ° μμΌλ‘ μ λ ¬, λ΄λ¦Όμ°¨μ
numbers.sort((a, b) => a - b); // μ λ ¬κΈ°μ€μ μ λ¬
console.log(numbers); // [ 0, 1, 2, 4, 5, 10 ]

// reduce λ°°μ΄μ μμλ€μ μ μ΄μ κ°μ νλλ‘
// sumμ΄ 0μΌλ‘ μ΄κΈ°νλ¨.
// valueλ λ°°μ΄μ΄ νλμ© μ λ¬λ¨.
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log(result); // 15
