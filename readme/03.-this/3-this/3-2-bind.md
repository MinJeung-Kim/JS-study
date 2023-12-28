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

# 3-2) Bind 메서드

```javascript
Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]]);
```

* ES5에서 추가
* <mark style="background-color:orange;">this 및 인자들을 바탕으로 새로운 함수를 반환만(호출❌)</mark> 하는 메서드.
* **함수에  `this`를 미리 적용**하는 것과 **부분 적용 함수를 구현**하는 두가지 목적을 모두 지님.

```javascript
var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
func(1, 2, 3, 4);  // Window{...} 1 2 3 4

// this 지정
var bindFunc1 = func.bind({ x: 1 });
bindFunc1(5, 6, 7, 8);  // {x: 1} 5 6 7 8

// 부분적용 함수
var bindFunc2 = func.bind({ x: 1 }, 4, 5);
bindFunc2(6, 7);  // { x: 1 } 4 5 6 7 
bindFunc2(8, 9);  // { x: 1 } 4 5 8 9
```



### name 프로퍼티

* name 프로퍼티에 동사 bind의 수동태인 'bound' 접두어가 붙음.
* 코드를 추적하기에 수월해짐.

```javascript
var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
}; 

var bindFunc = func.bind({ x: 1 }, 4, 5);
console.log(func.name); // func
// 원본 함수(func)에 bind 메서드를 적용한 새로운 함수(bindFunc)라는 의미.
console.log(bindFunc.name); // bound func
```
