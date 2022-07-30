// 접근자 프로퍼티 (Accessor Property)
// get : 함수를 프로퍼티 처럼 접근할때 사용한다.
// set : 할당할 때 사용.
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `get ${this.lastName} ${this.firstName} `;
  }

  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
console.log(student.firstName);

console.log(student.fullName);
student.fullName = '김철수';
