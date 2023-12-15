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

# 3) Union Types: OR

### Union

* 발생 가능한 모든 타입 중 딱 한가지를 담고 싶을 경우 사용.

```typescript
type Direction = 'left' | 'right' | 'up' | 'down';

function move(direction: Direction) {
  console.log(direction);
}

move('down');

type TileSize = 8 | 16 | 32;
const tile: TileSize = 16;
```

* 실전 활용 예

```typescript

type SuccessState = {
  response: {
    body: string;
  };
};

type FailState = {
  reason: string;
};

type LoginState = SuccessState | FailState;

// function: login -> success or fail ⏱
function login(): LoginState {
  return {
    response: {
      body: 'logged in!',
    },
  };
}
```



### Discriminated Union

* 공통적인 프로퍼티를 가지므로써 가독성을 높인다.

<pre class="language-typescript"><code class="lang-typescript">type SuccessState = {
<strong>  result:'success',
</strong>  response: {
    body: string;
  };
};

type FailState = {
  result:'fail',
  reason: string;
};

type LoginState = SuccessState | FailState; 

function printLoginState(state: LoginState) {
  if (state.result === 'success') {
    console.log(`🎉 ${state.response.body}`); // 🎉 body
  } else {
    console.log(`😭 ${state.reason}`);  // 😭 reason
  }
}
</code></pre>



### Keyword 'In'

> 💡 `if ('response'`` `<mark style="color:red;">**`in`**</mark>` ``state)` 를 사용하지 않은 이유 ?

{% content-ref url="3-1-keyword-in.md" %}
[3-1-keyword-in.md](3-1-keyword-in.md)
{% endcontent-ref %}
