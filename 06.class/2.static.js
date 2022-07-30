// static 정적 프로퍼티, 메서드

class Fruit {
  static MAX_FRUITS = 4;
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드 : 클래스별로 공통적으로 사용할수 있고 만들어진 인스턴스에 참조할 필요❌
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음.
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드 : 만들어진 인스턴스와 밀접하게 연관된 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// 클래스 레벨의 함수는 클래스이름으로 접근 가능
const banana = Fruit.makeRandomFruit();

console.log(banana); // Fruit { display: [Function: display], name: 'banana', emoji: '🍌' }
console.log(Fruit.MAX_FRUITS); // 4

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
apple.display();

// Math를 이용해서 오브젝트를 만들지 않아도 바로 메서드를 호출할 수 있는것은 static 접근자가 붙었기 때문.
Math.pow();
