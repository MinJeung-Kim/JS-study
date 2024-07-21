---
description: 무엇으로 어떻게 대화할지 합의하는 과정
---

# Signaling

<figure><img src="../../.gitbook/assets/Group 237551 (1).png" alt=""><figcaption></figcaption></figure>

Peer to Peer 데이터 전송을 위한 Data channel을 설정하기 위해서는 먼저 신호 교환(signaling)을 통해 피어 간의 연결을 설정해야 한다.  WebSocket과 같은  신호 교환 프로토콜을 사용하여 `SDP(Session Description Protocol)` 메시지를 사용한 음성, 영상, 코덱, IP, 포트 등의 정보를 교환할 수 있다.

WebSocket은 TCP 기반의 프로토콜로, 신뢰성 있는 양방향 통신을 제공하므로, 음성, 영상, 코덱, IP, 포트 등의 정보를 교환하는 데 사용된다.

### SDP 메시지와 신호 교환 과정

1. **SDP 메시지 생성**:
   * 피어 간의 연결을 설정하기 위해 각 피어는 자신의 미디어 설정(코덱, IP, 포트 등)을 포함하는 SDP 메시지를 생성한다.
   * 오퍼(Offer)와 응답(Answer) 메시지로 구분된다.
2. **SDP 메시지 교환**:
   * 생성된 SDP 메시지는 WebSocket과 같은 신호 교환 채널을 통해 서로 교환된다.
   * 이 과정에서 ICE 후보 정보(IP와 포트)를 포함하여 네트워크 경로를 설정한다.

<figure><img src="../../.gitbook/assets/Group 237555 (2).png" alt=""><figcaption></figcaption></figure>

## Signaling 동작 순서

### 1. ICE 후보자 수집 및 교환

* **Offer 생성**: 초기 통신을 시작하려는 peer가 `RTCPeerConnection` 객체를 생성하고, 미디어 스트림을 추가한 후 `SDP offer`를 생성한다.&#x20;
* **Offer 전송**: 생성된 offer는 시그널링 서버를 통해 상대 peer에게 전송된다.

### 2. SDP 교환 시작

* **ICE 후보자 수집**: 각 peer는 로컬 네트워크 환경에 대한 정보를 수집하며, 이는 호스트 주소, STUN을 통한 반사 주소, TURN을 통한 중계 주소를 포함할 수 있다.
* **후보자 정보 교환**: peer는 SDP offer 또는 answer와 함께 또는 별도로 ICE 후보자 정보를 수집하고 교환을 시작 한다. 이 과정은 SDP offer/answer 전송과 병행하여 발생할 수 있다.

### 3. Answer 생성 및 전송

* **Answer 생성**: 수신 peer는 받은 offer를 분석하고, 이에 대응하는 answer를 생성한다.&#x20;
* **Answer 전송**: 생성된 answer는 시그널링 서버를 통해 제안한 peer에게 전송된다.

### 4. 연결성 검사

**연결성 검사**: peer들은 교환된 ICE 후보자 정보를 바탕으로 서로간의 연결성을 검사한다. 이는 실제 데이터 경로를 확립하기 위한 네트워크 연결 시도다.
