---
description: 함수 실행 컨텍스트(Function Execution Context)
---

# 2) Function Execution Context

### **함수 실행 컨텍스트(Function Execution Context)**

* <mark style="background-color:orange;">함수가 호출될 때마다 새로운 실행 컨텍스트 생성</mark>.
* `함수의 로컬 변수`, `매개변수`, `this` 값 등 **함수의 실행에 필요한 모든 정보를 포함**.
* 활성화되는 시점에 **`VariableEnvironment`**, **`LexicalEnvironment`**, **`ThisBinding`**의 세 가지 정보를 수집.

<figure><img src="../../../.gitbook/assets/스크린샷_2022-05-05_오후_11.12.44.png" alt=""><figcaption><p>→ <strong>함수</strong> 실행 컨텍스트 구성</p></figcaption></figure>

#### 참고

[\[10분 테코톡\] 💙하루의 실행 컨텍스트](https://www.youtube.com/watch?v=EWfujNzSUmw)
