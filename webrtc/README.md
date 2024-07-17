---
description: WebRTC (Web Real-Time Communication)는 웹 브라우저와 앱에서 실시간 통신을 가능하게 하는 기술입니다.
---

# WebRTC

* git : [https://github.com/MinJeung-Kim/WebRTC.git](https://github.com/MinJeung-Kim/WebRTC.git)
* Client 프로그램에서 상대방과 직접 연결(P2P : peer to peer)되어 데이터를 주고받는 기술.
* 브라우저의 Javascript Engine에 포함된 라이브러리.

### WebRTC 동작 방식

<figure><img src="../.gitbook/assets/Group 237545.png" alt=""><figcaption></figcaption></figure>

peer A의 `SDP`를 peer B에게 전송하기 위해서는 `Signaling Server`가 필요하다. 시그널링에는 WebRTC 기반의 실시간 통신에서 피어 간의 효율적이고 안정적인 연결을 설정하기 위해 필수적인 **SDP 교환 과정**과  **ICE 후보자 찾는** 2가지 과정이 있다.

### 1. SDP 교환 시작

* **Offer 생성**: 초기 통신을 시작하려는 peer가 `RTCPeerConnection` 객체를 생성하고, 미디어 스트림을 추가한 후 `SDP offer`를 생성한다.&#x20;
* **Offer 전송**: 생성된 offer는 시그널링 서버를 통해 상대 peer에게 전송된다.

### 2. ICE 후보자 수집 및 교환

* **ICE 후보자 수집**: 각 peer는 로컬 네트워크 환경에 대한 정보를 수집하며, 이는 호스트 주소, STUN을 통한 반사 주소, TURN을 통한 중계 주소를 포함할 수 있다.
* **후보자 정보 교환**: peer는 SDP offer 또는 answer와 함께 또는 별도로 ICE 후보자 정보를 수집하고 교환을 시작 한다. 이 과정은 SDP offer/answer 전송과 병행하여 발생할 수 있다.

### 3. Answer 생성 및 전송

* **Answer 생성**: 수신 peer는 받은 offer를 분석하고, 이에 대응하는 answer를 생성한다.&#x20;
* **Answer 전송**: 생성된 answer는 시그널링 서버를 통해 제안한 peer에게 전송된다.

### 4. 연결성 검사

* **연결성 검사**: peer들은 교환된 ICE 후보자 정보를 바탕으로 서로간의 연결성을 검사한다. 이는 실제 데이터 경로를 확립하기 위한 네트워크 연결 시도다.



