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

# 3-1-3) Promise

* 비동기 작업의 **최종 완료(또는 실패)와 그 결과값을 나타내는 객체**.
* 비동기 프로그래밍에서 <mark style="background-color:orange;">**콜백 함수의 대안**</mark>으로 널리 사용.
* **코드의 가독성을 높이고**, 복잡한 **비동기 로직을 간결하게 표현**.
* **`async`/`await` 문법과 함께 사용될 때 더욱 강력**해짐.
* 상태(State):
  1. **Pending(대기)**: 초기 상태, 성공 또는 실패가 아직 정해지지 않은 상태.
  2. **Fulfilled(이행)**: 연산이 성공적으로 완료됨.
  3. **Rejected(거부)**: 연산이 실패함.

<figure><img src="../../../../.gitbook/assets/2024-01-01 22 24 30.png" alt=""><figcaption><p>→ Promise API</p></figcaption></figure>

### Promise 생성 및 사용

* `new Promise()` 생성자를 통해 생성.
* 생성자는 두 개의 인자(`resolve()`와 `reject()`)를 가지는 실행 함수(executor function)를 받음.
* 생성된 `Promise` 객체는 `.then()`, `.catch()`, `.finally()` 메소드를 사용하여 결과 처리.

```javascript
let promise = new Promise(function(resolve, reject) {
  // 비동기 작업 수행.

  if (/* 작업 성공 */) {
    resolve(value); // 작업이 성공하면 resolve를 호출
  } else {
    reject(error); // 실패하면 reject를 호출
  }
});

promise
  .then(function(result) {
    // 성공 시 실행될 코드
  })
  .catch(function(error) {
    // 실패 시 실행될 코드
  })
  .finally(function() {
    // 성공,실패와 관계없이 항상 실행될 코드
  });
```

### 장단점

<table><thead><tr><th width="102"></th><th></th></tr></thead><tbody><tr><td><strong>장점</strong></td><td><ul><li>중첩된 콜백 함수로 인해 발생하는 <strong>콜백 지옥(callback hell) 문제 해결.</strong></li><li><strong>체이닝(Chaining)</strong>을 통해 <strong>코드를 순차적이고 가독성 좋게 작성</strong>.</li><li><code>.then()</code> 또는 <code>Promise.all()</code>을 통해 <mark style="background-color:orange;">여러 작업을 병렬로 실행</mark>.</li><li><code>.catch()</code> 메소드를 사용해 오류를 쉽게 캐치.</li><li><code>상태(pending, fulfilled, rejected)</code>를 통해 비동기 작업의 상태를 명확하게 관리.</li></ul></td></tr><tr><td><strong>단점</strong></td><td><ul><li><strong><code>.catch()</code>를 빼먹었을 경우</strong>, <code>Promise</code> 내부에서 발생한 오류 묵살로 <strong>디버깅을 어렵게함.</strong></li><li>무분별한 체이닝(Chaining)은 복잡성을 높임.</li></ul></td></tr></tbody></table>
