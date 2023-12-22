---
description: 자바스크립트 엔진이 수집하는 컨텍스트 관련 코드들을 실행하는 데 필요한 환경 정보.
---

# 2) VE & LE

* JavaScript의 스코프와 실행 컨텍스트 관리에 핵심적인 역할.
* 각각 코드의 렉시컬 구조와 함수 호출 시의 초기 상태를 반영하는 방식으로 사용.

<table><thead><tr><th width="114">환경</th><th width="130">정의</th><th width="162">구성 요소</th><th width="147">역할</th><th>동작</th></tr></thead><tbody><tr><td><strong>Variable</strong></td><td>주로 <mark style="background-color:orange;">초기 실행 단계에서의 변수 상태</mark>를 나타 냄.</td><td>• 환경 레코드와 외부 환경 참조를 포함.<br>• Lexical Environment와 유사.</td><td>함수의 매개변수, 함수 선언 및 변수의 <strong>초기 상태(호이스팅 포함)를 관리</strong></td><td>실행 컨텍스트가 생성될 때 <strong>한 번만 설정</strong>됨.</td></tr><tr><td><strong>Lexical</strong></td><td><mark style="background-color:orange;">코드가 작성된 구조(렉시컬 스코프)에 따라 결정</mark>되는 실행 컨텍스트 내의 환경.</td><td>• 환경 레코드 <br>• 외부 환경 참조 </td><td>현재 <strong>실행 중인 코드의 스코프와 해당 스코프 내의 변수, 함수</strong> 등을 관리</td><td>실행 중인 코드의 <strong>렉시컬 스코프에 따라 생성</strong>되며, <strong>업데이트</strong> 가능.</td></tr></tbody></table>

