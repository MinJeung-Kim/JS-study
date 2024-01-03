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

# 4-1) Blocking

### 블로킹 작업 사용 사례

* **Node.js**에서 동기적으로 파일을 읽기.
* 프로그램의 초기화 단계에서 설정 파일을 읽는 경우와 같이, <mark style="background-color:orange;">**시작 시 한 번만 실행**</mark><mark style="background-color:orange;">되고 프로그램 실행에</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">**필수적인 정보**</mark><mark style="background-color:orange;">를 로드할 때</mark> 사용.
* `readFileSync()` 함수는 파일의 내용을 읽는 동안 다른 작업을 수행하지 않고 대기.
* <mark style="color:red;">**필요한 경우에만 사용하는 것이 좋다.**</mark>

```javascript
const fs = require('fs');

// 동기적으로 파일 읽기 (블로킹)
function readFileSyncExample() {
    try {
        const data = fs.readFileSync('config.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFileSyncExample();
```
