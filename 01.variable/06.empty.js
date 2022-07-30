// null, undefined

let variable;
console.log(variable); // undefined : 활성화된 아이템이 정해지지 않은 상태

variable = null;
console.log(variable); // null : 활성화된 아이템이 없는 상태(확실하게 저장소가 비어있다.)

console.log(typeof undefined); // undefined
console.log(typeof null); // object
