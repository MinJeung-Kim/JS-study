---
description: node.js 환경
---

# 1-1-1) Node.js의 this

### 최상위 수준에서의 `this`

* 최상위 수준의 `this`는 `module.exports`를 가리키며, <mark style="background-color:orange;">전역 객체</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">**global**</mark><mark style="background-color:orange;">과는 다름</mark>.

```javascript
console.log(this); // {}
console.log(module.exports); // {}
console.log(global); // <ref *1> Object [global] { global: [Circular *1], ...}

console.log(this === module.exports); // true
console.log(this === global); // false
```

### 함수 내에서의 `this`

* 일반 함수 호출에서 `this`는 기본적으로 **전역 객체(global)**를 가리킴.&#x20;
* 하지만, `strict mode`나 다른 컨텍스트에서 호출될 경우 다를 수 있다.

```javascript
function testFunction() {
  console.log(this === global); // true or false
}

testFunction();
```

### 화살표 함수에서의 `this`

* 화살표 함수는 자신이 선언된 렉시컬 컨텍스트의 `this` 값을 가짐.

```javascript
const arrowFunction = () => {
  console.log(this === module.exports); // true
};

arrowFunction();
```
