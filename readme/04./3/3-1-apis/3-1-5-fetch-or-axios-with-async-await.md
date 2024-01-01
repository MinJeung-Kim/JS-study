---
description: >-
  fetch나 axios와 같은 비동기 API를 async/await와 함께 사용하면, 코드의 가독성을 크게 향상시키고 오류 처리를 보다
  효율적으로 할 수 있다.
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

# 3-1-5) fetch or axios with async/await

* **`fetch`**나 **`axios`**와 같은 **비동기 API를 `async/await`와 함께 사용하면,** <mark style="background-color:orange;">코드의 가독성 향상 및  보다 효율적인 오류 처리</mark>.
* **`async`/`await`**를 사용하면, **비동기 작업을 동기적인 스타일로 작성**할 수 있어 **가독성 향상**.
* **`try...catch`** 블록을 사용한 **오류 처리로 코드의 안정성**⬆️.

### fetch와 async/await 사용

```javascript
async function fetchDataWithFetch() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
}

fetchDataWithFetch();

```



### axios와 async/await 사용

```javascript
async function fetchDataWithAxios() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
}

fetchDataWithAxios();
```
