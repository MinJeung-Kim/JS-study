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

# 2-4) Deep Copy

* 깊은 복사는 객체와 그 내부의 모든 요소(내부 객체, 배열 등)를 완전히 새로운 복사본으로 생성.
* 원본 객체와 복사본이 서로 독립적으로 유지됨.



### **1. JSON.stringify()와 JSON.parse()**

* `Function`, `Date` 객체, `undefined`, `Infinity`, `NaN`, `RegExp` 객체 등 일부 데이터 타입을 복사하지 못할 수 있다.

```javascript
const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));
```

### **2. lodash 라이브러리의 \_.cloneDeep()**

```javascript
const _ = require('lodash');

const original = { a: 1, b: { c: 2 } };
const copy = _.cloneDeep(original);
```

### 3. 재귀함수[^1] 사용

```javascript
function deepCopy(obj, hash = new WeakMap()) {
    // 순환 참조를 처리하기 위한 hash 맵
    if (hash.has(obj)) {
        return hash.get(obj);
    }

    // 날짜 객체 처리
    if (obj instanceof Date) {
        return new Date(obj);
    }

    // 배열과 일반 객체 처리
    if (typeof obj === 'object' && obj !== null) {
        const result = Array.isArray(obj) ? [] : {};
        hash.set(obj, result);

        for (const key in obj) {
            // 객체의 모든 속성에 대해 깊은 복사 수행
            result[key] = deepCopy(obj[key], hash);
        }

        return result;
    }

    // 기본 데이터 타입 및 함수는 그대로 반환
    return obj;
}

// 사용 예제
const original = { a: 1, b: { c: 2, d: new Date() }, e: [1, 2, 3] };
const copy = deepCopy(original);

console.log(copy);  // 깊은 복사된 객체 출력

```

[^1]: * 재귀 함수는 **자기 자신을 호출**.&#x20;
    * 함수 내에서 직접 또는 간접적으로 자신을 다시 호출하는 방식.&#x20;
    * 데이터 구조가 계층적이거나 반복적인 패턴을 가질 때 유용.
