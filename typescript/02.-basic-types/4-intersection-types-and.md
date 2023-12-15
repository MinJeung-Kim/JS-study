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

# 4) Intersection Types: AND

### Intersection

* 다양한 타입을 묶어서 전달 할 수 있다.

```typescript
type Student = {
  name: string;
  score: number;
};

type Worker = {
  empolyeeId: number;
  work: () => void;
};

function internWork(person: Student & Worker) {
   console.log(person.name, person.empolyeeId, person.work());
}

internWork({
  name: 'ellie',
  score: 1,
   empolyeeId: 123,
  work: () => {},
});
```
