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

# 3) Getter & Setter

### Getter를 사용하지 않았을 경우

```typescript
{
  class User {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
      console.log(this.firstName); // Steve
    }
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName); // Steve Jobs
  user.firstName = "Lotso";
  console.log(user.firstName); // Lotso
  console.log(user.fullName); // Steve Jobs
}
```

1. **객체 생성 시 `fullName` 초기화**: 코드에서 `User` 클래스의 생성자는 객체가 생성될 때 호출.이 시점에서 `this.fullName`은 문자열 'Steve Jobs'로 고정.
2. **속성 변경 후 `fullName` 업데이트 되지 않음**: 객체 생성 후 `user.firstName` 속성을 'Lotso'로 변경해도, `this.fullName` 속성은 생성자에서 이미 설정된 'Steve Jobs'를 계속 유지. `firstName`이나 `lastName`의 변경 사항을 자동으로 추적하지 않는다.

### Getter 사용

```typescript
{
  class User {
   // 생략 가능
   // firstName: string;
   // lastName: string;
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    // constructor 인자에 접근제어자를 붙이면 멤버변수로 인식.
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName); // Steve Jobs
  user.firstName = "Lotso"; 
  console.log(user.fullName); // Lotso Jobs
}
```

### Setter

* 내부의 멤버변수를 직접 접근하지 않고 값을 변경할 수 있다.
* 매개변수의 유효성을 검사 할 수 있다.

```typescript
 class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        // error message
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, public lastName: string) {}
  }

  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.fullName);
```
