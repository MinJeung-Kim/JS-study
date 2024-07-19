---
description: WebRTC (Web Real-Time Communication)는 웹 브라우저와 앱에서 실시간 통신을 가능하게 하는 기술입니다.
---

# WebRTC

* git : [https://github.com/MinJeung-Kim/WebRTC.git](https://github.com/MinJeung-Kim/WebRTC.git)
* stylde : [https://roxiedev.notion.site/WebRTC-Study-e12928524bae400cb804cdb1da47d739?pvs=4](https://roxiedev.notion.site/WebRTC-Study-e12928524bae400cb804cdb1da47d739?pvs=4)
* 참고 : [https://www.youtube.com/watch?v=qXkOPXFK3fg](https://www.youtube.com/watch?v=qXkOPXFK3fg)
* Client 프로그램에서 상대방과 직접 연결(P2P : peer to peer)되어 데이터를 주고받는 기술.

## 들어가며

2년차  FE 개발자로 경력을 쌓아 오면서 '나는 과연 어떤, 무슨 기술을 갖고 있는 개발자인가?' 라는 생각을 하며 이직을 생각하던 중, WebRTC를 주요 기술로 하는 어느 교육기업에 취업을 하게되었다.

내부 개발자가 족히 200여명이 넘는 기업에서 아이러니하게도 WebRTC기술 중 하나인, 1:1 통화 서비스를 하고있지만 유료로 사용중이라는 것이었다.

5년 전 JQuery로 구현되어 마이그레이션 되지 않은 프로젝트와 파일질라로 배포하는 곳에서 과연 나는 무엇을 할 수 있을까를 생각해보았다.

그렇다면, 유료서비스를 사용하는 WebRTC기술을 학습해서 프로젝트를 구현해보자.



### &#x20;WebRTC는 라이브러리인데 npm install로 설치하지 않고 사용이 가능하다?

* WebRTC library는 브라우저의자바스크립트 엔진에 포함된 라이브러리로, 자바스크립트로 접근이 가능하다.
* WebRTC로 화상/음성 통화 기능을 구현할 경우, JavaScript에서 사용할 수 있는 Web API의 일부인 `getUserMedia()` 메소드를 사용하여 사용자의 카메라와 마이크 같은 미디어 입력 장치 접근을 통해 미디어 스트림을 얻어 애플리케이션에서 사용할 수 있다.

<figure><img src="../.gitbook/assets/Group 237547 (1).png" alt=""><figcaption></figcaption></figure>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple WebRTC Video Call</title>
</head>
<body>
    <video id="localVideo" autoplay playsinline muted></video>
    <video id="remoteVideo" autoplay playsinline></video>
    <button id="startButton">Start</button>
    <button id="callButton">Call</button>
    <button id="hangupButton">Hang Up</button>

    <script src="webrtc.js"></script>
</body>
</html>

```

```javascript
let localStream;
let remoteStream;
let localPeerConnection;
let remotePeerConnection;

document.getElementById('startButton').addEventListener('click', startMedia);
document.getElementById('callButton').addEventListener('click', startCall);
document.getElementById('hangupButton').addEventListener('click', hangUp);

async function startMedia() {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    document.getElementById('localVideo').srcObject = localStream;
}

function startCall() {
    const videoTracks = localStream.getVideoTracks();
    const audioTracks = localStream.getAudioTracks();
    if (videoTracks.length > 0) {
        console.log(`Using video device: ${videoTracks[0].label}`);
    }
    if (audioTracks.length > 0) {
        console.log(`Using audio device: ${audioTracks[0].label}`);
    }

    const configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
    localPeerConnection = new RTCPeerConnection(configuration);
    localPeerConnection.addEventListener('icecandidate', handleIceCandidateLocal);
    localPeerConnection.addEventListener('track', gotRemoteStream);

    remotePeerConnection = new RTCPeerConnection(configuration);
    remotePeerConnection.addEventListener('icecandidate', handleIceCandidateRemote);
    remotePeerConnection.addEventListener('track', gotLocalStream);

    localStream.getTracks().forEach(track => localPeerConnection.addTrack(track, localStream));

    localPeerConnection.createOffer().then(offer => {
        localPeerConnection.setLocalDescription(offer);
        remotePeerConnection.setRemoteDescription(offer);
        remotePeerConnection.createAnswer().then(answer => {
            remotePeerConnection.setLocalDescription(answer);
            localPeerConnection.setRemoteDescription(answer);
        });
    });
}

function handleIceCandidateLocal(event) {
    if (event.candidate) {
        remotePeerConnection.addIceCandidate(event.candidate);
    }
}

function handleIceCandidateRemote(event) {
    if (event.candidate) {
        localPeerConnection.addIceCandidate(event.candidate);
    }
}

function gotRemoteStream(event) {
    if (!remoteStream) {
        remoteStream = event.streams[0];
        document.getElementById('remoteVideo').srcObject = remoteStream;
    }
}

function gotLocalStream(event) {
    if (!localStream) {
        localStream = event.streams[0];
        document.getElementById('localVideo').srcObject = localStream;
    }
}

function hangUp() {
    localPeerConnection.close();
    remotePeerConnection.close();
    localPeerConnection = null;
    remotePeerConnection = null;
    console.log('Call ended.');
}

```
