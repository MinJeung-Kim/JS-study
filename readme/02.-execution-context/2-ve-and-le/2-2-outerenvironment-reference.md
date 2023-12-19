---
description: 스코프 & 스코프 체인 & OuterEnvironment Reference
---

# 2-2) OuterEnvironment Reference

### 스코프(Scope)

> **전역 변수**를 <mark style="background-color:orange;">지나치게 사용하면 프로그램의 다른 부분 간의 의도치 않은 상호작용을 초래</mark>할 수 있으며, 이는 **버그의 원인**이 될 수 있다.

* 식별자에 대한 유효범위.
* **전역 스코프(Global Scope):** 어느 곳에서나 사용할 수 있는 전역 변수.
* **함수 스코프(Function Scope):** 해당 함수의 지역 변수로, 함수 외부에서 접근 ❌.
* **블록 스코프(Block Scope):** ES6에서 도입된 `let`과 `const`를 사용하여 선언된 변수 , 블록(예: 조건문, 반복문) 내에서만 접근 가능

```javascript
var a = 1;
var outer = function () {
  var inner = function () {
    console.log(a); // undefined
    var a = 3;
  };
  inner();
  console.log(a); // 1
};
outer();
console.log(a); // 1

// ===================================[ 호이스팅 ]====================================
var a;
var outer;

a = 1;
outer = function () {
  var inner;
  
  inner = function () { 
    var a;
    console.log(a); // undefined
    
    a = 3; 
    console.log(a); // 3 
  };
  
  inner();
  console.log(a); // 1
};

outer();
console.log(a); // 1
```

<figure><img src="../../../.gitbook/assets/2023-12-19 18 59 53.png" alt=""><figcaption></figcaption></figure>
