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

# 2) Immutability & Variability

### 불변값과 가변값의 동작방식

{% content-ref url="2-1-immutability.md" %}
[2-1-immutability.md](2-1-immutability.md)
{% endcontent-ref %}

{% content-ref url="2-2-variability.md" %}
[2-2-variability.md](2-2-variability.md)
{% endcontent-ref %}



### 변수 복사 비교

> <mark style="color:orange;">참조형 데이터</mark>가 '가변값'이라고 설명할 때의 _**'가변'**은_ 참조형 데이터 자체를 변경할 경우가 아니라 그 _<mark style="color:orange;background-color:yellow;">내부의 프로퍼티를 변경할 때만 성립</mark>_한다.

```javascript
const a = '🍎';
let b = a;
const obj1 = { c: '🍎', d: '🍇' };
const obj2 = obj1;

b = '🍈';
obje2.c = '🍑';
```

<div align="left">

<figure><img src="../../../.gitbook/assets/2023-12-14 16 32 15 (4).png" alt="" width="563"><figcaption><p>→ a !== b   /  obj1 === obj2</p></figcaption></figure>

</div>



