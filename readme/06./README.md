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

## What's Prototype ?

* <mark style="background-color:orange;">JavaScript는 프로토타입 기반 언어이기 때문에 모든 함수와 객체는 기본적으로</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">**prototype**</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">속성을 가지고 있다.</mark>
* **`[[prototype]]`** :  함수객체의 데이터 프로퍼티.
* **`__proto__`** : 접근자 프로퍼티.
* 프로토타입 속성은 생성자 함수에서 생성된 객체에 의해 상속되는 추가 속성과 메서드를 가질 수 있는 객체다.

```javascript
var Constructor = function (name) {
  this.name = name;
};

Constructor.prototype.method1 = function () {};
Constructor.prototype.property1 = "Constructor Prototype Property";

var instance = new Constructor("Instance");

// dir : 객체의 속성 출력
console.dir(Constructor); // [Function: Constructor]
console.dir(instance); // Constructor { name: 'Instance' }
```

<div align="left">

<figure><img src="../../.gitbook/assets/2024-01-15 18 56 50.png" alt="" width="563"><figcaption></figcaption></figure>

</div>
