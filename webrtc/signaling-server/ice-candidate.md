---
description: ICE (Interactive Connectivity Establishment) 프로세스
---

# ICE Candidate

* ICE는 두 피어 간의 가장 효과적인 네트워크 경로를 찾아내어 피어 투 피어(P2P) 연결을 설정하는 방법을 제공한다. 이 과정은 신뢰성 있는 미디어 스트리밍을 가능하게 하기 위해 필수적이다.

### ICE 후보(Candidate)에는 3가지 유형이 있다.

> 일반적으로는 **`서버 반사 후보`**를 사용한다.

* **`호스트 후보 (Host Candidate)`**: 피어의 로컬 네트워크 인터페이스에서 직접 수집된 정보.
* **`서버 반사 후보 (Server Reflexive Candidate)`**: STUN 서버를 통해 얻은 피어의 공개 주소.
* **`중계 후보 (Relayed Candidate)`**: TURN 서버를 통해 얻은 주소로, 모든 데이터 트래픽이 TURN 서버를 통해 중계 된다.



### 동작 방식

