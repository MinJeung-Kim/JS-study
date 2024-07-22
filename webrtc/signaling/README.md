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
   * SDP메세지는오퍼(Offer)와 응답(Answer) 메시지로 구분된다.
2. **SDP 메시지 교환**:
   * 생성된 SDP 메시지는 WebSocket과 같은 신호 교환 채널을 통해 서로 교환된다.
   * 이 과정에서 ICE 후보 정보(IP와 포트)를 포함하여 네트워크 경로를 설정한다.

<figure><img src="../../.gitbook/assets/Group 237555 (2).png" alt=""><figcaption></figcaption></figure>

`WebSocket`서버는 통화요청 및 Peer간 접속을 위한 정보를 전달하는 역할을 하며, `STURN`서버는 ICE 규격을 이용하여 상대방이 접속할 수 있게 지원한다. `TURN`서버는 Peer간 데이터 통신이 불가한 경우 데이터를 중계해 준다.

## Signaling 동작 순서

* 발신측(peer A)

먼저,  자신의 접근 정보를 STUN서버에 요청한다.

STUN서버로 부터 응답받은 정보(Offer)를 취합하여 통화 요청을 하기 위한 정보를 WebSocket서버를 통해 수신측에 전달한다.

* 수신측(peer B)

통화 요청을 받은 수신측은 발신측과 마찬가지로 STUN서버에 자신의 접근 정보(Answer)를 취합하여 WebSocket서버를 통해 통화요청을 수락한단 정보를 발신자에게 전달한다.

> 발신측과 수신측 모두 통화에 필요한 정보들이 공유되어 SRTP 프로토콜을 이용한 통화가 이루어진다.
