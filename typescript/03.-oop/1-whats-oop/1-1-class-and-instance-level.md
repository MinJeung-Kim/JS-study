---
description: Class Level 과 Instance Level의 차이
---

# 1-1) Class & Instance Level

### Static

```javascript
class ExampleClass { 
    static staticProperty = 'I am a static property';
    static staticMethod() {
        return 'I am a static method';
    }
}
// 정적 속성과 메소드에 접근
console.log(ExampleClass.staticProperty); //'I am a static property' 
console.log(ExampleClass.staticMethod()); //'I am a static method'

// 인스턴스에서 정적 속성과 메소드에 접근 시도
const instance = new ExampleClass(); 
console.log(instance.staticProperty); // undefined 
console.log(instance.staticMethod()); // ⚠️ error
```

* 인스턴스가 필요하지 않은 유틸리티 함수나 상수에 유용하게 사용.&#x20;
* 클래스와 관련되어 있지만, 그 자체로 독립적인 기능이나 데이터를 제공하는 경우에 적합.

<figure><img src="../../../.gitbook/assets/2023-12-20 16 13 34.png" alt=""><figcaption><p>상수변수(BEANS_GRAMM_PER_SHOT)의 중복 데이터  생성 방지.</p></figcaption></figure>



