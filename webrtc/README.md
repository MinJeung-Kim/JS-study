---
description: WebRTC (Web Real-Time Communication)는 웹 브라우저와 앱에서 실시간 통신을 가능하게 하는 기술입니다.
---

# WebRTC

* git : [https://github.com/MinJeung-Kim/WebRTC.git](https://github.com/MinJeung-Kim/WebRTC.git)
* 참고 : [https://www.youtube.com/watch?v=qXkOPXFK3fg](https://www.youtube.com/watch?v=qXkOPXFK3fg)
* Client 프로그램에서 상대방과 직접 연결(P2P : peer to peer)되어 데이터를 주고받는 기술.
* 브라우저의 Javascript Engine에 포함된 라이브러리.

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
