// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)

// 현재 시간 출력
console.log(new Date());
console.log(new Date('Jun 5, 2022'));
console.log(new Date('2022-12-17T03:24:00'));

// 밀리초 단위로 표기
console.log(Date.now());
console.log(Date.parse('2022-12-17T03:24:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(10); // 0 : 1월
console.log(now.getFullYear());
console.log(now.getDate()); // 0 : 1일
console.log(now.getDay()); // 0 : 일요일 - 6: 토요일
console.log(now);

// 문자열로 변환
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO 8601 형식
console.log(now.toLocaleString('ko-KR')); // 2023. 11. 5. 오전 10:27:28
