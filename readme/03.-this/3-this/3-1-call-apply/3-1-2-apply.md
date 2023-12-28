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

# 3-1-2) Apply( )

```javascript
Function.prototype.apply(thisArg[, argsArray]);
```

* 기능적으로 call()와 동일.
* 두 번째 인자를 배열로 받아 배열의 요소들을 호출할 함수의 매개변수로 지정.

```javascript
var func = function (a, b, c) {
  console.log(this, a, b, c); // { x: 1 } 4 5 6
};
func.apply({ x: 1 }, [4, 5, 6]);

var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y); // 4 5 6
  },
};
obj.method.apply({ a: 4 }, [5, 6]);
```
