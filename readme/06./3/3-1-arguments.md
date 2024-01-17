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

# 3-1) arguments 프로퍼티

### arguments 프로퍼티

* 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는 순회(iterable) 가능한 유사 배열 객체.
* 함수 내부에서 지역 변수처럼 사용됨(외부 접근❌).
* **함수가 호출되면 함수 몸체 내에서 암묵적으로 매개변수가 선언되고 undefined로 초기화된 후 인수가 할당**된다.
* <mark style="background-color:orange;">인수가 전달되지 않은 매개변수는 undefined로 초기화</mark>된 상태를 유지한다.
* 매개변수의 개수보다 <mark style="background-color:orange;">인수를 더 많이 전달한 경우 초과된 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관</mark>된다.

```javascript
function multiply(x, y) {
// Function.arguments 사용 지양.
// arguments에 인수 정보 저장.
  console.log(arguments);
  return x * y;
}

// 매개변수 개수만큼 인수를 전달하지 않아도 에러 발생 ❌.
console.log(multiply()); // [Arguments] { } , NaN
console.log(multiply(1)); //  [Arguments] { '0': 1 } , NaN
console.log(multiply(1, 2)); //  [Arguments] { '0': 1, '1': 2 } , 2
console.log(multiply(1, 2, 3)); //  [Arguments] { '0': 1, '1': 2, '2': 3 } , 2
```

<div align="left">

<figure><img src="../../../.gitbook/assets/2024-01-17 17 48 20.png" alt=""><figcaption><p>→ arguments property에 보관된 인수.</p></figcaption></figure>

</div>

<div align="left">

<figure><img src="../../../.gitbook/assets/2024-01-17 17 58 37.png" alt="" width="563"><figcaption><p>→ arguments 객체.</p></figcaption></figure>

</div>

* **`arguments 객체`** : 인수를 프로퍼티 vlue로 소유하며 프로퍼티 key는 인수의 순서를 나타냄.
* **`callee property`** : 함수 자신을 가리킴.
* **`length property`** : 인수의 개수.
* **`Symbol(Symbol.iterator) property`** : arguments 객체를 순회 가능한 자료구조인 이터러블로 만들기 위한 프로퍼티.
