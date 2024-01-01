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

# 2) 콜백 함수에서의 this

* **일반적인 함수나 메소드에서 `this`는** <mark style="background-color:orange;">그 함수나 메소드를 호출하는 컨텍스트(즉, 소유 객체)를 참조.</mark>
* **콜백 함수에서 `this`는** **일반 함수로서 콜백을 전달할 경우**, <mark style="background-color:orange;">`this`</mark><mark style="background-color:orange;">는 전역 객체(브라우저 =</mark>  <mark style="background-color:orange;"></mark><mark style="background-color:orange;">`window`</mark><mark style="background-color:orange;">, Node.js =</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">`global`</mark><mark style="background-color:orange;">)를 가리키거나 엄격 모드 =</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">`undefined`</mark><mark style="background-color:orange;">가 됨.</mark>

```javascript
function myCallback() {
    console.log(this); // 일반 함수에서 this는 전역 객체 혹은 undefined (엄격 모드)
}

const myObject = {
    method: function() {
        setTimeout(myCallback, 1000);
    }
};

myObject.method(); // 전역 객체 혹은 undefined 출력
```

### 화살표 함수 사용

* ES6부터, 화살표 함수는 **자신을 둘러싼 외부 함수의 `this`를 "상속".**

```javascript
const myObject = {
    property: "값",
    myMethod: function() {
        setTimeout(() => {
            console.log(this.property); // 여기서 this는 myObject.
        }, 1000);
    }
};

myObject.myMethod(); // "값" 출력
```

### `bind`, `call`, `apply` 사용

* 콜백 함수의 `this`를 명시적으로 설정.

```javascript
function myCallback() {
    console.log(this.property);
}

const myObject = {
    property: "값"
};

setTimeout(myCallback.bind(myObject), 1000); // "값" 출력
```
