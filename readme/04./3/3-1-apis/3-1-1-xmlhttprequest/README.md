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

# 3-1-1) XMLHttpRequest

* `HTTP` 또는 `HTTPS`를 통해 <mark style="background-color:orange;">**서버와 데이터를 교환**</mark>할 수 있게 해줌.
* 서버로부터 **데이터를 검색**하거나 서버에 **데이터를 보낼 때** 사용.
* **AJAX(Asynchronous JavaScript and XML)** 프로그래밍의 **핵심 구성 요소**

### 기본 작동 방식

```javascript
// 1. 객체 생성.
var xhr = new XMLHttpRequest();

// 2. open 메소드를 사용하여 요청을 초기화.
//        HTTP메소드, 요청할 URL, 비동기 여부
xhr.open('GET', 'https://example.com/api', true);

// 3. 요청의 상태가 변경될 때마다 호출될 함수 설정.
xhr.onreadystatechange = function() {
    // xhr.readyState : 요청의 처리 과정과 상태확인.
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};

// 4. 서버에 요청 전송.
xhr.send();

// 5. 네트워크 오류 발생 시.
xhr.onerror = function() {
    console.error("요청 중 오류 발생");
};
```

### `XMLHttpRequest`의 상태(`readyState`)

* 요청의 현재 상태.
* `0: UNSENT`: `open()` 메소드가 아직 호출되지 않은 상태.
* `1: OPENED`: `open()` 메소드가 호출된 상태.
* `2: HEADERS_RECEIVED`: `send()` 메소드가 호출되고, 헤더와 상태가 사용 가능한 상태.
* `3: LOADING`: 다운로드 중이며, `responseText`에 부분적인 데이터를 담고 있는 상태.
* `4: DONE`: 요청이 완료된 상태.

### 장단점

<table><thead><tr><th width="105"></th><th></th></tr></thead><tbody><tr><td><strong>장점</strong></td><td><ul><li>거의 모든 현대 브라우저에서 널리 지원됨.</li><li>매우 세밀한 제어가 가능(헤더 설정, HTTP 상태 코드 처리 등).</li></ul></td></tr><tr><td><strong>단점</strong></td><td><ul><li>구문이 복잡하고, 사용하기 번거로움.</li><li>오래된 기술로, 현대적인 대안인 <strong>fetch API</strong>가 더 쉽고 간결한 인터페이스 제공.</li></ul></td></tr></tbody></table>

