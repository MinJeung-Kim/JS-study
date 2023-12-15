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

# 2) Type Aliases

### Type Alias

```typescript
type Text = string;
const name: Text = 'roxie';
const address: Text = 'korea';

type Num = number;

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'roxie',
  age: 12,
};
```



### String Literal Types

```typescript
type Name = 'name';
let ellieName: Name;
ellieName = 'name';

type JSON = 'json';
const json: JSON = 'json';

type Boal = true;
const isCat: Boal = true;  // O
const isCat: Boal = false; // X
```
