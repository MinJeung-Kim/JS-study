---
description: 호이스팅(hoisting)
---

# 2-1) EnvironmentRecord

* 현재 컨텍스트와 관련된 **코드의 식별자 정보**들을 저장.
* 컨텍스트 내부 전체를 처음부터 끝까지 **순서대로 수집**.
* 코드 실행전, 해당 환경에 속한 **매개변수명, 함수선언, 변수명**등을 수집한다.

### **호이스팅(hoisting)** :&#x20;

* 변수 정보 수집 과정을 이해하기 쉬운 방법으로 대체한 <mark style="background-color:orange;">가상의 개념</mark>.
* &#x20;environmentRecord의 수집 과정을 추상화한 개념.
* 실행 컨텍스트가 관여하는 코드 집단의 **최상단으로** <mark style="background-color:orange;">'끌어올린다'</mark>고 해석하는 것.



### 매개변수와 변수 호이스팅

```javascript
// var : 선언과 동시에 초기화(undefined)가 이루어 짐.
function a(x) {
  console.log(x); // 1
  var x;
  console.log(x); // 1
  var x = 2;
  console.log(x); // 2
}

a(1);

// let, const : 선언만 가능.
console.log(x); // ⚠️ ReferenceError: Cannot access 'x' before initialization
const x = 1;

// ===================================[ 호이스팅 ]====================================
function a(x) {
  var x;
  var x;
  var x;

  x = 1;
  console.log(x); // 1
  console.log(x); // 1
  x = 2;
  console.log(x); // 2
}

a(1); 
```



### 함수 선언의 호이스팅

```javascript
function a() {
  console.log(b); // [Function: b]

  var b = "bbb";
  console.log(b); // bbb

  function b() {
    console.log("function b 호출"); // 호출 ❌
  }
  console.log(b); // bbb
}

a();


// ===================================[ 호이스팅 ]====================================
function a() {
  var b;
  function b() {}  

  console.log(b);  // [Function: b]
  b = "bbb";
  console.log(b);  // bbb
  console.log(b);  // bbb
}

a();

// ============================[ 함수 선언문 -> 함수 표현식]=========================  
function a() {
  var b;
  var b = function b() {} // 함수 선언문 -> 함수 표현식

  console.log(b); 
  b = "bbb";
  console.log(b);  
  console.log(b);  
}

a();
```
