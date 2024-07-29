---
description: SDP는 피어 간의 미디어 세션 설정에 대한 정보를 담고 있는 프로토콜.
---

# SDP(Session Description Protocol)

### SDP의 구조

* 세션 정보와 네트워크 관련 정보, 미디어의 유형과 스트림의 속성 등의 형식.

```json
 1. v=: Version
 2. o=: Origin
 3. s=: Session Name
 4. i=: Session Information (Optional)
 5. u=: URL (Optional)
 6. e=: Email Address (Optional)
 7. p=: Phone Number (Optional)
 8. c=: Connection Information
 9. b=: Bandwidth Information (Optional)
10. t=: Timing
11. r=: Repeat Times (Optional)
12. z=: Time Zones (Optional)
13. k=: Encryption Keys (Optional)
14. a=: Attributes
15. m=: Media Descriptions
```

### SDP의 구조에 따른 예시

* 개발자가 직접 작성하거나 읽는 것이 아닌, 라이브러리가 처리하는 양식.

```json
v=0
o=- 123456 2 IN IP4 192.0.2.1
s=-
t=0 0
a=group:BUNDLE audio video
a=msid-semantic: WMS
m=audio 49170 RTP/SAVPF 111 103 104
c=IN IP4 192.0.2.1
a=rtcp:49172 IN IP4 192.0.2.1
a=candidate:0 1 UDP 2130706431 192.0.2.1 49170 typ host
a=ice-ufrag:F7gI
a=ice-pwd:x9cml/YzichV2+XlhiMu8g
a=fingerprint:sha-256 34:45:66:78:89:AB:CD:EF:01:23:45:67:89:AB:CD:EF:01:23:45:67:89:AB:CD:EF
a=setup:actpass
a=mid:audio
a=sendrecv
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtpmap:103 ISAC/16000
a=rtpmap:104 ISAC/32000
m=video 51372 RTP/SAVPF 100 116 117
c=IN IP4 192.0.2.1
a=rtcp:51374 IN IP4 192.0.2.1
a=candidate:0 1 UDP 2130706431 192.0.2.1 51372 typ host
a=ice-ufrag:F7gI
a=ice-pwd:x9cml/YzichV2+XlhiMu8g
a=fingerprint:sha-256 34:45:66:78:89:AB:CD:EF:01:23:45:67:89:AB:CD:EF:01:23:45:67:89:AB:CD:EF
a=setup:actpass
a=mid:video
a=sendrecv
a=rtcp-mux
a=rtpmap:100 VP8/90000
a=rtpmap:116 red/90000
a=rtpmap:117 ulpfec/90000
```
