---
description: WebRTC (Web Real-Time Communication)는 웹 브라우저와 앱에서 실시간 통신을 가능하게 하는 기술입니다.
---

# WebRTC

* git : [https://github.com/MinJeung-Kim/WebRTC.git](https://github.com/MinJeung-Kim/WebRTC.git)
* study : [https://roxiedev.notion.site/WebRTC-Study-e12928524bae400cb804cdb1da47d739?pvs=4](https://roxiedev.notion.site/WebRTC-Study-e12928524bae400cb804cdb1da47d739?pvs=4)
* 참고 : [https://www.youtube.com/watch?v=qXkOPXFK3fg](https://www.youtube.com/watch?v=qXkOPXFK3fg)
* Client 프로그램에서 상대방과 직접 연결(P2P : peer to peer)되어 데이터를 주고받는 기술.

## 들어가며

2년차  FE 개발자로 경력을 쌓아 오면서 '나는 과연 어떤, 무슨 기술을 갖고 있는 개발자인가?' 라는 생각을 하며 이직을 고민하던 중, WebRTC를 주요 기술로 하는 어느 교육기업에 취업을 하게되었다.

내부 개발자가 족히 200여명이 넘는 기업에서 아이러니하게도 WebRTC기술을 구현할 줄 아는 개발자가 없어서 유료로 사용중이라는 것이었다.

5년 전 JQuery로 구현되어 마이그레이션 되지 않은 프로젝트와 파일질라로 배포하는 곳에서 내가 할수있는 일이 무엇인지 생각해보았다.

그렇다면, 유료서비스를 사용하는 WebRTC기술을 학습해서 프로젝트를 구현해보자.



### &#x20;WebRTC는 라이브러리인데 npm install로 설치하지 않고 사용이 가능하다?

* `WebRTC library`는 브라우저의자바스크립트 엔진에 포함된 라이브러리로, 자바스크립트로 접근이 가능하다.
* WebRTC로 화상/음성 통화 기능을 구현할 경우, JavaScript에서 사용할 수 있는 Web API의 일부인 `getUserMedia()` 메소드를 사용하여 사용자의 카메라와 마이크 같은 미디어 입력 장치 접근을 통해 미디어 스트림을 얻어 애플리케이션에서 사용할 수 있다.
* 자세한 내용은 [Mdn web docs](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)에서 확인 할 수 있다.

```javascript
// 비디오와 오디오 모두 사용하도록 설정
navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then(function(stream) {
    // 스트림 처리
    const video = document.querySelector('video');
    video.srcObject = stream;
  })
  .catch(function(error) {
    console.error('미디어 접근 권한이 거부되었거나 장치를 찾을 수 없습니다.', error);
  });
```

<figure><img src="../.gitbook/assets/Group 237547 (1).png" alt=""><figcaption></figcaption></figure>

### Peerjs 라이브러리 사용하지 않고 peer connection 코드 직접 작성해보기!

프로토타입을 먼저 확인 하고 싶어 하시는 부장님을 위해 아직  WebRTC가 무엇인지 확실히 알지 못하지만 google검색과 ChatGPT의 도움을 받아 여차여차 2주만에 구현해서 보여드렸다.

이후, 기획에 따라 커스텀하려고 하니, 되던것이 안되고 왜 되는것인지 알지 못하는 답답함에 인프런을 통해 스터디를 개설하며 차근차근 개념을 학습하는 과정을 기록해 보기로 했다.

스터디를 하며 WebRTC의 핵심은 peer connection과 signaling 과정을 확실하게 이해하는 것이라는 생각이 들었다.

* 먼저, `RTCPeerConnection` 인터페이스를 생성하여 브라우저 간의 직접적인 데이터 스트리밍을 설정한다.
* &#x20;RTCPeerConnection은 연결, 통신 및 보안 관련 모든 세부 사항을 관리하는 역할을 한다.

```javascript
// RTCPeerConnection 설정
const configuration = {
  iceServers: [
    { urls: "stun:stun.example.com" },
    { urls: "turn:turn.example.com", username: "user", credential: "pass" }
  ]
};

// PeerConnection 객체 생성
const peerConnection = new RTCPeerConnection(configuration);

// 로컬 미디어 스트림 추가
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    stream.getTracks().forEach(track => {
      peerConnection.addTrack(track, stream);
    });
  });

// ICE 후보 이벤트 핸들링
peerConnection.onicecandidate = event => {
  if (event.candidate) {
    console.log('New ICE candidate:', event.candidate);
    // 이후 후보를 상대 피어에게 전송하는 로직 필요
    // signaling : Offer(오퍼)와 Answer(앤서) SDP 메시지와 함께 진행
  }
};

// 원격 스트림 수신 처리
peerConnection.ontrack = event => {
  const remoteVideo = document.getElementById('remoteVideo');
  if (remoteVideo.srcObject !== event.streams[0]) {
    remoteVideo.srcObject = event.streams[0];
    console.log('Received new stream');
  }
};

// 연결 상태 감시
peerConnection.onconnectionstatechange = () => {
  console.log('Connection state change:', peerConnection.connectionState);
};
```

* WebSocket을 사용하는 시그널링 서버를 기반으로 하는 ICE 후보 전송 로직.

```javascript
peerConnection.onicecandidate = event => {
  if (event.candidate) {
    console.log('New ICE candidate:', event.candidate);
    // WebSocket을 사용하여 시그널링 서버에 ICE 후보를 전송
    signalingChannel.send(JSON.stringify({
      type: 'new-ice-candidate',
      candidate: event.candidate,
      to: remotePeerId // 상대방의 식별 ID
    }));
  }
};
```
