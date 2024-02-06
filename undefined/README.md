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

# 자료구조와 알고리즘

## 🚩목표

* 코딩하고, 배포하고, 최적화에 들어갈때 ! 에러도 없는데 무슨 이유에서인지 서비스가 느리다면 ? 이때는 바로 자료구조와 알고리즘을 공부할때 이다.
* <mark style="background-color:orange;">**\`여러 자료구조 중 '왜' 이 자료구조를 선택해서 사용했는가?\`**</mark>에 대한 명확한 근거를 제시할 수 있어야 한다.
* 평소 코딩할때 map()을 많이 사용했는데 그 이유는 습관이였던 것 같다. <mark style="color:orange;">어떤 동작에 어떤 자료구조가 왜 적합한가에 대해 생각하지 않고 코딩했기때문</mark>에 코드에 문제가 없다고 하더라도 서비스가 느려질 것이다. 근본적인 코드 최적화를 위해 자료구조와 알고리즘에 대해 알아보자.
* DB에서 데이터를 받아와서 리스트로 출력해 줄 경우, 개수를 지정하여 백엔드에 요청을 하더라도 프론트단에서 데이터를 가공한다면 느리게 보여지는 경우가 있다. 그 이유에 대해 알 수 있는 시간이 됐으면 좋겠다.

## ⚙️실행 환경

* Chrome에서 `F12`(MacOS: Cmd+Opt+I)를 눌러 개발자 도구를 열고  `Sources` 패널(panel)을 클릭한다.
* Sources 패널은 크게 세 개의 영역으로 구성된다.
  1. **파일 탐색 영역** – 페이지를 구성하는 데 쓰인 모든 리소스(HTML, JavaScript, CSS, 이미지 파일 등)를 트리 형태로 보여준다.
  2. **코드 에디터 영역** – 리소스 영역에서 선택한 파일의 소스 코드를 보여주며, 소스 코드를 편집할 수도 있다.
  3. **자바스크립트 디버깅 영역** – 디버깅에 관련된 기능을 제공한다.
* 왼쪽상단 `+ New snippet` 버튼을 클릭하여 테스트 코드를 작성하고, 결과를 `Console`에서 확인 할 수 있다.
* snippet은 코드를 저장하고 실행하기 쉬운 방법이다.

<figure><img src="../.gitbook/assets/Group 135.png" alt=""><figcaption><p>→ <code>F12</code> or <code>Cmd+Opt+I</code></p></figcaption></figure>

