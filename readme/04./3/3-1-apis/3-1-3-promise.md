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

* 비동기 작업의 최종 완료(또는 실패)와 그 결과값을 나타내는 객체.
* 비동기 프로그래밍에서 콜백 함수의 대안으로 널리 사용.
* 코드의 가독성을 높이고, 복잡한 비동기 로직을 간결하게 표현.
* `async`/`await` 문법과 함께 사용될 때 더욱 강력해짐.
* **상태(State)**:
  1. **Pending(대기)**: 초기 상태, 성공 또는 실패가 아직 정해지지 않은 상태.
  2. **Fulfilled(이행)**: 연산이 성공적으로 완료됨.
  3. **Rejected(거부)**: 연산이 실패함.

<figure><img src="../../../../.gitbook/assets/2024-01-01 22 24 30.png" alt=""><figcaption><p>→ Promise API</p></figcaption></figure>

### Promise 생성 및 사용

* `new Promise()` 생성자를 통해 생성.
* 생성자는 두 개의 인자(`resolve()`와 `reject()`)를 가지는 실행 함수(executor function)를 받음.

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
