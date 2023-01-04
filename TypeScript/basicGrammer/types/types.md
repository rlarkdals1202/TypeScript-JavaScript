# TypeScript types

TypeScript 는 **변수, 매개변수, 리턴 값**에 타입을 붙이면 된다.

### 1. 변수에 타입 선언하기
```ts
const a: number = 5;
const b: string = "Hello World!";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for("123");

// any 로 선언하면, 어떤 타입의 값도 할당할 수 있다.
let g: any = 1;
any = "";
any = NaN;
```

<br>

### 2. 함수에 타입 선언하기
```ts
// function 함수이름(매개변수: 타입): 리턴값 타입 {}
function add(x: number, y: number): number
{
    return (x + y);
}
console.log(add(10, 20));

// 화살표 함수이름: 타입 = (매개변수) => {}
// 타입의 구조는?
// (매개변수: 타입) => 리턴값 타입
const add2: (x: number, y: number) => number = (x, y) => x + y;

// Type Alias
type Add = (x: number, y: number) => number;
const add3: Add = (x, y) => x + y;
```

<br>

### 3. 객체에 타입 선언하기
```ts
// 객체: {프로퍼티: 타입...}
const obeject: {x: number, y: string} =
    {
        x: 10,
        y: "abc",
    };
```

<br>

### 4. 배열에 타입 선언하기
```ts
// 배열: 배열 타입[]
const numberArray: number[] = [1, 2, 3];
const booleanArray: boolean[] = [true, false];

// Generic(제네릭) 이용하기
// 배열: Array<타입>
const stringArray: Array<string> = ["a", "b"];
const symbolArray: Array<symbol> = [Symbol.for("a"), Symbol.for("b")];

// Tuple(튜플)에 대해서
// 튜플이란, 길이가 고정된 배열을 말한다.
// (타입을 명시한 순서에 따라 타입에 대응되는 값을 할당해야 한다. 또한, 명시한 타입의 개수와, 값의 개수는 동일해야 한다.)
const tuple: [number, string, number] = [10, "a", 20];
```

<br>

### 5. 고정된 Primitive Value(원시값) 할당하기
```ts
const t: true = true;
const ten: 10 = 10;
const PI: 3.14 = 3.14;
```