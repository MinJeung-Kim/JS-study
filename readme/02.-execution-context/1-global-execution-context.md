---
description: 전역 실행 컨텍스트(Global Execution Context)
---

# 1) Global Execution Context

### 전역 실행 컨텍스트**(Global Execution Context)**

* JavaScript **코드가 처음 실행될 때 생성**되는 기본 컨텍스트.
* 각 JavaScript 환경(브라우저 또는 Node.js)에는 **하나의 전역 실행 컨텍스트만 존재**.
* <mark style="background-color:orange;">전역 객체</mark>(`window` in the browser, `global` in Node.js)와 관련이 있으며, 전역 변수와 함수는 이 전역 객체의 속성과 메소드로 취급됨.
