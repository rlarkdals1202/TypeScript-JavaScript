# TypeScript Generic

### 1. Generic
**Generic(제네릭)** 이란, **타입을 마치 함수의 Parameter 처럼 사용하는 것을 말한다.**
<br>(타입을 변수처럼 생각, **타입을 나중에 정하고 싶을 때 사용 -> 런타임 시점에 타입을 명시**)
<br>
제네릭은 **타입이 고정되는 것을 방지**하며, **재사용 가능한 요소를 선언할 수 있다.**
<br>
(**재사용성이 높은 Component 를 만들 때 자주 활용**되며, **한 가지 타입보다 여러 가지 타입에서 동작하는
컴포넌트를 생성하는 데 사용**된다.)
```ts
// 런타임 시점에 T 의 타입이 결정된다.
function foo<T>(t: T): void
{
    console.log(t);
}

foo(1);
foo("abc");
foo(true);
```

<br>

**extends** 키워드를 사용하면, **타입 매개변수(Type Parameter)에 올 수 있는 타입의 종류를 제한시킬 수 있다.**
```ts
// Type Parameter 에는 number 타입과 string 타입만 올 수 있다.
function foo<T extends number|string>(x: T): void
{
    console.log(x);
}

foo(1);
foo("123");
```
참고 )
<br>
* **class** 에서의 **extends**: **다른 클래스를 상속받을 때** 사용
* **generic** 에서의 **extends**: **타입 파라미터에 올 수 있는 타입의 종류를 제한시킬 때** 사용

<br>

**여러 개의 제네릭을 동시에 만들 수 있다.**

```ts
// 타입 파라미터 T 에는 number, boolean 타입만 올 수 있고,
// 타입 파라미터 K 에는 string 타입만 올 수 있다.
function printValue<T extends number|boolean, K extends string>(x: T, y: K): void
{
    console.log(x, y);
}
```

### 2. Generic, extends
generic 에서 **extends 는 Type Parameter 에 올 수 있는 타입의 종류를 제한시킬 때 사용한다.**

#### 몇 가지 예시들 )

#### (1) . 객체 타입으로 제한하기
```ts
// 타입 파라미터 T 에는 오직 {a: string, b: number} 객체 타입만 올 수 있다.
function printObject<T extends {a: string, b: number}>(x: T): void
{
    console.log(x);
}

printObject({a: "a", b: 3});
```

<br>

#### (2). 배열 타입으로 제한하기
```ts
// 타입 파라미터 T 에는 오직 number[], string[] 타입만 올 수 있다.
// (숫자형 배열, 문자열형 배열)
function printArray<T extends number[]|string[]>(array: T): void
{
    array.forEach(element => console.log(element));
}

printArray([1, 2, 3]);
printArray(["a", "b", "c"]);
```

<br>

#### (3). 함수 형태로 제한하기 (보통 콜백함수에서)
```ts
// x 매개변수의 타입이 number, y 매개변수의 타입이 number, 리턴값의 타입이 number 인 콜백함수만
// 타입 파라미터 T 에 올 수 있다. 
function calculator<T extends (x: number, y: number) => number>(operator: T, x: number, y: number): void
{
    console.log(operator(x, y));
}

const add: (x: number, y: number) => number = (x, y) => x + y;
const minus: (x: number, y: number) => number = (x, y) => x - y;

calculator(add, 10, 20);
calculator(minus, 10, 20);
calculator((x, y) => x * y, 10, 20);
calculator((x, y) => x / y, 10, 20);
```

<br>

#### (4). 생성자 타입만 올 수 있도록 제한하기
```ts
// 생성자 타입만 타입 파라미터 T 에 올 수 있다.
function foo<T extends abstract new (...args: any) => any>(x: T): void
{
    console.log(x);
}

class A{}
class B{}
class C{}

foo(A);
foo(B);
foo(C);
```