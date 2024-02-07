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

> 🪄 어떤 상황에 어떤 비동기 API를 '왜' 써야하는지 정확하게 알고 사용하자!

### 비동기 동작 방식

1. **`execute()` 함수가 호출**되면, [**JavaScript 엔진**](#user-content-fn-1)[^1]은 <mark style="background-color:orange;">execute()의 실행 컨텍스트를</mark> <mark style="background-color:orange;">**Call Stack**</mark><mark style="background-color:orange;">에 푸시</mark>함.
2. 실행 컨텍스트는 **객체가 저장되어 있는 `Memory heap`을 참조**함.
3. **`console.log("1")` 는 동기적**으로 작동하므로, <mark style="background-color:orange;">즉시 "1"을 콘솔에 출력</mark>하고, 바로 다음 줄로 이동.
4. **JavaScript 엔진은 3초 후에 실행될 콜백 함수(`() => { console.log("2"); }`)를** [**Web API**](#user-content-fn-2)[^2]**에 위임**하고, `setTimeout` 호출 이후의 코드 실행을 계속 진행.
5. **콜백 함수는 Web API에서 대기.**
6. `setTimeout` 다음 줄에 있는 **`console.log("3")`은 동기적 실행**.
7. `execute` 함수 내의 <mark style="background-color:orange;">모든 동기적 코드가 실행되면, 함수의 실행 컨텍스트는 호출 스택에서 제거</mark>.
8. <mark style="background-color:orange;">**3초 후,**</mark> \*\*`setTimeout`의 \*\*<mark style="background-color:orange;">**콜백 함수가 Task Queue로 이동**</mark><mark style="background-color:orange;">.</mark>
9. [<mark style="background-color:orange;">**Event Loop**</mark>](#user-content-fn-3)[^3]<mark style="background-color:orange;">**는**</mark> **`Call Stack`이 비어있는지 지속적으로 확인**.
10. **`Call Stack`이 비어 있으면**, **Event Loop**는 <mark style="background-color:orange;">**Task Queue**</mark><mark style="background-color:orange;">에서 대기 중인 콜백 함수를</mark> <mark style="background-color:orange;">**Call Stack**</mark><mark style="background-color:orange;">으로 이동</mark>시키고 실행.
11. **최종 출력 => `"1"`, `"3"`, `"2"`.**

<div align="left">

<figure><img src="../../../../.gitbook/assets/2024-01-01 19 10 56.png" alt=""><figcaption><p>→ 비동기 동작 방식</p></figcaption></figure>

</div>

* **자바스크립트 엔진**은 `Heap`과 `Call Stack`로 구성되어 있으며, <mark style="background-color:orange;">단순히 태스크가 요청되면 콜 스택을 통해 요청된 작업을 순차적으로 실행</mark>한다.
  * **콜 스택(call stack)** : 최상위 실행 컨텍스트가 종료되어 콜 스택에서 제거되기 전까지는 다른 태스크가 실행되지 않는다.
  * **힙(heap)** : 객체는 크기가 정해져 있지 않으므로 할당해야 할 메모리 공간의 크기르르 런타임에 결정하기 때문에 구조화 되어 있지 않다는 특징이 있다.
* **브라우저 or Node.js** 환경은 `태스크 큐`와 `이벤트 루프`, `Web APIs`를 제공하며, <mark style="background-color:orange;">호출 스케줄링을 위한 타이머 설정과 콜백 함수의 등록을 담당</mark>한다.
  * **태스크 큐(tesk queue / event queue / callback queue)** : 비동기 함수의 콜백 함수 또는 이벤트 핸들러가 일시적으로 보관되는 영역. <mark style="color:orange;">프로미스의 후속 처리 메서드의 콜백 함수가 일시적으로 보관되는 마이크로태스크 큐도 존재</mark>한다.
  * **이벤트 루프(event loop)** : 콜 스택이 비어 있는지, 태스크 큐에 대기 중인 함수가 있는지 반복적으로확인 하여 콜 스택이 비어있다면 순차적(FIFO)으로 태스크 큐에 대기 중인 함수를 콜 스택으로 이동시킨다.

## 결론

**브라우저**는 **멀티 스레드**로 동작하고 브라우저에 내장된 **자바스크립트 엔진**은 **싱글 스레드**로 동작한다.



[^1]: * JavaScript <mark style="background-color:orange;">**코드를 해석하고 실행**</mark>하는 역할.
    * 코드를 **읽고**, **실행 컨텍스트를 생성**하며, **변수와 함수 선언을 메모리에 저장**.
    * 실행 가능한 코드를 만나면, **호출 스택에 프레임(실행 컨텍스트)을 추가**하고 **코드를 실행**.

[^2]: * **브라우저가 제공**하는, JavaScript 엔진 외부의 API.
    * JavaScript 엔진은 API를 호출하고, <mark style="background-color:orange;">API의 처리는 브라우저가 담당.</mark>
    *

[^3]: * \*\*`Task Queue`\*\*에서 대기 중인 콜백 함수를 \*\*`Call Stack`\*\*이 비어 있을 때, 이동시키는 역할.
    * **`Call Stack`과 `Task Queue`를 모니터링**하며, <mark style="background-color:orange;">**Call Stack**</mark><mark style="background-color:orange;">이 비어 있으면</mark> <mark style="background-color:orange;">**Task Queue**</mark><mark style="background-color:orange;">에서 다음 콜백 함수를 가져와 실행</mark>.
