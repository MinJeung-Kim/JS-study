---
description: 추상화(Abstraction)
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# 2-2) Abstraction

* 외부에서 클래스를 봤을때, 사용할 수 있는 함수가 복잡한경우.

### 접근 제어자(정보은닉)를 통한 추상화

<div align="left">

<figure><img src="../../../.gitbook/assets/화면 캡처 2023-12-21 175948.png" alt="" width="563"><figcaption><p>→ 외부에서 접근하지 않아야할 함수 까지 노출.</p></figcaption></figure>

</div>

<div align="left">

<figure><img src="../../../.gitbook/assets/스크린샷 2023-12-21 180551.png" alt="" width="563"><figcaption><p>→ private를 지정하여 필요한 함수만 노출.</p></figcaption></figure>

</div>

### Interface를 이용한 추상화

* 인테페이스에서 규약된 함수들만 접근 가능.
* **`implements`** 키워드 사용.

<pre class="language-typescript"><code class="lang-typescript">{
<strong>  // interface 정의
</strong>  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  } 

  // 인터페이스(CoffeeMaker)를 구현하는 CoffeeMachine. 
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; 
    private coffeeBeans: number = 0;  

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    ...

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  } 
  
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);  
<strong>  maker.makeCoffee(2);
</strong><strong>  
</strong>  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  maker2.fillCoffeeBeans(32);  // ⚠️ fillCoffeeBeans함수 사용 불가.
  maker2.makeCoffee(2);
}

</code></pre>
