---
description: ICE (Interactive Connectivity Establishment) 프로세스
---

# ICE Candidate

* ICE는 두 피어 간의 가장 효과적인 네트워크 경로를 찾아내어 피어 투 피어(P2P) 연결을 설정하는 방법을 제공한다. 이 과정은 신뢰성 있는 미디어 스트리밍을 가능하게 하기 위해 필수적이다.

### 3가지 유형의 ICE 후보(Candidate)

> 일반적으로는 **`서버 반사 후보`**를 사용한다.

* **`호스트 후보 (Host Candidate)`**: 피어의 로컬 네트워크 인터페이스에서 직접 수집된 정보.
* **`서버 반사 후보 (Server Reflexive Candidate)`**: STUN 서버를 통해 얻은 피어의 공개 주소.
* **`중계 후보 (Relayed Candidate)`**: TURN 서버를 통해 얻은 주소로, 모든 데이터 트래픽이 TURN 서버를 통해 중계 된다.



### **호스트 후보 (Host Candidate)**

두 사용자가 한 집이나 오피스 등, 같은 로컬 네트워크에 속한 경우, 각 기기의 네트워크 내부용 주소(사설IP)와 포트 번호를 교환 한다.

<figure><img src="../../.gitbook/assets/Group 237557 (1) (1).png" alt=""><figcaption></figcaption></figure>

### **서버 반사 후보 (Server Reflexive Candidate)**

일반적인 사용자의 클라이언트 기기는 `NAT`을 사용하여 네트워크에 연결되어 있다. 특정 기기와 연락을 주고 받으려면 해당 기기가 연결된 라우터의 공인 IP와 해당 기기에 할당된 포트 번호를 알아야 하는데, 이 정보를 얻기위해 사용되는 것이 `STUN`이다.

<figure><img src="../../.gitbook/assets/Group 237559.png" alt=""><figcaption></figcaption></figure>

### NAT(Network Address Translation)

* 여러 장치가 하나의 공인 IP 주소를 통해 인터넷에 접속하는 것.

<figure><img src="../../.gitbook/assets/Group 237561.png" alt=""><figcaption></figcaption></figure>

### STUN(Session Traversal Utilities for NAT Server)

WebRTC로 구현되는 서비스에는 특정 STUN 서버가 지정되어있다. 클라이언트는 지정된 STUN 서버에 요청을 보내고, STUN 서버는 클라이언트에게 공인 IP 주소와 포트 번호를 알려준다.

STUN 서버는 상대방에게 알려줄 나의 주소를 알아내기 위해 사용한다.

STUN은 Google, Twilio, Xirsys, AWS, Coturn등 많은 서비스 기업들에서 무료 또는 저렴한 비용으로 제공한다.



### **중계 후보 (Relayed Candidate)**

네트워크 환경이 복잡하거나, 방화벽 등에 의해 P2P통신이 제한되어 STUN 서버를 이용하지 못할 경우, 데이터를 중계하여 NAT(Network Address Translation) 및 방화벽을 우회할 수 있게 해준다.

`TURN(Traversal Using Relays around NAT)` 서버는 추가적인 경로를 거치기 때문에 지연 시간이 증가하고 비용이 발생하게 되므로 마지막 옵션으로만 사용된다.

TURN 서버는 외부의 서비스들을 이용할 수도 있고, 비용 절감과 성능 개선을 위해 직접 구현하여 개발할 수도 있다.

<figure><img src="../../.gitbook/assets/Group 237563 (1).png" alt=""><figcaption></figcaption></figure>
