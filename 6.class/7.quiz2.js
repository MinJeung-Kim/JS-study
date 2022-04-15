// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보 : 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay() {
    return console.log(
      `${this.name}님의 월급은 ${this.hoursPerMonth * this.payRate}원 입니다.`
    );
  }
}

class FullTimeEmployee extends Employee {
  // 숫자가 의미한는것이 무엇인지 상수변수를 이용하여 정의한다.
  static #PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static #PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE);
  }
}

const fullTimeEmployee = new FullTimeEmployee('영희', '개발부서', 5);
const partTimeEmployee = new PartTimeEmployee('철수', '디자인부서', 5);
fullTimeEmployee.calculatePay();
partTimeEmployee.calculatePay();
