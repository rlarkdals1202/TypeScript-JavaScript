# TypeScript Call Signature, Overloading
( [JavaScript Function ](https://github.com/rlarkdals1202/JavaScript-Note/blob/master/Note/function.js))

### 1. 일반적인 함수 정의

#### (1). 함수 선언문
```ts
// 함수 선언문
function printNum(x: number): void
{
    console.log(x);
}

printNum(10);
```

<br>

#### (2). 함수 표현식
```ts
// 함수 표현식
const printNum = function (x: number): void
{
    console.log(x);
}

printNum(20);
```

<br>

#### (3). 화살표 함수
```ts
// 화살표 함수
const printNum = (x: number, y: number): void =>
{
    console.log(x, y);
}

printNum(10, 20);
```

<br>

### 2. Call Signature
#### Call Signature )
: **함수의 파라미터와 리턴값의 타입을 미리 선언**하는 것

#### (1). 함수 표현식에서의 Call Signature
**const / let 함수이름: (매개변수: 타입) => 리턴값 타입 = function (매개변수) {}**
```ts
// 함수 표현식에서의 Call Signature
const printString: (x: string) => void = function(x)
{
    console.log(x);
}

printString("a");
```

<br>

#### (2). 화살표 함수에서의 Call Signature
**const / let 함수이름: (매개변수: 타입) => 리턴값 타입 = (매개변수) => {}**
```ts
// 화살표 함수에서의 Call Signature
const printString: (x: string, y: string) => void = (x, y) => console.log(x, y);

printString("a", "b");
```

<br>

Type Alias, Interface 에서도 함수의 파라미터와 리턴값의 타입을 미리 선언할 수 있다.(Call Signature)
#### (3). Type Alias 에서의 Call Signature
**type 함수 타입 이름 = (매개변수: 타입) => 리턴값 타입**
```ts
// Type Alias 를 사용해서 함수의 파라미터와 리턴값의 타입을 모두 미리 선언할 수 있다.
type Add = (x: number, y: number) => number;
const add: Add = (x, y) => x + y;

console.log(add(10, 20));
```

<br>

#### (4). Interface 에서의 Call Signature
**interface 함수 타입 이름 { (매개변수: 타입): 리턴값 타입 }**
```ts
interface Add
{
    (x: number, y: number): number,
}
const add: Add = (x, y) => x + y;

console.log(add(20, 30));
```

<br>

### 3. Function Overloading
#### Function Overloading (함수 오버로딩)
: **같은 이름의 함수를 중복하여 정의**하는 것이다.
<br>**TypeScript 에서는 같은 이름의 함수를 중복 선언**하고, **오버로드 된 함수를 구현할 때는 any 타입을 사용한다. 또한 오버로드 된 함수를 단 한 번만 구현할 수 있다.**
<br>(**TypeScript 에서 오버로드 된 함수를 구현할 때는 any 타입이 허용**된다.)
<br>**오버로드 된 함수들은 서로 다른 매개변수의 타입, 리턴값의 타입을 가져야 한다.**
```ts
// 오버로드 된 함수들
function add(x: number, y: number): number;
function add(x: string, y: string): string;

function add(x: any, y: any): any
{
    return (x + y);
}

console.log(add(10, 20));
```

<br>

#### 인터페이스, 클래스 내부에서의 함수 오버로딩

**(매개변수: 타입): 리턴값 타입** 형식으로 **함수 타입을 미리 선언(call signature)하는 것은
함수 오버로딩을 지원**한다.

#### (1). Interface
```ts
// interface 내부에서의 함수 오버로딩
interface Add
{
    (x: number, y: number): number,
    (x: string, y: string): string,
}
const add: Add = (x: any, y: any): any => x + y;

console.log(add(10, 20));
console.log(add("a", "b"));
```

<br>

#### (2). Class
```ts
// class 내부에서의 함수 오버로딩
class Add
{
    add(x: number, y: number): number;
    add(x: string, y: string): string;
    add(x: any, y: any): any
    {
        return (x + y);
    }
}
const object: Add = new Add();

console.log(object.add(10, 20));
console.log(object.add("a", "b"));
```