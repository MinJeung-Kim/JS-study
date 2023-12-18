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

# 2-3) Shallow Copy

* 얕은 복사는 **객체의 최상위 수준의 속성**만 복사.
* 내부 객체나 배열은 참조로 복사되기 때문에 **원본과 복사본이 내부 객체나 배열을 공유**.



## Object 얉은 복사 방법

### 1. Object.assign()

```javascript
const original = { a: 1, b: { c: 2 } };
const copy = Object.assign({}, original);

```

### 2. Spread Syntax

```javascript
const original = { a: 1, b: { c: 2 } };
const copy = { ...original };
```



## Array  얉은복사 방법

### 1. Array.prototype.slice()

```javascript
const original = [1, 2, 3];
const copy = original.slice();
```

### 2. Array.from()

```javascript
const original = [1, 2, 3];
const copy = Array.from(original);
```
