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

일반적으로는 다른 공인 IP주소를 사용하는 네트워크에 속한 사람들간에 화상통화가 이루어진다.

일반적인 사용자의 클라이언트 기기는 여러 장치가 하나의 공인 IP 주소를 통해 인터넷에 접속하게 하는 NAT을 사용한다.

특정 기기와 연락을 주고받으려면 해당 기기가 연결된 라우터의 공인 IP와 해당 기기에 할당된 포트 번호를 알아야하므로, STUN Server를&#x20;

<figure><img src="../../.gitbook/assets/Group 237559.png" alt=""><figcaption></figcaption></figure>
