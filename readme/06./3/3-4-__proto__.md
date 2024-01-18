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

# 3-4) \_\_proto\_\_접근자 프로퍼티



* 모든 객체는 **\[\[Prototype]]이라는 내부 슬롯**을 갖는다.
* **`[[Prototype]]`** : 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킴.
* **`__proto__`** : \[\[Prototype]] 내부 슬롯이 가리키는 <mark style="background-color:orange;">프로토타입 객체에 접근하기 위해 사용하는 접근자 프로퍼티</mark>.
* `__proto__`를 통해 한 객체가 다른 객체의 속성과 메서드를 상속할 수 있다.
* `__proto__` 프로퍼티를 통해 객체의 프로토타입을 읽거나 변경할 수 있지만 권장되지 않는 방법이며, 대신 **`Object.getPrototypeOf`나 `Object.setPrototypeOf` 메서드를 사용**한다.

```javascript
const animal = { eats: true };
const rabbit = { jumps: true };

rabbit.__proto__ = animal;

console.log(rabbit.eats); // true, animal에서 상속받음

// =================== 표준 메서드 사용 ================
const animal = { eats: true };
const rabbit = { jumps: true };

Object.setPrototypeOf(rabbit, animal); // rabbit의 프로토타입을 animal로 설정
const proto = Object.getPrototypeOf(rabbit); // rabbit의 프로토타입을 가져옴

console.log(rabbit.eats); // true, animal에서 상속받음
console.log(proto === animal); // true
```

