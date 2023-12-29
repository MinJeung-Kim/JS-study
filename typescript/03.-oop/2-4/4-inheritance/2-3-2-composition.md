---
description: 상속의 문제점을 보완.
---

# 2-3-2) Composition

* 객체의 일부 속성이나 행동이 다른 객체에 의해 정의되는 디자인 패턴.
* 상속의 대안으로 사용되며, 클래스 간의 느슨한 결합을 통해 유연하고 관리하기 쉬운 코드 작성.



### Composition 예제(has-a)

* `Car`는 `Engine`을 상속받지 않고, 대신 `Engine` 인스턴스를 포함하여 엔진 관련 기능을 제공.

```javascript
// Engine 클래스 정의
class Engine {
    start() {
        console.log("Engine started");
    }

    stop() {
        console.log("Engine stopped");
    }
}

// Car 클래스 정의
class Car {
    private engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    startCar() {
        this.engine.start(); // 엔진의 start 메소드 사용
        console.log("Car started");
    }

    stopCar() {
        this.engine.stop(); // 엔진의 stop 메소드 사용
        console.log("Car stopped");
    }
}

// 사용 예시
const engine = new Engine();
const car = new Car(engine);

car.startCar();
car.stopCar();

```
