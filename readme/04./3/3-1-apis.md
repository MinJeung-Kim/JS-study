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

# 3-1) 비동기 APIs

### 비동기 동작 방식

1. `execute()` 함수가 호출되면, JavaScript 엔진은 `execute` 함수의 실행 컨텍스트를 호출 스택에 푸시함.
2. `console.log("1")` 는 동기적으로 작동하므로, 즉시 "1"을 콘솔에 출력하고, 바로 다음 줄로 이동.
3. JavaScript 엔진은 3초 후에 실행될 콜백 함수(`() => { console.log("2"); }`)를 Web API에 위임하고, `setTimeout` 호출 이후의 코드 실행을 계속 진행.
4. 콜백 함수는 Web API에서 대기하며, 지정된 시간(3초)이 경과하면 이벤트 큐로 이동.
5. `setTimeout` 다음 줄에 있는 `console.log("3")`은 동기적 실행.
6. `execute` 함수 내의 모든 동기적 코드가 실행되면, 함수의 실행 컨텍스트는 호출 스택에서 제거.
7. 3초 후, `setTimeout`의 콜백 함수가 이벤트 큐로 이동.
8. 이벤트 루프는 호출 스택이 비어있는지 지속적으로 확인.
9. 호출 스택이 비어 있으면, 이벤트 루프는 이벤트 큐에서 대기 중인 콜백 함수를 호출 스택으로 이동시키고 실행.
10. 최종 출력 => `"1"`, `"3"`, `"2"`.

<div align="left">

<figure><img src="../../../.gitbook/assets/2024-01-01 19 10 56 (2).png" alt=""><figcaption><p>→ 비동기 동작 방식</p></figcaption></figure>

</div>

