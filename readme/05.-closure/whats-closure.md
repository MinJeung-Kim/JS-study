---
description: >-
  "A Closure is the combination of a function and lexical environment within
  which that function was declared." -  by MDN
---

# What's Closure

* 함수가 선언될 때의 `Lexical Environment`를 기억하고, 해당 환경의 변수에 접근할 수 있는 기능을 제공.
* 클로저의 핵심은 내부 함수가 외부 함수의 지역 변수에 접근할 수 있다는 점.
* 외부 함수 내에서 정의된 내부 함수를 사용합니다. 외부 함수는 실행되고 종료될 수 있지만, 그 변수는 여전히 내부 함수에 의해 접근 가능.

## 코드의 동작 방식

1. 가장 먼저 전역 변수 `x`와 `outer` 함수를 포함한 **전역 실행 컨텍스트 생성**.
2. **`outer` 함수 호출 시,** 지역 변수 `x`와 `inner` 함수가 포함된 **새로운 실행 컨텍스트가 Call Stack에 Push**됨.&#x20;
3. `outer` 함수가 실행되면서 지역 변수 `x`를 10으로 선언하고, `inner` 함수를 정의한 다음 반환. 반환되는 **`inner` 함수는 `outer` 함수의 지역 변수 `x`에 대한 참조를 유지**.
4. **`outer` 함수의 실행이 끝나면 실행 컨텍스트는 Call Stack에서 제거**되지만, <mark style="background-color:orange;">inner 함수가 참조하는 outer 함수의 지역 변수 x는 메모리에 남아 있다.</mark>
5. **`inner` 함수는 `outer` 함수의 지역 변수 `x`를 참조**하고 있으므로, `x`는 **`inner` 함수가 존재하는 동안 계속 유지되는  클로저의 일부**가 됨.&#x20;
6. &#x20;`innerFunc`를 호출하면, `inner` 함수 내부의 `console.log(x)`가 실행. 이 때 `x`는 클로저에 의해 유지되는 `outer` 함수의 지역 변수를 참조하므로, 10 출력.

<figure><img src="../../.gitbook/assets/2024-01-08 17 11 22.png" alt=""><figcaption><p>→ call stack에서는 종료되지만 메모리에 남아 있는 outer()내부의 x변수.</p></figcaption></figure>

