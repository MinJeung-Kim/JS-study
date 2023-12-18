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

### 기본형과 참조형의  동작방식

{% content-ref url="2-1-immutability.md" %}
[2-1-immutability.md](2-1-immutability.md)
{% endcontent-ref %}

{% content-ref url="2-2-variability.md" %}
[2-2-variability.md](2-2-variability.md)
{% endcontent-ref %}



### 변수 복사 비교

> <mark style="color:orange;">참조형 데이터</mark>가 '가변값'이라고 설명할 때의 _**'가변'**은_ 참조형 데이터 자체를 변경할 경우가 아니라 그 _<mark style="color:orange;background-color:yellow;">내부의 프로퍼티를 변경할 때만 성립</mark>_한다.
>
> **기본형은 복사한 원본의 데이터가 변경되지 않는** 반면, **참조형은** 복사데이터를 변경하면 **원본데이터도 함께 변경**되기때문에 가변형이라 할 수 있다.

```javascript
const a = '🍎';
let b = a;
const obj1 = { c: '🍎', d: '🍇' };
const obj2 = obj1;

b = '🍈';
obj2.c = '🍑';

console.log(
 ` a: ${a},  // 🍎
   b: ${b},  // 🍈
   obj1: ${JSON.stringify(obj1)}, // { c: '🍑', d: '🍇' }
   obj2: ${JSON.stringify(obj2)}  // { c: '🍑', d: '🍇' }
  `
)
```

<div align="left">

<figure><img src="../../../.gitbook/assets/2023-12-14 16 32 15 (4).png" alt="" width="563"><figcaption><p>→ a !== b   /  obj1 === obj2</p></figcaption></figure>

</div>

{% content-ref url="../../../readme/01.-date-type/2-immutability-and-variability/2-3-shallow-copy.md" %}
[2-3-shallow-copy.md](../../../readme/01.-date-type/2-immutability-and-variability/2-3-shallow-copy.md)
{% endcontent-ref %}

{% content-ref url="../../../readme/01.-date-type/2-immutability-and-variability/2-4-deep-copy.md" %}
[2-4-deep-copy.md](../../../readme/01.-date-type/2-immutability-and-variability/2-4-deep-copy.md)
{% endcontent-ref %}

