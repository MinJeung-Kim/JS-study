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

# 08. 타이머

## 호출 스케줄링

* **호출 스케줄링(scheduling a call)** : 함수를 명시적으로 호출하지 않고 <mark style="background-color:orange;">일정 시간이 경과된 이후에 호출</mark>되도록 함수 호출을 예약하려면 타이머 함수를 사용한다.
* 타이머 **생성** 함수 : `setTimeout`, `setInterval`
* 타이머 **제거** 함수 : `clearTimeout`, `clearInterval`
* 타이머 함수는 빌트인 함수가 아니지만, 브라우저 환경과 Node.js 환경에서 모두 <mark style="color:orange;">전역 객체의 메서드</mark>로 제공한다.
* 타이머 함수는 <mark style="color:orange;">호스트 객체</mark>이며, <mark style="color:orange;">비동기 처리 방식</mark>으로 동작한다.



## 타이머 함수

### setTimeout / clearTimeout

* setTimeout함수는 두 번째 인수로 전달받은 시간(ms, 1/1000초)으로 단 한 번 동작하는 타이머를 생성한다.
* 타이머가 만료되면 첫 번째 인수로 전달받은 콜백 함수가 호출된다.

```javascript
const timeoutId = setTimeout(func:code[ , delay, param1, param2, ...]);
```

<table><thead><tr><th width="129">매개변수</th><th>설명</th></tr></thead><tbody><tr><td><strong>func</strong></td><td>타이머가 만료된 뒤 호출될 콜백 함수.<br>⚠️ 콜백함수 대신 문자열을 사용할 수있지만, 권장하지않는다.</td></tr><tr><td><strong>delay</strong></td><td><ul><li>타이머 만료 시간(밀리초(ms)단위).</li><li>default = 0.</li></ul><p>⚠️ 태스크 큐에 콜백 함수를 등록하는 시간을 지연할 뿐, delay 시간이 만료되면 함수가 즉시 호출되는 것이 보장되지 않는다.</p></td></tr><tr><td><strong>param1, param2, ...</strong></td><td>호출 스케줄링된 콜백함수에 전달해야 할 인수가 존재한다면, 세 번째 이후의 인수로 전달할 수 있다.</td></tr></tbody></table>

* **setTimeout함수**는 <mark style="background-color:orange;">생성된 타이머를 식별할 수 있는 고유한 id를 반환</mark>하는데 **브라우저 환경인 경우 **<mark style="color:orange;">**숫자**</mark>이며, **Node.js 환경인 경우 **<mark style="color:orange;">**객체**</mark>다.

```javascript
// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출됨.
setTimeout(()=> console.log('Hi!'), 1000);

// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출됨.
// 이때 콜백 함수에 'Lee'가 인수로 전달됨.
setTimeout(name => console.log(`Hi! ${name}`), 1000, 'Lee');
```

* setTimeout함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소할 수 있다.

```javascript
// 1초(1000ms) 후 타이머가 만료되어 콜백 함수가 호출됨.
// setTimeout 함수는 생성된 타이머를 식별할 수 잇는 고유한 타이머 id를 반환.
const timerId = setTimeout(()=> console.log('Hi'), 1000);

// setTimeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소함.
// 타이머가 취소되면 setTimeout 함수의 콜백 함수가 실행되지 않음.
clearTimeout(timerId);
```



### setInterval / clearInterval

* setInterval 함수는 두 번째 인수로 전달받은 시간(ms, 1/1000초)으로 <mark style="background-color:orange;">반복 동작하는 타이머를 생성</mark>한다.
* 타이머가 만료될 때마다 첫 번째 인수로 전달받은 콜백 함수가 취소될 때까지 반복 호출된다.

```javascript
const timerId = setImterval(func:code[ , delay, param1, param2, ...]);
```

* setTimeout / clearTimeout 함수와 유사하면 다른 점은 반복 동작한다는 것이다.

```javascript
let count = 1;

// 1초(1000ms) 후 타이머가 만료되어 콜백 함수가 호출됨.
// setInterval함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환함.
const timerId = setInterval(()=> {
    console.log(count); // 1 2 3 4 5
    
    // count가 5이면 setInterval 함수가 반환한 타이머 id를 clearInterval함수의 인자로 전달하여 취소함.
    // 타이머가 취소 되면 setInterval함수의 콜백 함수가 실행되지 않음.
    if(count++ === 5) clearInterval(timeoutId);
}, 1000);
```
