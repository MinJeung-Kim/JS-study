# 기능 구현

* git : [https://github.com/MinJeung-Kim/WebRTC.git](https://github.com/MinJeung-Kim/WebRTC.git)
* UI/UX reference : [https://www.videosdk.live/prebuilt/demo](https://www.videosdk.live/prebuilt/demo)

### 1. 로그인/로그아웃/회원가입



### 2. 화상 or 음성 통화 요청 socket 연결

* web browser에서 제공하는 [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) API를 사용하여 video와 audio를 가져온다.

```javascript
const constraints = {
  audio: true,
  video: { width: 1280, height: 720 },
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then((mediaStream) => {
    const video = document.querySelector("video");
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  })
  .catch((err) => {
    // always check for errors at the end.
    console.error(`${err.name}: ${err.message}`);
  });
```



### 3. Peer 연결
