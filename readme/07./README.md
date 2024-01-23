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

# 07. 클래스

* 자바스크립트는 프로토타입 기반 언어라서 '상속'이라는 개념이 존재하지 않는다.
* 클래스와 비슷하게 동작하게끔 흉내 내는 여러 기법들이 탄생했으며, 이러한 니즈에 따라 ES6에 클래스 문법이 추가 됐다.

## 클래스와 인스턴스의 개념

{% hint style="info" %}
영한사전에서 **class**는 **계급**, **집단**, **집합** 등으로 번역된다.
{% endhint %}

<figure><img src="../../.gitbook/assets/2024-01-23 14 14 32 (3).png" alt=""><figcaption><p>→ 클래스 간의 상하관계</p></figcaption></figure>

귤, 레몬, 자몽등은 음식에 속해 먹을 수 있고, 과일에 속해 나무에서 열리며, 귤류에 속해 말랑한 껍질 속에 달고 신맛이 나는 과육이 들어있는 구체적인 개체들이다.

{% hint style="info" %}
영한사전에서 **Instance**는 **'사례'**라고 번역한다.

풀어쓰면 _<mark style="color:orange;">'어떤 조건에 부합하는 구체적인 예시'</mark>_가 된다. 여기서 조건이 곧 클래스를 의미한다고 보면, 어떤 클래스에 속한 개체는 그 클래스의 조건을 모두 만족하므로 그 클래스의 구체적인 예시(instance)가 된다.
{% endhint %}

어떤 클래스의 속성을 지니는 실존하는 개체를 일컬어 인스턴스(instance)라고 한다.

