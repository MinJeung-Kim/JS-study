// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eat!');
//   }
//   sleep() {
//     console.log('sleep!');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eat!');
//   }
//   sleep() {
//     console.log('sleep!');
//   }
//   play() {
//     console.log('play!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('eat!');
  }
  sleep() {
    console.log('sleep!');
  }
}

class Tiger extends Animal {}
class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 부모 생성자의 color를 전달
    this.ownerName = ownerName;
  }
  play() {
    console.log('play!');
  }
}

const tiger = new Tiger('yello');
console.log(tiger);
tiger.sleep();
tiger.eat();

const dog = new Dog('red', 'roxie');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();

class Rabbit extends Animal {
  eat() {
    super.eat();
    console.log('Rabbit eat!');
  }
}

const rabbit = new Rabbit('green');
console.log(rabbit);
rabbit.eat();
