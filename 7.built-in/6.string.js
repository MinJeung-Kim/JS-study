const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj); // [String: 'Hello World!']
console.log(text); // Hello World!
console.log(text.length); // 12

// 특정 인덱스에 위치한 문자 확인
console.log(text[0]); // H
console.log(text.charAt(0)); // H

// 특정 문자열의 위치
console.log(text.indexOf('l')); // 2
console.log(text.lastIndexOf('l')); // 9

// 특정 문자열이 포함되어있지 확인(대소문자 구별)
console.log(text.includes('tx')); // false
console.log(text.includes('h')); // false
console.log(text.includes('H')); // true

// 특정한 문자로 시작하는지 확인
console.log(text.startsWith('He')); // true
console.log(text.endsWith('!')); // true

// 대문자로 변경
console.log(text.toUpperCase()); // HELLO WORLD!
console.log(text.toLowerCase()); // hello world!

// 특정 위치의 문자 삭제
console.log(text.substring(0, 2)); // He
console.log(text.slice(2)); // llo World!
console.log(text.slice(-2)); // d!

// 공백제거
const space = '      space         ';
console.log(space.trim()); // space

// 특정 문자별로 문자열 자르기
const longText = 'Get to the point';
console.log(longText.split(' ')); // [ 'Get', 'to', 'the', 'point' ]
console.log(longText.split(' ', 2)); // [ 'Get', 'to' ]

// 콤마(,)와 스페이스( )단위로 문자열 자르기
const longText2 = 'Get, to the point';
console.log(longText2.split(',')); // [ 'Get', ' to the point' ]
console.log(longText2.split(', ')); // [ 'Get', 'to the point' ]
