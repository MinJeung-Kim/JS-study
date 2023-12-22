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

{% content-ref url="1-global-execution-context.md" %}
[1-global-execution-context.md](1-global-execution-context.md)
{% endcontent-ref %}

{% content-ref url="2-function-execution-context/" %}
[2-function-execution-context](2-function-execution-context/)
{% endcontent-ref %}

* `JavaScript 엔진`은 **실행 컨텍스트 스택를 사용**하여 <mark style="background-color:orange;">실행 컨텍스트를 관리</mark>한다.&#x20;
* `스택`은 코드의 **실행 순서를 제어**함.
* **전역 실행 컨텍스트**는 프로그램이 시작될 때 스택에 **가장 먼저 `push`**됨.
* <mark style="background-color:orange;">새로운 함수가 호출될 때마다</mark> 해당 **함수의 실행 컨텍스트**가 스택에 `push`됨.
* **함수 실행이 끝나면** **해당 함수의 실행 컨텍스트는 스택에서 `pop`**.

<figure><img src="../../.gitbook/assets/2023-12-22 18 08 24 (1).png" alt=""><figcaption></figcaption></figure>
