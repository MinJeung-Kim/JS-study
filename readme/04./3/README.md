---
description: 프로그래밍에서 작업 실행의 타이밍을 다루는 두 가지 주요 방식.
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# 3) 동기와 비동기

<div align="left">

<figure><img src="../../../.gitbook/assets/2024-01-01 16 50 24 (1).png" alt=""><figcaption><p>출처 - <a href="https://inpa.tistory.com/entry/%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-%EB%8F%99%EA%B8%B0%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%B8%94%EB%A1%9C%ED%82%B9%EB%85%BC%EB%B8%94%EB%A1%9C%ED%82%B9-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC">https://inpa.tistory.com/entry/👩%E2%80%8D💻-동기비동기-블로킹논블로킹-개념-정리</a></p></figcaption></figure>

</div>

### 1. 동기(Synchronous) 처리

* 작업들이 <mark style="background-color:orange;">**순차적으로 실행**</mark>되며, **한 작업이 끝나야만 다음 작업을 시작**할 수 있다.
* 프로그램의 흐름을 예측하기 쉽지만, 자원 활용 측면에서 비효율적.

### 예제

* `doTask1`이 완료될 때까지 `doTask2`는 시작되지 않음.

```javascript
function doTask1() {
    console.log("Task 1 시작");
    // 시간이 걸리는 작업 가정
    for (let i = 0; i < 1000000000; i++) {} // 루프로 시간 지연
    console.log("Task 1 완료");
}

function doTask2() {
    console.log("Task 2 시작");
    console.log("Task 2 완료");
}

doTask1();
doTask2();
```



### 2. 비동기(Asynchronous) 처리

* 한 작업이 끝나기를 기다리지 않고, 다음 작업을 진행.
* **백그라운드에서 작업을 수행**하며, <mark style="background-color:orange;">완료되면 콜백 함수나 프로미스 등을 통해 결과를 처리.</mark>
* 자원을 효율적으로 활용할 수 있지만, 작업의 관리 복잡.

### 예제

* `doTask1`은 비동기로 실행되며, `setTimeout`에 의해 1초 뒤에 완료됨.
* `doTask2`는 `doTask1`이 완료되기를 기다리지 않고 바로 실행.

```javascript
function doTask1() {
    console.log("Task 1 시작");
    setTimeout(() => {
        // 시간이 걸리는 작업 가정
        console.log("Task 1 완료");
    }, 1000);
}

function doTask2() {
    console.log("Task 2 시작");
    console.log("Task 2 완료");
}

doTask1();
doTask2();
```

