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

# 1-2-1) Function

### Basic function

```typescript
// JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
```

### Promise

```typescript
// JavaScript 💩
function jsFetchNum(id) {
  // code ...
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

// TypeScript ✨
function fetchNum(id: string): Promise<number> {
  // code ...
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}
```

### Optional parameter

* 인자를 옵션으로 전달.
* 전달하지 않으면 **undefined.**

```typescript
function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  console.log(lastName); // undefined
}
printName('Steve', 'Jobs');
printName('Anna');

```

### Default parameter

* 인자를 전달하지 않았을 경우 default값을 사용.

```typescript
function printMessage(message: string = 'default message') {
  console.log(message);
}
printMessage();
```

### Rest parameter

* <mark style="background-color:orange;">갯수에 상관없이</mark> 동일한 타입의 **배열 형태**로 인자를 받을 수 있다.

```typescript
function addNumbers(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}
console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3, 4));
console.log(addNumbers(1, 2, 3, 4, 5, 0));
```
