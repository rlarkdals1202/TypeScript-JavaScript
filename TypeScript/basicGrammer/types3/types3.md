# TypeScript Types3

### 1. Enum
**Enum 은 특정 값들의 집합을 의미하는 자료형**이며, 변수들을 하나의 Group 으로 묶고싶을 때 사용한다.
```ts
// 숫자형 Enum
// 위에서 부터 순서대로 0부터 값이 할당된다. (0, 1, 2, 3, ...)
// (값을 따로 할당할 수 있다. 따로 할당한 경우, 그 숫자 이후 순서대로 값이 할당된다.
//  예를 들어, 9를 할당했으면, 그 이후로, 10, 11, 12, ... 순서대로 값이 할당된다.)
//
// Up 의 값은 0, Down 의 값은 1,
// Left 의 값은 5, Right 의 값은 6
const enum NumberDirection
{
    Up,
    Down,
    Left = 5,
    Right,
}

// 문자형 Enum
// 숫자형 Enum 과 달리, 값을 자동으로 할당하지 않으므로,
// 명시적으로 할당해야 한다.
const enum StringDirection
{
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

// up 변수에는 0이 할당된다.
const up = NumberDirection.Up;

// down 변수에는 "Down" 이 할당된다.
const down = StringDirection.Down;

// Enum 을 타입으로 선언할 수 있다.
function move(direction: NumberDirection)
{
    // ...
}
```

<br>

### 2. as const 
as const 키워드의 사용 목적
* 타입의 추론 범위를 줄이기 위해서 사용한다.<br>(**타입 추론**이란, TypeScript 가 코드를 해석해 나가는 동작을 의미한다.)
* 값의 재할당을 막기 위해서 사용한다.
```ts
// TypeScript 는 const 키워드로 선언된 경우, 자동적으로 할당된 리터럴 값 자체로 타입을 추론하지만,
// let 키워드로 선언된 경우, 할당된 리터럴 값이 속한 타입을 추론한다.

const string1 = "Hello"; // 타입을 "Hello" 로 추론
let string2 = "Hello"; // 타입을 string 으로 추론
let string3 = "Hello" as const; // 타입을 "Hello" 로 추론


// 하지만, Object, Array 같은 경우, const 키워드로 선언을 해도 자동적으로 내부 Property 에
// 할당된 리터럴 값 자체로 타입을 추론하지 않는다.
// (왜냐하면, Object, Array 는 참조형)
//
// 그래서 내부 Property 에 할당된 리터럴 값 자체로 타입을 추론하고 싶다면,
// as const 키워드를 붙이면 된다.
const direction =
    {
        Up: 0,
        Down: 1,
        Left: 2,
        Right: 3,
    } 
    // 내부 Property 에 할당된 리터럴 값이 속한 타입(number)으로 추론
    // {Up: number, Down: number, ...}

const direction1 =
    {
        Up: 0,
        Down: 1,
        Left: 2,
        Right: 3,
    } as const
    // 내부 Property 에 할당된 리터럴 값 자체로 타입을 추론
    // {readonly Up: 0, readonly Down: 1, ... }

const array = [1, 2, 3]; // 타입을 number[] 로 추론
const array1 = [1, 2, 3] as const; // 타입을 readonly [1, 2, 3] 으로 추론
```

<br>

### 3. typeof, keyof 
* **typeof**: 값을 타입으로 사용하고 싶을 때 쓴다. <br> (값의 타입을 반환)
* **keyof**: 객체의 모든 Property 의 Key 를 Union(|) 형태로 반환한다. <br> (피연산자는 타입) 
```ts
const direction =
    {
        Up: 0,
        Down: 1,
        Left: 2,
        Right: 3,
    } as const;

// DirType 의 타입은 {readonly Up: 0, ... }
type DirType = typeof direction;

// Key 의 타입은 "Up" | "Down" | "Left" | "Right"
type Key = keyof typeof direction;

// Value 의 타입은 0 | 1 | 2 | 3
type Value = typeof direction[keyof typeof direction];
```