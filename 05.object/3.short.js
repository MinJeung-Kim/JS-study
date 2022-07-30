const x = 0;
const y = 0;
const coordinate = { x: x, y: y };
console.log(coordinate); // { x: 0, y: 0 }

const coordinate2 = { x, y };
console.log(coordinate2); // { x: 0, y: 0 }

function makeObj(name, age) {
  return {
    name,
    age,
  };
}

console.log(makeObj('kim', 30)); // { name: 'kim', age: 30 }
