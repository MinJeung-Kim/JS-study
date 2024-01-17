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

## 실제 사용 예

* **arguments 객체는** 매개변수 개수를 확정할 수 없는 [<mark style="background-color:orange;">**가변 인자 함수**</mark>](#user-content-fn-1)[^1]<mark style="background-color:orange;">**를구현할 때 유용**</mark>하다.

### 1. arguments 객체 사용

* `arguments`는 함수 내에서 자동으로 사용할 수 있는 **배열과 유사한 객체**다. 이 객체는 함수에 전달된 모든 인자를 포함한다.
* 함수 내에서 `arguments[0]`, `arguments[1]` 등으로 각 인자에 접근할 수 있다.

```javascript
function exampleFunction() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
exampleFunction('Hello', 'World', '!');
```

### 2. 나머지 매개변수(Rest Parameters) 사용

* ES6(ES2015)에서 도입된 Rest Parameters 문법(`...`)을 사용하면, 함수가 받는 여러 인자를 하나의 배열로 모을 수 있다.
* `arguments` 객체보다 더 명시적이고 사용하기 쉽다.

```javascript
function exampleFunction(...args) {
  args.forEach(arg => console.log(arg));
}
exampleFunction('Hello', 'World', '!');
```

[^1]: * 호출 시에 전달되는 인자의 개수가 고정되어 있지 않고, 함수가 여러 개의 인자를 받을 수 있도록 설계된 함수.
    * 가변 인자 함수는 어떤 수의 인자든 처리할 수 있도록 유연하게 작성됨.
