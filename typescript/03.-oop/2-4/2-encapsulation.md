---
description: 캡슐화(Encapsulation)
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

# 2-1) Encapsulation

* **서로 관련**있는 `data` 또는 `function`을 한 **오브젝트 안에 담아, 외부로부터 숨겨**서 <mark style="background-color:orange;">캡슐화</mark> 하는 것.&#x20;
* **객체의 세부 구현 내용을 숨기고**, <mark style="background-color:orange;">외부에서는 객체의 기능만을 사용</mark>할 수 있도록 하는 객체 지향 프로그래밍의 핵심 원칙.
* 캡슐화를 통해 **객체의 내부 상태를 보호**하고, 안전하고명확한 객체 사용.
* <mark style="background-color:orange;">접근 제한자(access modifiers)를 사용</mark>하여 구현.

<table><thead><tr><th width="176">접근자</th><th width="572">접근 범위</th></tr></thead><tbody><tr><td><p>public</p><p>(공개 접근성)</p></td><td>default, 어디서든 접근 가능</td></tr><tr><td><p>private</p><p>(비공개 접근성)</p></td><td>내부에서만 접근 가능. (외부 접근 ❌)</td></tr><tr><td><p>protected</p><p>(보호된 접근성)</p></td><td><strong>해당 멤버</strong>는 <strong>해당 클래스 및 파생된 클래스(하위 클래스) 내에서만 접근</strong> 가능.(외부 접근 ❌)</td></tr></tbody></table>

### Private

* **외부에서 직접적**으로 `coffeeBeans`를 **수정하게되면 유의미하지 않는 값을 입력**해서 <mark style="background-color:orange;">사이드이펙트가 발생</mark>할 수 있다.

<figure><img src="../../../.gitbook/assets/2023-12-20 17 32 31.png" alt=""><figcaption><p>→ fillCoffeeBeans함수를 통해 beans의 값이 유효한지 검증.</p></figcaption></figure>

### Private Constructor

* **static 함수**를 제공한다면 **생성자를 통해서 생성하는 것(new CoffeeMaker)** 을 **금지**하기위해 사용하므로, <mark style="background-color:orange;">constructor을 private로 설정</mark>해서 **makeMachine()함수를 통해서만 생성**하게 설정하는 것을 권장한다.

<div align="left">

<figure><img src="../../../.gitbook/assets/2023-12-20 18 16 39.png" alt="" width="563"><figcaption></figcaption></figure>

</div>

* `Car` 클래스는 `engine`이라는 `private` 멤버를 가짐.
* `engine`은 클래스 **외부에서 직접적으로 접근할 수 없으며**, `getEngine`과 `setEngine`과 같은 공개 메서드를 통해서만 접근 가능.
* `engine`의 **세부 구현을 숨기고, 외부에서는 간접적으로만 접근** 가능.

```javascript
class Car {
    private engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    startEngine() {
        console.log(`Engine started: ${this.engine}`);
    }

    // 외부에서 엔진을 직접 접근하지 못하게 합니다.
    getEngine() {
        return this.engine;
    }

    setEngine(value: string) {
        this.engine = value;
    }
}

const car = new Car("V8");
car.startEngine(); // Engine started: V8
console.log(car.getEngine()); // V8
// car.engine = "V6"; // 오류: 'engine'은 private이므로 'Car' 클래스 외부에서 접근할 수 없습니다.

```

