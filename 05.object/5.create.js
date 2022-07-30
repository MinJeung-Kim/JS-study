const apple = {
  name: 'apple',
  display: function () {
    console.log(`${this.name}: 🍎`);
  },
};

const orange = {
  name: 'orange',
  display: function () {
    console.log(`${this.name}: 🍊`);
  },
};

console.log(apple);
console.log(orange);

// 생성자 함수
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };

  //   return this; // 생략가능
}

const apple2 = new Fruit('apple', '🍎');
const orange2 = new Fruit('orange', '🍊');

console.log(apple2);
console.log(orange2);
console.log(apple2.name);
console.log(apple2.emoji);
apple2.display();
