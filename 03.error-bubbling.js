// Bubbling up, Propagating
// - 에러를 처리하기에 적당한 곳에서 에러를 처리한다.

function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('error ');
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}
console.log('done!');
