---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# prototype 프로퍼티

* 생성자 함수와 프로토타입 체인과 관련된 핵심 개념이다.
* 함수가 생성될 때 자동으로 `prototype` 프로퍼티를 가지게 되며, `prototype` 객체는 함수 자체를 가리키는 `constructor` 프로퍼티를 포함다.
* `prototype` 프로퍼티는 주로 생성자 함수와 함께 사용되며 `new` 키워드를 사용하여 생성자 함수로 새 객체를 생성하면,  객체는 생성자의 `prototype`으로부터 속성과 메서드를 상속받는다.
* 상속받은 속성과 메서드는 생성자 함수의 모든 인스턴스 간에 공유된다.



## 사용 예

* `Person`은 생성자 함수이며, `greet`은 그 `prototype`에 추가된 메서드다. `Person`의 모든 인스턴스는 `greet` 메서드에 접근할 수 있다.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

let person1 = new Person("Alice");
person1.greet(); // "Hello, my name is Alice"
```
