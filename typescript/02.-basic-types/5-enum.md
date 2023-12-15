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

# 5) Enum

* 상수값들을 하나로 묶어서 관리할 수 있다.
* Javascript에서는 지원하지 않는다.
* enum을 사용하면 <mark style="color:orange;">타입이 정확하게 보장 되지않기때문</mark>에 <mark style="color:orange;">**union type사용을 권장**</mark>한다.

```typescript
// JavaScript
const DAYS_ENUM = Object.freeze({ "MONDAY":0, "TUESDAY":1, "WEDNESDAY":2 });
const dayOfToday = DAYS_ENUM.MONDAY;

// TypeScript 
enum Days {
    Monday = 1,  // default 0
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
} 
console.log(Days.Monday);      // 1
let day: Days = Days.Saturday; // 6
day = Days.Tuesday;            // 2
day = 10;                      // 10 💩
console.log(day);

// union type 
type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'; 

let dayOfweek: DaysOfWeek = 'Monday';
dayOfweek = 'Wednesday'; 
```
