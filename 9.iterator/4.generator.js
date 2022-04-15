// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return {
//           value: num++ * 2,
//           done: num > max,
//         };
//       },
//     };
//   },
// };

// 이터레이터를 심플하게 만들 수 있다.
// 제너레이터 : 값을 생성할 수 있는.

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i); // 0
      // 사용자가 원할때까지 기다렸다가 리턴.
      // 사용하는 사람에게 제어권을 양도한다.
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done); // 0 false

// multiple.return(); // undefined true
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done); // 1 false
