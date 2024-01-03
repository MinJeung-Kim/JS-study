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

# 4) Blocking & Non-blocking

{% hint style="info" %}
<mark style="background-color:red;">동기/비동기</mark>는 요청한 작업에 대해 완료 여부를 신경 써서 **작업을 순차적으로 수행할지 아닌지에 대한 관점**이고,<mark style="background-color:red;">블로킹/논블로킹</mark>은 현재 **작업이 block(차단, 대기) 되느냐 아니냐에 따라 다른 작업을 수행할 수 있는지에 대한 관점**이다.

* **블로킹**은 작업이 다른 작업을 **차단(block)** 하는 방식을 가리키는 반면,&#x20;
* **동기적 처리**는 작업이 어떤 **순서(sequence)**에 따라 수행되는 방식을 의미.
* **논블로킹**은 작업 진행 중에 **다른 작업의 실행을 차단하지 않는 것에 중점**을 두고,
* **비동기적 처리**는 **작업 완료 후에 취할 특정한 조치에 중점**을 둠.
{% endhint %}

### 블로킹 (Blocking)

* 특정 작업(예: 데이터 읽기/쓰기, 네트워크 요청 등)이 완료될 때까지 프로그램의 실행이 멈추는 것.
* 요청한 작업이 완료되기 전까지는 다른 어떤 작업도 수행할 수 없다.
* <mark style="background-color:orange;">단순하고 예측 가능한 시나리오에 적합.</mark>
* **특징**
  1. 작업의 **순서가 명확**하고 예측 가능.
  2. CPU나 메모리 등의 **리소스 낭비**.
  3. 네트워크 요청과 같은 **비동기적인 작업에서 대기 시간이 길어**질 수 있음.

### 논블로킹 (Non-blocking)

* 요청한 작업이 바로 완료되지 않더라도 프로그램의 실행이 계속되는 방식.
* <mark style="background-color:orange;">높은 처리량과 효율적인 리소스 활용이 필요한 복잡한 애플리케이션에 적합.</mark>
* **특징**
  1. **효율적인 리소스 활용**.
  2. 동시에 여러 작업을 관리해야 하므로 **프로그램의 복잡성 증가**.
  3. 이벤트 기반 프로그래밍이나 콜백(callback)을 사용하여 **비동기 작업 처리**.

### 블로킹과 논블로킹의 차이점

<table><thead><tr><th width="168"></th><th width="230">대기 방식</th><th width="147">리소스 활용</th><th>프로그래밍 복잡성</th></tr></thead><tbody><tr><td><strong>블로킹(blocking)</strong></td><td>작업 완료까지 대기</td><td>비효율적</td><td>간단</td></tr><tr><td><p><strong>논블로킹</strong></p><p><strong>(non-blocking)</strong></p></td><td>대기 없이 다른 작업 수행</td><td>효율적</td><td>복잡</td></tr></tbody></table>

