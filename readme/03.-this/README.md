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

# 03. This

* **함수와 객체를 구분**하는 유일한 기능.
* 상황에따라 this가 바라보는 대상이 다름.
* this의 값은 <mark style="background-color:orange;">함수가</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">**선언될 때가 아니라 호출될 때**</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">결정</mark> 된다.
* 객체의 메소드에서 `this`를 사용하면 그 메소드를 소유하고 있는 객체를 가리키고, 일반 함수에서 사용하면 전역 객체(브라우저에서는 `window`, Node.js에서는 `global`)를 가리키거나, 엄격 모드에서는 `undefined`를 가리킨다.

<div align="left">

<figure><img src="../../.gitbook/assets/2023-12-22 19 01 43.png" alt="" width="563"><figcaption><p>→ this.name의  this는  barista를 가르키고, differentMe의 this는 widow를 가르킨다.</p></figcaption></figure>

</div>

### This binding

* 함수가 호출될 때, `this` 키워드가 가리킬 객체가 결정되는 과정.
* **JavaScript함수 호출 -> 실행 컨텍스트 생성 -> this가 가리킬 객체 결정**.
* <mark style="background-color:orange;">**함수가 어떻게 호출되었는지**</mark>(객체의 메소드로 호출, 일반 함수로 호출, 생성자 함수로 호출 등)에 따라 달라진다.

### 객체의 메소드로 호출

* `myObject.greet()`를 호출하면 `this`는 `myObject`를 가리킨다.

```javascript
const myObject = {
  name: 'Roxie',
  greet: function() {
    console.log(`Hello, I am ${this.name}`);
  }
};

myObject.greet(); // "Hello, I am Roxie"
```

### 일반 함수로 호출

* `this`는 전역 컨텍스트(브라우저에서는 `window`, Node.js에서는 `global`)를 가리키거나, 엄격 모드(`'use strict'`)에서는 `undefined`가 됨.

```javascript
function showContext() {
  console.log(this);
}

showContext(); // 전역 객체 또는 undefined 출력 (환경에 따라 다름)
```

### 생성자 함수로 호출

* `new` 키워드를 사용하여 함수를 생성자로 호출하면, `this`는 새로 생성된 객체를 가리킨다.

```javascript
function Person(name) {
  this.name = name;
  this.greet = function() {
    console.log(`Hello, I am ${this.name}`);
  };
}

const alice = new Person("Roxie");
alice.greet(); // "Hello, I am Roxie" 
```

### 콜백 함수로 호출

```javascript
setTimeout(function () {
  console.log(this); // Window
}, 300);

[1, 2, 3].forEach(function (x) {
  console.log(this, x); // Window 1, Window 2 , Window 3
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector("#a").addEventListener("click", function (e) {
  console.log(this, e); // <button id="a">클릭</button>, event 객체
});
```
