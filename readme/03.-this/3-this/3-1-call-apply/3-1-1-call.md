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

# 3-1-1) Call( )

```javascript
Funciton.prototype.call(tghisArg[, arg1[, arg2[, ...]]]);
```

* 메서드의 호출 주체인 **함수를 즉시 실행하는 명령어**.
* **첫 번째 인자는 this로 바인딩**하고 이후 인자들을 호출할 함수의 매개변수.
* call()를 이용하면 <mark style="background-color:orange;">**임의의 객체를 this로 지정 가능**</mark>.

```javascript
var func function (a, b, c) {
    console.log(this, a, b, c);
};

func(1, 2, 3); // Window{...} 1 2 3 
func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6
```

```javascript
var obj = {
    a: 1, 
    method: function (x, y) {
        console.log(this.a, x, y);
    };
};

obj.method(2, 3); // 1 2 3
obj.method.call({ a: 4 }, 5, 6); // 4 5 6
```
