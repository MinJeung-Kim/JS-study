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

# 06. 프로토타입

* <mark style="background-color:orange;">JavaScript는 프로토타입 기반 언어이기 때문에 모든 함수와 객체는 기본적으로</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">**prototype**</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">속성을 가지고 있다.</mark>

## 함수 객체의 프로퍼티

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

<figure><img src="../../.gitbook/assets/2024-01-17 15 33 10.png" alt="" width="563"><figcaption><p>→ 함수 객체 내부의 프로퍼티 확인</p></figcaption></figure>

</div>

* **`[[prototype]]`** :  함수객체의 데이터 프로퍼티.
* **`__proto__`** : 접근자 프로퍼티.
* 프로토타입 속성은 생성자 함수에서 생성된 객체에 의해 상속되는 추가 속성과 메서드를 가질 수 있는 객체다.
