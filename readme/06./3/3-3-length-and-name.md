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



## name 프로퍼티

* **ES6에서 정식 표준**이 된 name 프로퍼티는 <mark style="background-color:orange;">함수 이름을 나타낸다</mark>.
* 주로 디버깅, 함수 자체에 대한 정보를 얻거나, 함수를 동적으로 호출하는 등의 상황에서 유용하다.
* `ES5`에서 <mark style="color:orange;">익명 함수 표현식의 경우 빈 문자열</mark>을 갖고, `ES6`에서는 <mark style="color:orange;">함수 객체를 가리키는 식별자</mark>를 값으로 갖는다.
* `ES5`에서 자바스크립트의 표준은 이름 추론에 대해 구체적인 지침을 제공하지 않기때문에 엔진이나 환경에서 다르게 처리할 수 있다.
* 익명 함수와 화살표 함수는 기본적으로 이름이 없기때문에 **함수가 변수에 할당되거나 객체의 속성으로 사용될 때**,  [엔진이나 환경](https://caniuse.com/?search=es6)(`V8 -  Chrome, Node.js` / `SpiderMonkey - Firefox` / `JavaScriptCore - Safari`  ) 에서 함수 이름을 추론하는 고유한 규칙을 가지고 있을 수있다.

```javascript
// 기명 함수
function myFunction() {}
console.log(myFunction.name); // "myFunction"

// 익명 함수
let myFunc = function() {};
console.log(myFunc.name); // 브라우저나 자바스크립트 엔진에 따라 "", "myFunc" 등이 출력될 수 있음

// 함수 표현식
let myFunc = function innerFunction() {};
console.log(myFunc.name); // "innerFunction"

// 화살표 함수(arrow function)
let myArrowFunc = () => {};
console.log(myArrowFunc.name); // 브라우저나 자바스크립트 엔진에 따라 "", "myArrowFunc" 등이 출력될 수 있음

// 내장 함수
console.log(Array.prototype.join.name); // "join"

```

### 사용 예

* **디버깅 및 로깅**:  함수 호출을 로깅하거나 함수 실행을 추적할 때, 함수의 `name` 프로퍼티를 사용하여 어떤 함수가 실행되고 있는지 또는 문제를 일으키는지 식별할 수 있다.

```javascript
function myFunction() {}
console.log("함수 실행:", myFunction.name); // "함수 실행: myFunction"
```

* **고차 함수**: 함수형 프로그래밍이나 콜백에서 사용되는 고차 함수에서, `name`을 사용하여 전달되는 함수를 식별할 수 있어 가독성과 디버깅에 도움이 된다.

```javascript
function firstFunction(callback) {
  console.log("호출된 콜백 함수:", callback.name);
}
function secondFunction() {}
firstFunction(secondFunction); // "호출된 콜백 함수: secondFunction"
```

* **테스팅 및 단언**: 단위 테스트에서 `name` 프로퍼티는 테스트하거나 모의하는 함수가 올바른지 확인하는 데 사용될 수 있다.

```javascript
function testFunction() {}
console.assert(testFunction.name === "testFunction", "함수 이름이 다릅니다.");
```

* **동적 함수 호출**: 특정 조건에 따라 함수를 동적으로 호출해야 할 때, `name` 프로퍼티는 문자열로 저장된 함수 이름과 실제 함수 참조를 매칭하는 데 사용될 수 있다.

```javascript
const funcName = 'dynamicFunc';
const dynamicFunc = function() {};
if (funcName === dynamicFunc.name) {
  dynamicFunc();
}
```

* **내성 검사 및 메타 프로그래밍**: `name` 프로퍼티는 코드가 자기 자신을 검사하는 내성 검사에서 사용된다. 메타 프로그래밍 패턴에서도 함수를 일급 객체로 다룰 때 유용하다.

```javascript
function metaFunction() {}
console.log("메타 프로그래밍 함수 이름:", metaFunction.name);
```

* **데코레이터 및 래퍼**: 함수를 래핑하거나 데코레이터를 만들 때, `name` 프로퍼티를 사용하여 원래 함수의 이름을 유지함으로써 코드의 명확성과 유지 관리성을 개선할 수 있다.

```javascript
function wrapper(originalFunction) {
  function wrappedFunction() {
    console.log("래핑된 함수:", originalFunction.name);
    originalFunction();
  }
  return wrappedFunction;
}
function myFunction() {}
const wrapped = wrapper(myFunction);
wrapped(); // "래핑된 함수: myFunction"
```
