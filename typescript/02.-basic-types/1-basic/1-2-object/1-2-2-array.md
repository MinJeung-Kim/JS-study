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

# 1-2-2) Array

### Array

* **readonly** : object의 불변성을 보장하기 위해 사용.

```typescript
const fruits: string[] = ['🍅', '🍌']; // readonly O 
const scroes: Array<number> = [1, 3, 4]; // readonly ❌

function printArray(fruits: readonly string[]) {}
```

### Tuple

* 서로 다른 타입의 데이터를 담을 수 있다.
* 가독성이 떨어지므로 <mark style="color:orange;">**`interface`**</mark> or <mark style="color:orange;">**`type alias`**</mark> or <mark style="color:orange;">**`class`**</mark>로 대체해서 **사용 권장**.

```typescript
let student: [string, number];
student = ['name', 123];
student[0]; // name
student[1]; // 123

// Tuple 대신 명시적으로 Object Destructuring 사용.
const [name, age] = student;
```

