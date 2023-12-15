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

# 3) Undifined & Null

* **undifined** : 값을 대입하지 않은 변수에 접근하고자 할 때 <mark style="background-color:orange;">자바스크립트 엔진에서 반환해주는 값</mark>.
* **null** : <mark style="background-color:orange;">'비어있음'</mark>을 명시적으로 나타내고 싶을 때 사용.

```javascript
const n = null;
console.log(typeof n);         // object

console.log(n == undefined);  // true
console.log(n == null);       // true
```
