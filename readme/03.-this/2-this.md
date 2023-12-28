---
description: 메서드의 내부 함수에서의 this를 우회하는 방법
---

# 2) This 우회

* `call()`, `apply()`, `bind()` 메서드를 이용하면 **깔끔하게 우회**할 수 있다.

### ES5

* outer 스코프에서 `self 변수`에 **outer를 가리키고있는 this** 저장.

```javascript
var obj = {
  outer: function () {
    console.log(this); // { outer: [Function: outer] }
    var innerFunc1 = function () {
      console.log(this); // Window
    };
    innerFunc1();

    var self = this;
    var innerFunc2 = function () {
      console.log(self); // { outer: [Function: outer] }
    };
    innerFunc2();
  },
};
obj.outer();
```

### ES6

* <mark style="background-color:orange;">**this를 바인딩하지 않는 화살표 함수**</mark> 도입.

```javascript
var obj = {
  outer: function () {
    console.log(this); // { outer: [Function: outer] }
    var innerFunc1 = () => {
      console.log(this); // { outer: [Function: outer] }
    };
    innerFunc1();
  },
};
obj.outer();
```
