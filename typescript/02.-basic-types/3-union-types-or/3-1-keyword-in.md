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

# 3-1) Keyword 'IN'

1. **프로토타입 체인을 통해 Object  속성에 접근이 가능하다.**

```javascript
Object.prototype.response= 'This is a custom property';
let state = {};

if ('response' in state) {
    console.log('💩');  // 💩
}; 
```

2. **미정의 속성 처리**

* 속성의 존재 여부를 확인할 수 있지만, 그 값이 유의미한지는 알 수 없다.

```javascript
let state = {
  response: undefined
};
 
if ('response' in state) {
  console.log('💩'); // 💩
} 
```

3. **가독성과 명확성이 떨어진다.**



### IN 키워드를 사용하는 예

* 웹 브라우저 환경에서 실행되는 **스크립트 내에서 특정 브라우저 기능**이나 **API 존재여부**를 확인하고 싶을 경우.

```javascript
// localStorage가 window 객체에 존재하는지 확인
if ('localStorage' in window) {
  console.log('localStorage is available');
  // localStorage 사용 가능
} else {
  console.log('localStorage is not available');
  // localStorage 사용 불가능
}
```
