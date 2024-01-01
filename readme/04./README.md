---
description: 'Callback Funciton :  되돌아 호출하다'
---

# 04. 콜백 함수

* <mark style="background-color:orange;">**다른 코드의 인자로 넘겨주는 함수**</mark>.
* **특정 이벤트가 발생**하거나 **특정 조건이 충족**될 때 호출.
* 이벤트 처리, 비동기 요청, 타이머 함수 등 다양한 상황에서 활용.



### 예제

* `setTimeout` 함수는 **두 번째 인자로 지정된 시간(3000밀리초 = 3초)**이 지나면 **첫 번째 인자로 주어진 콜백 함수를 실행**.

```javascript
// 콜백 함수 정의
function myCallbackFunction() {
    console.log("3초 후에 호출됨!");
}

// setTimeout을 사용하여 3초 후에 myCallbackFunction을 호출
setTimeout(myCallbackFunction, 3000);
```

<div align="left">

<figure><img src="../../.gitbook/assets/2024-01-01 12 24 39.png" alt=""><figcaption><p>setTimeout API</p></figcaption></figure>

</div>

