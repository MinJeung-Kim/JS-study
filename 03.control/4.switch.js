// 조건문 Conditional Statement
// switch
// 정해진 범위안의 값에 대해 특정한 일을 해야하는 경우
let day = 0;

switch (day) {
  case 0:
    console.log('월요일');
    break;
  case 1:
    console.log('화요일');
    break;
}

let condition = 'good'; // okay, good -> 좋음!, bad -> 나쁨!
let text;
switch (condition) {
  case 'okay':
  case 'good':
    text = '좋음!';
    break;

  default:
    text = '나쁨!';
    break;
}

console.log(text);
