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

# 3) 함수 객체의 프로퍼티

* 브라우저 콘솔에서 `console.dir` 메서드를 사용하여 함수 객체의 내부를 확인 할 수 있다.

```javascript
function square(number) {
  return number * number;
}

// dir : 객체의 속성 출력.
console.dir(square);

// 객체의 모든 자체 속성에 대한 설명자 조회.
console.log(Object.getOwnPropertyDescriptors(square));

// 객체의 특정 속성에 대한 설명자 조회.
// 속성이 객체에 존재하지 않으면 undefined를 반환.
console.log(Object.getOwnPropertyDescriptor(square, "__proto__")); // undefined
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
```

<div align="left">

<figure><img src="../../../.gitbook/assets/2024-01-18 15 38 16.png" alt=""><figcaption><p>→ 함수 객체 내부의 프로퍼티 확인</p></figcaption></figure>

</div>



