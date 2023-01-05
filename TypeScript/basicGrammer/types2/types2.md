# TypeScript types2

### 1. Wrapper Object 와 Type
원시 값을 객체처럼 사용하게 되면, 자바스크립트 엔진은 암묵적으로 연관된 객체를 생성하여,
생성된 객체로 Property 에 접근하거나, Method 를 호출하고 다시 원시 값으로 되돌린다.
이때 생성되는 객체를 **Wrapper Object** 라고 한다.
<br>
(원시 값으로 되돌리고나서, Wrapper Object 는 **GC(Garbage Collection)** 의 대상이 된다.)
<br><br>
**TypeScript 에서 타입 선언시 Wrapper Object 를 사용하지 말아야 한다.**
```ts
// Wrapper Object 는 사용하지 말아야 한다.
const a: String = "Hello";
const b: Number = 1;
const c: Boolean = false;

// 아래와 같이 작성해야 한다.
const aa: string = "Hello";
const bb: number = 1;
const cc: boolean = true;
```

<br>

### 2. Type Alias
**Type Alias(타입 별칭)** 이란, **type 키워드**를 사용해서, 타입의 새로운 이름을 만드는 것이다.
<br>(타입에 다른 이름을 붙인다.)
```ts
// Type Alias (타입 별칭)

// number 타입에 n 이라는 다른 이름을 붙임.
type n = number;
const num: n = 1;

type World = "world";
const d: World = "world";

// Type Alias 에서 Template Literal 도 사용가능하다.
// (Template Literal: 내장된 표현식을 허용하는 문자열 리터럴)
type Greeting = `hello ${World}`;
```

<br>

### 3. Rest Parameter 와 타입
**Rest Parameter** 는 매개변수 이름 앞에 ...을 붙여서 정의한 매개변수이다.
<br>
**Rest Parameter 는 함수에 전달된 인수들의 목록을 배열로 전달받는다.**
<br>
(Rest Parameter: 타입)
```ts
// numbers 매개변수는 Rest Parameter 이다.
function sum(...numbers: number[])
{
    return (numbers.reduce((sum, value) => sum += value, 0));
}
console.log(sum(1, 2, 3, 4, 5));
```

<br>

### 4. Tuple
TypeScript 에서 **Tuple(튜플)** 은 **타입과 길이가 고정된 배열**을 말한다.
<br>(**타입을 명시한 순서에 따라 타입에 대응되는 값을 할당해야 한다. 또한, 명시한 타입의 개수와, 값의 개수는 동일해야 한다.**)
```ts
const tuple: [number, string] = [10, "abc"];

// 길이가 고정되어 있으므로, 튜플에 요소를 추가하는 것은 불가능하다.
// tuple[2] = 1;

// 하지만, push 메소드로 요소를 추가할 수 있다..
tuple.push(100);
```