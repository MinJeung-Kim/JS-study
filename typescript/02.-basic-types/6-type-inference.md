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

# 6) Type Inference

* <mark style="background-color:orange;">타입 추론</mark>이라고 불린다.

### 변수선언

* 변수에 문자열을 할당하여 선언하면 자동으로 string 타입이 붙는다.

```typescript
let text = 'hello';
text = 1; // error⚠️
```

### 함수

* 인자에 타입 또는 default 값을 주지 않으면 any타입이 된다.

```typescript
function print(message = 'hello') {
  console.log(message);
}
print('hello');

// 자동으로 리턴 타입(number)이 추론된다. 
function add(x: number, y: number) {
  return x + y;
}

// result의 타입은 number로 추론된다.
const result = add(1, 2);
```
