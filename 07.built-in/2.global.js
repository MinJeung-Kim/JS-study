console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval('const num = 2; console.log(num)');
console.log(isFinite(1)); // 유한한 숫자인지 true
console.log(isFinite(Infinity)); // 유한한 숫자인지 false

// 문자열 안의 숫자를 숫자로 변환
console.log(parseFloat('12.43')); // 실수
console.log(parseInt('12.43')); // 정수

// URL (URI, Uniform Reource Udentifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 된다.
const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded); // https://%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com

const decoded = decodeURI(encoded);
console.log(decoded); // https://드림코딩.com

// 전체 URL이 아니라 부분적인 것은 Component이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part)); // %EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com
