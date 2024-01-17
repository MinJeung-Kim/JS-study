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

# 3-3) length & name 프로퍼티

## length 프로퍼티

* <mark style="background-color:orange;">함수를 정의할 때 선언한 매개변수의 개수</mark>를 가리킨다.
* 함수가 예상하는 매개변수의 수를 알고 싶을 때 유용하다.
* 함수에 실제로 전달된 인자의 수와는 관계가 없다.
* **`arguments 객체`의 length 프로퍼티는 인자(argument)의 개수**를 가리키고, **`함수 객체`의 length 프로퍼티는 매개변수(parameter)의 개수**를 가리킨다.

```javascript
function example(a, b) {
  return a + b;
}
console.log(example.length); // 2 - example 함수는 2개의 매개변수를 가지고 있음을 나타냄

console.log(example(1, 2));  // 3 - 함수에 2개의 인자를 전달
console.log(example(1));     // NaN - 함수에 1개의 인자만 전달, 두 번째 인자는 undefined
console.log(example(1, 2, 3, 4)); // 3 - 함수에 4개의 인자를 전달, 그러나 함수는 처음 2개의 인자만 사용
```

##

## name 프로퍼티

* ES6에서 정식 표준이 된 name 프로퍼티는 함수 이름을 나타낸다.
* ES5에서 익명 ㅎ마수 표현식의 경우 빈 문자열을 갖고, ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖는다.

```javascript
0.0
```
