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

# 1-1) Primitive types

### Number

```typescript
const num: number = -6;
```

### String

```typescript
const str: string = 'hello';
```

### Boolean

```typescript
const boal: boolean = false;
```

### Undefined

```typescript
let name: undefined; // 💩
let age: number | undefined;
age = undefined;
age = 1;

function find(): number | undefined {
    return undefined;
}
```

### Null

```typescript
let person: null; // 💩
let person2: string | null;
```

### Unknown 💩

* 어떤 타입일지 모를 경우 사용하지만 사용을 지양.

```typescript
let notSure: unknown = 0;
notSure = 'he';
notSure = true;
```

### Any💩

* 어떤 타입이든 담을 수 있는 변수를 의미하기때문에 사용을 지양.

```typescript
let anything: any = 0;
anything = 'hello';
```

### Void

* 생략이 가능하지만 함수에서 리턴하지 않을 경우 사용.

<pre class="language-typescript"><code class="lang-typescript">function print(): void {
<strong>  console.log('hello');
</strong>  return;
}

let unusable: void = undefined; // 💩
</code></pre>

### Never💩

* 함수에서 리턴하지 않을경우 사용하는 타입으로, 보통 에러를 던질때 사용.

```typescript
function throwError(message: string): never {
// message -> server (log)
  throw new Error(message);
  while (true) {}
}

let neverEnding: never; // 💩
```

### Object

```typescript
let obj: object; // 💩

function acceptSomeObject(obj: object) {}
acceptSomeObject({ name: 'ellie' });
acceptSomeObject({ animal: 'dog' });
```
