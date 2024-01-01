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

# 3-1-2) Fetch

* 서버와의 네트워크 통신을 위한 **인터페이스**.
* **`XMLHttpRequest`보다 더 직관적이고 간결한 문법** 제공.
* <mark style="background-color:orange;">프로미스(promise) 기반의 간결하고 효율적인 방법</mark>으로 **비동기 HTTP 요청을 처리**.
* **최신 웹 표준에 맞게 설계**되었으며, 대부분의 현대 브라우저에서 지원됨.
* 비동기 작업을 나타내는 **프로미스 반환**.
* <mark style="background-color:orange;">HTTP 오류 상태(예: 404, 500)는 reject되지 않으</mark>므로, 별도로 처리.

```javascript
fetch('https://example.com/data', {
  method: 'POST',  // HTTP 메소드 지정
  headers: {
    'Content-Type': 'application/json'  // 헤더 설정
  },
  body: JSON.stringify({ key: 'value' })  // 요청 본문
})
.then(response => response.json()) // 응답을 JSON 형태로 파싱
.then(data => console.log(data)) // 데이터 처리
.catch(error => console.error('Error:', error)); // 오류가 발생했을 때만 프로미스를 reject. 
```

### 장단점

<table><thead><tr><th width="116"></th><th></th></tr></thead><tbody><tr><td>장점</td><td><ul><li>콜백 지옥(callback hell)을 피할 수 있다.</li><li>프로미스 기반으로 작동하기 때문에, 비동기 작업을 쉽고 깔끔하게 관리.</li><li>다양한 HTTP 요청 방식(GET, POST, PUT, DELETE 등)을 지원하며, 헤더, 바디, 모드 등 요청의 다양한 옵션 설정 가능.</li><li>응답 본문을 스트림으로 처리할 수 있어, 큰 데이터를 다룰 때 유용함.</li></ul></td></tr><tr><td>단점</td><td><ul><li>일부 <strong>호환되지않는 브라우저는 폴리필(polyfill)을 사용</strong>.</li><li>다른 도메인의 리소스에 접근하려면 서버에서 <mark style="background-color:orange;"><strong>CORS</strong></mark>를 적절히 설정해야 함.</li><li>네트워크 오류가 아닌 <strong>HTTP 오류(예: 404, 500) 응답 상태를 직접 확인하고 처리</strong>.</li></ul></td></tr></tbody></table>
