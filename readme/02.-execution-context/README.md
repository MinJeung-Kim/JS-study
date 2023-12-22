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

# 02. Execution Context

* JavaScript **코드가 실행될 때 생성되는 환경**을 의미.
* 실행 컨텍스트는 **실행할 코드에 제공할 **<mark style="background-color:orange;">**환경 정보**</mark>들을 모아 놓은 객체.
* JavaScript 엔진이 코드를 실행하기 위해 필요한 모든 정보를 담고 있다.
* 실행 컨텍스트는 크게 두 가지 유형이 있다.

<div align="left">

<figure><img src="../../.gitbook/assets/2023-12-22 17 27 16 (1).png" alt=""><figcaption><p>→ 실행 컨텍스트의 2가지 유형.</p></figcaption></figure>

</div>

### 전역 실행 컨텍스트**(Global Execution Context)**

* JavaScript **코드가 처음 실행될 때 생성**되는 기본 컨텍스트.
* 각 JavaScript 환경(브라우저 또는 Node.js)에는 **하나의 전역 실행 컨텍스트만 존재**.
* <mark style="background-color:orange;">전역 객체</mark>(`window` in the browser, `global` in Node.js)와 관련이 있으며, 전역 변수와 함수는 이 전역 객체의 속성과 메소드로 취급됨.

### **함수 실행 컨텍스트(Function Execution Context)**

* <mark style="background-color:orange;">함수가 호출될 때마다 새로운 실행 컨텍스트 생성</mark>.
* `함수의 로컬 변수`, `매개변수`, `this` 값 등 **함수의 실행에 필요한 모든 정보를 포함**.
* 활성화되는 시점에 **`VariableEnvironment`**, **`LexicalEnvironment`**, **`ThisBinding`**의 세 가지 정보를 수집.

<figure><img src="../../.gitbook/assets/스크린샷_2022-05-05_오후_11.12.44.png" alt=""><figcaption><p>실행 컨텍스트 구성</p></figcaption></figure>

{% content-ref url="2-ve-and-le/" %}
[2-ve-and-le](2-ve-and-le/)
{% endcontent-ref %}



#### 참고

[\[10분 테코톡\] 💙하루의 실행 컨텍스트](https://www.youtube.com/watch?v=EWfujNzSUmw)
