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

# 3-2) caller 프로퍼티

* `caller` 프로퍼티는 현재 실행 중인 함수의 `arguments` 객체의 속성으로 접근할 수 있다.
* `arguments.caller`는 비표준이며, 대신 `Function.caller`를 사용하는 것이 권장된다.
* `functionName.caller` 형태로 사용되며, 이는 `functionName` 함수를 호출한 함수를 반환한다.

<pre class="language-javascript"><code class="lang-javascript"><strong>function firstFunction() {
</strong>  secondFunction();
}

function secondFunction() {
  console.log("Called by", secondFunction.caller);
}

firstFunction();
secondFunction();
</code></pre>

<div align="left">

<figure><img src="../../../.gitbook/assets/2024-01-17 18 27 16.png" alt="" width="563"><figcaption><p>→ caller 동작원리.</p></figcaption></figure>

</div>

## 주의사항

* `caller` 프로퍼티는 특정한 보안 상황이나 엄격 모드에서는 `caller` 프로퍼티에 접근하려고 하면 타입 에러(TypeError)가 발생한다.
* 함수가 글로벌 컨텍스트 또는 최상위 레벨에서 호출된 경우, `caller`는 `null`을 반환한다.
* `caller` 프로퍼티를 사용하여 함수의 호출 스택을 조작하는 것은 일반적으로 권장되지 않는다. 이는 코드의 가독성과 유지보수성을 저하시킬 수 있으며, 예상치 못한 부작용을 일으킬 수 있다.
* `caller` 프로퍼티는 주로 디버깅과 관련된 상황에서 유용하지만, 실제 프로덕션 코드에서는 다른 방법을 사용하는 것이 좋다.
