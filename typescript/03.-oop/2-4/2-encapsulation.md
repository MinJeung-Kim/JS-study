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

# 2-1) Encapsulation

* **서로 관련**있는 `data` 또는 `function`을 한 **오브젝트 안에 담아, 외부로부터 숨겨**서 <mark style="background-color:orange;">캡슐화</mark> 하는 것.&#x20;
* 외부에서 직접적으로 변경하지 못하게 함.

<table><thead><tr><th width="176">접근자</th><th width="572">접근 범위</th></tr></thead><tbody><tr><td>public</td><td>default, 공개</td></tr><tr><td>private</td><td>비공개 (외부 접근 ❌)</td></tr><tr><td>protected</td><td>상속받은 자식class만 접근 가능</td></tr></tbody></table>

### Private

<figure><img src="../../../.gitbook/assets/2023-12-20 17 32 31.png" alt=""><figcaption><p>→ fillCoffeeBeans함수를 통해 beans의 값이 유효한지 검증.</p></figcaption></figure>
