export {};

// Enum
// Enum 은 변수들을 하나의 그룹으로 묶고싶을 때 사용한다. (특정 값들의 집합을 의미하는 자료형)
// Enum 을 타입으로 사용가능하다.
//
// 숫자형 Enum
// 위에서 부터 순서대로 0부터 값이 할당된다. (0, 1, 2, 3, ...)
// (값을 따로 할당할 수 있음. 따로 할당한 경우, 그 숫자 이후 순서대로 값이 할당됨.
//  예를 들어, 10을 할당했으면, 그 이후로 11, 12, 13, ... 순서대로 값이 할당.)
//
// 문자형 Enum
// 숫자형 Enum 과 달리, 값을 자동으로 할당하지 않으므로, 명시적으로 할당해주어야 한다.
const enum Direction
{
    Up,
    Down,
    Left,
    Right = 5,
    a
}

const enum StringDirection
{
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

const a = Direction.Up;
const b = Direction.Down;
const c = Direction.Left;
const d = Direction.Right;
console.log(a, b, c, d);

const e: Direction = Direction.Up;
console.log(e);

// as const 의 목적: 타입의 추론 범위를 줄이고, 값의 재할당을 막기 위함.
// (TypeScript 는 const 키워드로 선언된 경우, 자동적으로 할당된 리터럴 값 자체로 타입을 추론하지만,
// let 키워드로 선언한 경우, 리터럴 값이 속한 타입으로 타입을 추론한다.)
const string1 = "Hello";
let string2 = "Hello";
let string3 = "Hello" as const;

// 하지만, Object, Array 같은 경우, const 키워드로 선언을 해도, 자동적으로 내부 Property 에
// 할당된 리터럴 값 자체로 타입을 추론하지 않는다.
// (Object, Array 는 참조형)
//
// 그래서, 내부 Property 에 할당된 리터럴 값 자체로 타입을 추론하려면,
// as const 키워드를 붙이면 된다.
const direction =
    {
        Up: 0,
        Down: 1,
        Left: 2,
        Right: 3,
    };

const direction1 =
    {
        Up: 0,
        Down: 1,
        Left: 2,
        Right: 3,
    } as const;

const array = [1, 2, 3];
const array1 = [1, 2, 3] as const;

// typeof: 값을 타입으로 사용하고 싶을 때 쓴다. (값의 타입 반환)
// keyof: 객체의 모든 Property 의 Key 를 Union (|) 형태로 반환한다.
// (피연산자는 타입)

type type = typeof direction1;
type Key = keyof typeof direction1;
type Value = typeof direction1[keyof typeof direction1];