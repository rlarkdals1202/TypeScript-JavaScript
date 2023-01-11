# TypeScript Optional

### 1. Optional Parameter
선언된 매개변수의 개수만큼 인수를 전달하고 싶지 않게 만들고 싶다면, ?를 사용하면 된다.
<br>
인수를 전달하지 않으면, Optional Parameter(선택적 매개변수)에는 undefined 가 할당된다.
```ts
function sum(a: number, b?: number, c?: number): number
{
    return (a + (b ?? 1) + (c ?? 2));
}

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
```
<br>
참고로, ?? 연산자는 Null Coalescing Operator (null 병합 연산자) 라고 부른다.
<br>

좌항의 피연산자 값이 오직 null, undefined 인 경우에만, 우항의 피연산자 값을 반환하고,
아니면 좌항의 피연산자 값을 반환한다.

```ts
function printMessage(message?: string): void
{
    console.log(message ?? "hello");
}

printMessage();
printMessage("Hello World!");
```

<br>

### 2. Optional Property
객체 타입에서 선언된 프로퍼티는 반드시 구현해야 하는데, 프로퍼티가 선택적으로 필요한 경우가 존재한다.
<br>
이때, Optional Property(선택적 프로퍼티)를 사용하면 된다.
<br>
Optional Property 는 프로퍼티 뒤에 ?를 붙이면 되고, Optional Property 는 구현해도 되고, 안해도 된다.
<br>
(Interface, type alias 에서도 사용 가능)
```ts
const object1: {a?: number, b?: number} =
    {
        a: 1,
    };

console.log(object1);

type O2 = {a: string, b?: number};

const object2: O2 = {a: "abc"};
const object22: O2 = {a: "abc", b: 10};

console.log(object2);
console.log(object22);

interface O3
{
    a: string,
    b: string,
    c?: number,
}

const object3: O3 = {a: "a", b: "b", c: 10};
const object33: O3 = {a: "a", b: "b"};

console.log(object3);
console.log(object33);
```

<br>

### 3. Optional Chaining
Optional Chaining(옵셔널 체이닝)
<br>
: 객체를 가리키는(참조하는) 참조변수의 값이 null, undefined 인지 확인하고, Property
를 참조하고 싶을 때 유용하다.
<br>
(옵셔널 체이닝 연산자는 ?. 이다.)
<br>
좌항 피연산자의 값이 오직 null, undefined 인 경우에만, null, undefined 를 반환하고,
아니면 우항의 Property 참조를 이어간다.
```ts
const dog: {name: string, age: number, owner: {name: string}, hello: () => void} =
    {
        name: "puppy",
        age: 8,
        owner:
            {
                name: "kim",
            },
        hello()
        {
            console.log(`${this.name}이 반갑다고 인사합니다.`);
        }
    };

console.log(dog?.age);
console.log(dog?.name);
console.log(dog?.owner?.name);
dog?.hello();
```