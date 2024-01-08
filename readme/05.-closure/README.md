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

# 05. 클로저(Closure)

* 함수가 선언될 때의 어휘적 환경(Lexical Environment)에 대한 참조를 유지하는 기능.
* 함수가 자신이 생성될 때의 환경을 '기억'하고, 이 환경 밖에서 호출되어도 해당 환경에 있는 변수에 접근 가능.

```javascript
(function () {
  var a = 0;
  var intervalId = null;

  var inner = function () {
    if (++a >= 10) {
      clearInterval(intervalId);
    }

    console.log(a);
  };

  intervalId = setInterval(inner, 1000);
})();
```

