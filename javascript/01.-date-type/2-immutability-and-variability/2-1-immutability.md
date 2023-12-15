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

# 2-1) Immutability

### 불변값

* 기존에 생성된 데이터를 변경하지 않고 <mark style="background-color:yellow;">새로운 데이터를 생성하여 데이터 주소를 값</mark>으로 갖는다.

{% code overflow="wrap" %}
```javascript
let fruit = '🍎';
fruit = fruit + '🍌';
```
{% endcode %}

<div align="left">

<figure><img src="../../../.gitbook/assets/2023-12-14 17 05 07 (1).png" alt="" width="563"><figcaption><p>→   '🍎'를  '🍎🍌'로 변경하지 않고 '🍎🍌'라는 새로운 데이터를 생성</p></figcaption></figure>

</div>

```javascript
let apple = '🍎'; // @5004
const banana = '🍎'; // @5004
apple = '🍈'; // @5003
```

<div align="left">

<figure><img src="../../../.gitbook/assets/2023-12-14 17 09 22.png" alt="" width="563"><figcaption><p>→ 똑같은 값을 가지고 있는 주소값을 가진다</p></figcaption></figure>

</div>

