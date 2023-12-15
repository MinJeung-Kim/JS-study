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

# 2-2) Variability

### 가변값

* 복사한 값이 결국에는 참조하는 주소값이 같기때문에 원본값도 변경된다.
* Object의 메모리

```javascript
const obj = {
  a: '🍈,
  b: '🍎'
};
```

<div align="left">

<figure><img src="../../../.gitbook/assets/2023-12-14 16 32 15 (1).png" alt="" width="563"><figcaption><p>→ 객체의 변수 영역이 존재</p></figcaption></figure>

</div>

* Array의 메모리

```javascript
const obj = {
  x: '🍎',
  arr: [ '🍎','🍌','🍇' ]
};
```

<div align="left">

<figure><img src="../../../.gitbook/assets/2023-12-14 16 32 15 (2).png" alt="" width="563"><figcaption></figcaption></figure>

</div>
