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

# 06. 프로토타입

* <mark style="background-color:orange;">JavaScript는 프로토타입 기반 언어이기 때문에 모든 함수와 객체는 기본적으로</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">**prototype**</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">속성을 가지고 있다.</mark>
* 프로토타입 속성은 생성자 함수에서 생성된 객체에 의해 상속되는 추가 속성과 메서드를 가질 수 있는 객체다.

## 동작 원리

<div align="left">

<figure><img src="../../.gitbook/assets/img (1).png" alt=""><figcaption><p>→ 프로토타입 도식화 (출처: <a href="https://codingsalon.tistory.com/28">https://codingsalon.tistory.com/28</a>)</p></figcaption></figure>

</div>



## Constructor  프로퍼티

* **인스턴스 생성 확인**: 객체가 어떤 생성자 함수를 통해 생성되었는지 확인할 수 있다. 이는 특정 객체가 예상된 생성자를 통해 생성되었는지 검증하는데 유용하다.
* **동적 인스턴스 생성**: `constructor` 프로퍼티를 사용하여 동일한 생성자로 새로운 객체 인스턴스를 생성할 수 있다.
* **상속 체인 관리**: 프로토타입 상속을 사용하는 경우, `constructor` 프로퍼티는 <mark style="background-color:orange;">상속받은 객체의 생성자를 파악하여 상속 체인을 정확히 이해</mark>할 수 있다.

```javascript
function Person(name) {
  this.name = name;
}

const person1 = new Person("Alice");

console.log(person1);
console.log(person1.constructor === Person); // true
```

<figure><img src="../../.gitbook/assets/2024-01-18 17 18 35.png" alt=""><figcaption><p>→  Person 객체의 인스턴스의 속성 확인</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/2024-01-18 19 27 51 (1).png" alt=""><figcaption></figcaption></figure>

{% content-ref url="3/" %}
[3](3/)
{% endcontent-ref %}

### constructor 접근 방법

* p1부터 p5까지 모두 Person객체의 인스턴스들이다.

```javascript
const Person = function (name) {
  this.name = name;
};

const p1 = new Person("사람1");                       // Person { name: '사람1' } true
const p1Proto = Object.getPrototypeOf(p1);
const p2 = new Person.prototype.constructor("사람2"); // Person { name: '사람2' } true
const p3 = new p1Proto.constructor("사람3");          // Person { name: '사람3' } true
const p4 = new p1.__proto__.constructor("사람4");     // Person { name: '사람4' } true
const p5 = new p1.constructor("사람5");               // Person { name: '사람5' } true

[p1, p2, p3, p4, p5].forEach(function (p) {
  console.log(p, p instanceof Person);
});
```

