// 카운터 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

class Counter {
  // 외부 접근을 막기위해 privite(#)으로 초기화
  #value;
  // 시작하는 value를 받는다.
  constructor(startValue) {
    // 전달받은 인자가 숫자인지 검증
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  // 읽기만 가능하도록 get 접근자 사용.
  get value() {
    return this.#value;
  }
  // 증가 함수 구현
  increment = () => {
    this.#value++;
  };
}

// 1. 사용하때 어떻게 사용할 수 있을지 작성.(계획세우기)

// - Counter라는 인스턴스 객체 생성
const counter = new Counter(0);
// - 숫자 증가 함수
counter.increment(); // 1
counter.increment(); // 2
// - 카운터에 있는 현재 value 출력
console.log(counter.value);
