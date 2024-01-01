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

# 3-1-4) async/await

* JavaScript의 현대적인 비동기 처리 패턴으로, **ES2017(ES8)에 도입**.
* <mark style="background-color:orange;">**Promise**</mark><mark style="background-color:orange;">를 기반</mark>으로 하며, <mark style="background-color:orange;">비동기 코드를 동기적인 방식으로 보다 쉽고 명료하게 작성</mark> 가능.
* JavaScript에서 보다 **세련된 비동기 코드 작성 방법을 제공.**

### `async` 함수

* `async` 키워드는 함수를 비동기 함수로 만듦.
* `async` 함수는 항상 `Promise`를 반환.
* 함수 내부에서 `return` 문으로 반환하는 값은 `Promise`의 `resolve` 값.
* `async` 함수 내에서 발생하는 어떤 예외든 `Promise`의 `reject` 값으로 처리됨.

```javascript
async function myFunction() {
  return "Hello";
}

myFunction().then(alert); // "Hello"
```

### `await` 키워드

* `async` 함수 내에서만 사용.
* `Promise`가 `fulfilled` 또는 `rejected` 상태가 될 때까지 함수 실행 일시 중지.

```javascript
async function myFunction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 프로미스가 이행될 때까지 기다림
  alert(result); // "완료!"
}

myFunction();
```

### 장단점

<table><thead><tr><th width="99"></th><th></th></tr></thead><tbody><tr><td><strong>장점</strong></td><td><ul><li>비동기 코드를 거의 동기 코드처럼 보이고 동작하게 만들 수 있어 가독성이 크게 향상됨.</li><li><code>then</code> 체인을 사용하는 대신, 비동기 작업의 결과를 변수에 할당하여 간결한 코드 작성.</li><li><code>try...catch</code> 블록을 사용하여 쉬운 오류발견.</li><li>반복문이나 조건문 안에서 비동기 작업을 다룰 때 유용.</li><li>중단점 설정으로 쉬운 디버깅 가능.</li></ul></td></tr><tr><td><strong>단점</strong></td><td><ul><li><code>try...catch</code> 블록을 사용하지 않으면 오류가 묵살되므로  모든 <code>await</code> 표현은 적절히 오류 처리되어야 함.</li><li>병렬 처리 미흡으로, <code>Promise.all</code>을 적절히 사용하지 않으면 성능에 영향을 줌.</li><li>특정 <code>await</code>가 이전 작업의 완료를 기다리는 동안 다른 작업들이 불필요하게 대기하는 상황이 발생할 수 있음.</li></ul></td></tr></tbody></table>
