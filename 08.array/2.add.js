const fruits = ['🍉', '🍎', '🍍', '🍒', '🍑'];

// 배열 아이템을 참조하는 방법
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식 💩
// 인덱스 접근
fruits[4] = '🫐';
console.log(fruits);

delete fruits[1];
console.log(fruits); // [ '🍉', <1 empty item>, '🍍', '🍒', '🍑' ]
