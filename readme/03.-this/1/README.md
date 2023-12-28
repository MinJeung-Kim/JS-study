---
description: 전역 공간에서의 This
---

# 1-1) 전역 공간

<figure><img src="../../../.gitbook/assets/2023-12-22 14 03 29 (1).png" alt=""><figcaption><p>→ 브라우저 환경</p></figcaption></figure>

```javascript
var a = 1;
console.log(window.a);
console.log(this.a);
```

<figure><img src="../../../.gitbook/assets/2023-12-22 16 13 32 (1).png" alt=""><figcaption><p>→ 변수 a는 전역 컨텍스트의 수집 대상.</p></figcaption></figure>

<div align="left">

<figure><img src="../../../.gitbook/assets/2023-12-22 16 19 27.png" alt="" width="563"><figcaption></figcaption></figure>

</div>

1. 함수 호출
2. 전역 컨텍스트 수집(window, API(alert, consol, ...), 변수  a)
