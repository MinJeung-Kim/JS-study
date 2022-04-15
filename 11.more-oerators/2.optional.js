// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?.

let item = { price: 1 };
// const price = item && item.price;
const price = item?.price;
console.log(price);

const obj = { name: '🐻', owner: 'Ellie' };
// const ownerName = obj && obj.owner && obj.owner;
// obj의 값이 있다면? obj.owner의 값이 있다면?
const ownerName = obj?.owner?.name;
console.log(price);
