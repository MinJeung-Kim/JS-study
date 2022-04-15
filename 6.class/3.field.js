// 접근제어자 - 캡슐화
// - 내부상으로 필요한 데이터를 외부에서 보이지 않도록(수정❌) 숨겨놓는다.
// private(#), public(기본), protected
class Fruit {
  #name; // 내부에서는 사용이 가능하고 외부에서는 접근 불가.
  #emoji;
  type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능.
console.log(apple);
