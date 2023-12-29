---
description: 상속(Inheritance)
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

# 2-3) Inheritance

* **클래스 간의 계층적 관계 구성, 명확한 프로그램 구조**.
* **파생 클래스 (Derived Class) 정의:** `extends` 키워드를 사용하여 기본 클래스를 상속받는 파생 클래스를 정의.
* 필요에 따라 <mark style="background-color:orange;">추가적인 속성이나 메소드를 정의하거나 기존 메소드를 재정의(overwriting) 가능</mark>.
* 부모 class에 있는 멤버변수 또는 함수를 상속 받을 수 있다.
* **생성자 함수와 `super` 호출:** 파생 클래스에 생성자 함수를 정의할 때, `super` 키워드를 사용.
* `super`는 **파생 클래스에서 기본 클래스의 생성자를 호출**하거나, **기본 클래스의 메소드에 접근**할 때 사용.

<div align="left">

<figure><img src="../../../.gitbook/assets/2023-12-21 21 49 07.png" alt="" width="563"><figcaption></figcaption></figure>

</div>

```typescript
// 기본 클래스 정의
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

// 파생 클래스 정의
class Dog extends Animal {
    constructor(name: string) {
        super(name); // 'super'를 사용하여 기본 클래스의 생성자를 호출
    }

    bark() {
        console.log('Woof! Woof!');
    }

    move(distanceInMeters = 5) {
        console.log('Running...');
        super.move(distanceInMeters); // 'super'를 사용하여 기본 클래스의 메소드 호출
    }
}

const dog = new Dog("Rex");
dog.bark();
dog.move(10);
```
