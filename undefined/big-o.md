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

# Big O

## 🚩목표

* Big O 표기법의 필요성과 중요도에 대해 이해한다.
* "시간 복잡성"과 "공간 복잡성"을 정의하고 빅오 표기법을 사용하여 여러 알고리즘을 평가한다.
* 로그가 무엇인가에 대해 안다.

## What's the Big O ?

* 빅오 표기법은 <mark style="background-color:orange;">**알고리즘의 효율성을 분석**</mark>하기 위해 컴퓨터 공학자들이 쓰는 가장 기본적인 도구들 중 하나다.
* 빅오 표기법이란 <mark style="color:orange;">**코드의 복잡도를 대수학 개념을 이용해 표현**</mark>하는 것이다.
* 입력의 크기와 실행시간의 관계를 말한다.
* 다양한 코드를 서로 비교하고 성능을 평가하는 방법.
* 코드를 분류하거나 비교할 수 있는 목적을 가진 시스템.
* 수천개의 데이터가 있는 큰 데이터셋을 다루는 기업에서 A알고리즘 보다 B알고리즘이 실행하는데 한시간이 더 빠르다면?&#x20;
* 비교할때는 항상 장단점이 있어서 무조건 꼭 하나가 최고는 아니라는 점을 유의한다.
* 코드를 디버깅할때 성능을 느리게 만드는 코드를 찾을 수 있다.

### 코드 비교하기

* 1부터 N값의 사이의 모든 숫자를 더하는 기능을 구현하시오.

<figure><img src="../.gitbook/assets/2024-02-06 16 26 59.png" alt=""><figcaption><p>→ 2가지 구현 방법 비교하기.</p></figcaption></figure>

### **코드가 실행하는데 걸리는 시간 비교**

* `performance.now()`를 사용해서 실행 시간을 비교한다면, 실행 환경에 따라 매번 시간이 변경되어 신뢰성이 떨어진다.
* 그렇기때문에 컴퓨터가 처리해야하는 연산의 개수를 비교해보면, 반복문을 사용하지 않은 코드가 더 빠르다는 것을 알 수 있다.
* [https://rithmschool.github.io/function-timer-demo/](https://rithmschool.github.io/function-timer-demo/) 에서 시각적으로 확인해 볼 수 있다.

<figure><img src="../.gitbook/assets/2024-02-06 16 54 26.png" alt=""><figcaption><p>→ 반복문 유무에 따라서 연산의 갯수가 n의 개수 만큼 늘어나며, 반복문에서 사용되는 연산 또한 추가된다.</p></figcaption></figure>

### 빅오 표현식

```javascript
// n의 값이 커질수록 실행 시간이 늘어남.
f(n) could be linear (f(n) = n)

// n의 값이 커질수록 실행 시간이 n의 제곱으로 늘어남.
f(n) could be quadratic (f(n) = n²)

// n의 값에 영향을 받지 않은 상수.
f(n) could be constant(f(n) = 1)

// 그 외
f(n) could be something entirely different!
```

<figure><img src="../.gitbook/assets/Group 146 (1).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/Group 147 (1).png" alt=""><figcaption><p>→ 빅오 표현식</p></figcaption></figure>



## 빅오 표현식 단순화 하기

* 대략적으로 정확한 큰 그림을 보는것이 중요하기 때문에 상수는 중요하지 않다.
* 상수를 생략하고 단순화한 표현식을 보면 O(n)보다 O(1)이 빠르다는 것을 쉽게 확인 할 수 있다.

<pre class="language-javascript"><code class="lang-javascript">• O(2n) => O(n)

// 연산 개수가 어떤 상황에서든 500개가 있다는 뜻.
<strong>• O(500) => O(1)
</strong>
• O(13n²) => O(n²)
</code></pre>

* 작은 숫자들에도 큰 의미가 없으므로 무시할 수 있다.

```javascript
O(n + 10) => O(n)3 ddfff
```
