// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스✨

// 클래스 cladd
// - 각각의 클래스에는 생성자 함수가 존재.
class Fruit {
  // 생성자 : new 키워드로 객체를 생성할때 호출되는 함수
  // 객체를 생성할때 필요한 인자를 받아올 수 있도록 함수형태와 비슷하다.
  constructor(name, emoji) {
    // 링크해주는 작업
    this.name = name;
    this.emoji = emoji;
  }
  // 일반함수 또는 화살표함수로 작성.
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple2은 Fruit 클래스의 인스턴스이다.
const apple2 = new Fruit('apple', '🍎');
const orange2 = new Fruit('orange', '🍊');

console.log(apple2);
console.log(orange2);
console.log(apple2.name);
console.log(apple2.emoji);
apple2.display();

// obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'roxie' };
