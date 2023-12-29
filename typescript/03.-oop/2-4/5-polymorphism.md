---
description: 다형성(Polymorphism)
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# 2-4) Polymorphism

* 코드의 `재사용성`, `유연성`, 높은 `타입 안전성`.
* 인터페이스, 제네릭, 유니언 타입, 클래스 상속 등 다양한 기능을 활용하여 강력하고 유연한 코드를 작성.

### 인터페이스를 통한 다형성

* `interface`는 <mark style="background-color:orange;">**다양한 객체가 같은 구조를 공유할 수 있도록 정의**</mark>하는 데 사용.
* `Dog`와 `Cat` 클래스는 `Animal` 인터페이스를 구현.
* `makeAnimalSpeak` 함수는 `Animal` 인터페이스를 준수하는 모든 객체와 호환됨.

```javascript
interface Animal {
    speak(): string;
}

class Dog implements Animal {
    speak() {
        return "Woof!";
    }
}

class Cat implements Animal {
    speak() {
        return "Meow!";
    }
}

function makeAnimalSpeak(animal: Animal) {
    console.log(animal.speak());
}

const dog = new Dog();
const cat = new Cat();

makeAnimalSpeak(dog); // Woof!
makeAnimalSpeak(cat); // Meow!
```



### 클래스 기반 다형성

* `Bird` 클래스는 `Animal` 클래스를 상속받고 `move` 메소드를 오버라이딩함.
* `makeMove` 함수는 `Animal` 타입의 인자와 호환되므로, `Bird` 인스턴스도 처리 가능.

```javascript
class Animal {
    move() {
        console.log("Moving along!");
    }
}

class Bird extends Animal {
    move() {
        console.log("Flying!");
    }
}

function makeMove(animal: Animal) {
    animal.move();
}

const bird = new Bird();
makeMove(bird); // Flying!
```
