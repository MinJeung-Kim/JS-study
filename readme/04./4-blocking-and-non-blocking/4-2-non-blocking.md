---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# 4-2) Non-blocking

### 논블로킹 예제

* Node.js의 `fs` 모듈을 사용하여 파일을 논블로킹 방식으로 읽음.
* 파일 읽기 요청이 보내진 후에도 프로그램의 나머지 부분이 멈추지 않고 "파일 읽기 요청 완료, 다른 작업 계속 진행"이 출력.
* 파일 읽기 작업이 완료되면 콜백 함수가 실행되어 결과를 처리.

```javascript
const fs = require('fs');

console.log("파일 읽기 시작");

// 논블로킹 & 비동기적 방식으로 파일 읽기
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("에러 발생:", err);
        return;
    }
    console.log("파일 내용:", data);
});

console.log("파일 읽기 요청 완료, 다른 작업 계속 진행");
```
