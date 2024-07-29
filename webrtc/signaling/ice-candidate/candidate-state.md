---
description: Candidate의 상태에 대해 알아보자.
---

# Candidate State

프로젝트를 실제로 구현하다 보면 Candidate의 상태 중 `New`와 `Completed`만 보게 되는데 찾아보니 더 다양한 상태가 있었다.

<table data-full-width="true"><thead><tr><th width="160">state</th><th width="716">desc</th><th data-hidden></th></tr></thead><tbody><tr><td><p>New</p><p>(새로운 상태)</p></td><td><ul><li>새로운 ICE Candidate가 생성되었을 때의 초기 상태.</li><li>아직 연결 시도가 이루어지지 않은 상태.</li></ul></td><td></td></tr><tr><td><p>Checking </p><p>(확인 중 상태)</p></td><td><ul><li>Candidate를 사용하여 연결을 시도하고 있는 상태.</li><li>STUN/TURN 서버를 통해 연결 가능성을 확인하는 과정이 포함 된다.</li></ul></td><td></td></tr><tr><td><p>Succeeded</p><p>(성공 상태)</p></td><td><ul><li>해당 Candidate를 통한 연결이 성공적으로 이루어진 상태.</li><li>이 상태의 Candidate가 선택되어 실제 통신에 사용된다.</li></ul></td><td></td></tr><tr><td><p>Failed </p><p>(실패 상태)</p></td><td><ul><li>Candidate를 통한 연결 시도가 실패한 상태.</li><li>네트워크 문제, 방화벽 설정 등 다양한 이유로 실패할 수 있다.</li></ul></td><td></td></tr><tr><td><p>Frozen </p><p>(동결 상태)</p></td><td><ul><li>다른 Candidate의 확인이 진행 중일 때, 대기 상태에 있는 Candidate의 상태.</li><li>네트워크 리소스를 효율적으로 사용하기 위해 일시적으로 확인을 미루는 상태.</li></ul></td><td></td></tr><tr><td><p>Waiting </p><p>(대기 상태)</p></td><td><ul><li>Frozen 상태에서 전환된 후, 곧 확인될 예정인 Candidate의 상태.</li><li>우선순위에 따라 Checking 상태로 전환되기를 기다린다.</li></ul></td><td></td></tr><tr><td><p>In Progress</p><p>(진행 중 상태)</p></td><td><ul><li>로컬에서 생성된 Candidate가 원격 피어로 전송 중인 상태.</li></ul></td><td></td></tr><tr><td><p>Completed</p><p>(완료 상태)</p></td><td><ul><li>모든 Candidate의 확인이 완료된 상태.</li><li>이 상태에서는 더 이상 새로운 Candidate를 확인하지 않는다.</li></ul></td><td></td></tr></tbody></table>

<figure><img src="../../../.gitbook/assets/Group 237566.png" alt=""><figcaption></figcaption></figure>

PeerConnection을 구현하기 위해서는 순서가 중요하다. 먼저, RTCPeerConnection 객체를 생성한 직후 `addTrack`을 호출하여 해당 미디어에 대한 정보를 수집한다. 이 과정에서 RTCPeerConnection은 사용 가능한 네트워크 경로와 프로토콜을 파악하게 된다.

```javascript
const peer = useRef(null); 
const { getMedia } = useGetMedia(); // get peer stream hook

const stream = await getMedia(); 
peer.current = new RTCPeerConnection(configuration); 

stream.getTracks().forEach((track) => {
   if (peer.current) peer.current.addTrack(track, stream);
});
```

트랙이 추가된 이후 ICE후보 생성이 시작된다. 이 과정에서 `onicecandidate` 이벤트가 발생하며, 각 ICE 후보가 생성될 때마다 이 이벤트가 트리거된다.

`addTrack`을 호출하지 않을경우, peer.current는 null값을 가지게 된다.

```javascript
peer.current.onicecandidate = (e) => {
  if (e.candidate) {
    console.log("setupPeerListeners - onicecandidate : ", e.candidate);
    socketClient.onEmit("candidate", { candidate: e.candidate });
  }
};
```

다음은 생성된 ICE Candidate에 대해 분석해 본다.

<figure><img src="../../../.gitbook/assets/Group 237568.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../../../.gitbook/assets/Group 237567.png" alt=""><figcaption></figcaption></figure>

> `"sdpMid": "3"`&#x20;
>
> * 이 후보와 관련된 미디어 스트림의 식별자.&#x20;
> * "3"은 SDP(Session Description Protocol)에서 이 후보가 네 번째 미디어 섹션에 해당함을 나타낸다.&#x20;
>
> `"sdpMLineIndex":`&#x20;
>
> * 3 SDP의 미디어 라인 인덱. 여기서도 3은 네 번째 미디어 섹션을 가리킨다.&#x20;
>
> `"usernameFragment":`&#x20;
>
> * "h8Lg" ICE 프로세스에서 사용되는 사용자 이름 조각.&#x20;
> * 이는 "ufrag" 값과 일치하며, 연결의 특정 세션을 식별하는 데 사용된다.



다음으로, 원격 피어의 미디어 스트림(비디오/오디오)을 받아 처리하는 `ontrack` 핸들러를 설정하여 원격 피어로부터 미디어 스트림을 받을 준비를 한다.

`setRemote` 함수를 통해 받은 스트림을 애플리케이션의 상태에 저장하여, UI에서 표시할 수 있다.

```javascript
peer.current.ontrack = (ev) => {
  setRemote((prev) => ({ ...prev, stream: ev.streams[0] }));
};
```

<figure><img src="../../../.gitbook/assets/Group 237570.png" alt=""><figcaption></figcaption></figure>
