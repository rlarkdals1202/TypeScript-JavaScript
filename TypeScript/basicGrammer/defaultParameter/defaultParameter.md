# TypeScript Default Parameter

### 1. Default Parameter

Default Parameter(매개변수 기본 값)을 통해, **인수를 다 전달하지 않아도
함수를 호출할 수** 있다. (**매개변수에 기본 값을 할당함**으로써) 
<br>
**Default Parameter** 는 **Optional Parameter 가 적용**된다.
```ts
// b 매개변수는 Optional Parameter 이다.
function add(a: number, b: number = 1): number
{
    return (a + b);
}

// 11 출력 (10 + 1)
console.log(add(10));

// 20 출력 (10 + 10)
console.log(add(10, 10));
```

<br>

**매개변수에 기본 값을 할당하면, 매개변수의 타입 선언을 안해도 된다.** 
<br>(왜냐하면, **tsc 가 기본 값을 통해서 타입 추론을 할 수 있기 때문이다.**)
```ts
function add(a: number, b = 1): number
{
    return (a + b);
}

console.log(add(20));
console.log(add(20, 20));
```

<br>

### 2. Default Parameter, Object
매개변수에 객체도 기본 값으로 할당할 수 있다.
```ts
// object 의 타입 : {name: string} 객체 타입
function printObject(object: {name: string} = {name: "kim"}): void
{
    console.log(object);
}

// {name: "kim"} 출력
printObject();

// {name: "lee"} 출력
printObject({name: "lee"});
```

<br>

**매개 변수에 할당된 기본 값이 객체인 경우에도, tsc 가 기본 값을 통해서 타입 추론을 할 수 있다.**
```ts
function printObject(object = {name: "kim"}): void
{
    console.log(object);
}

printObject();
printObject({name: "lee"});
```

<br>

### 3. Default Parameter, Generic
**제네릭에서의 Type Parameter(타입 파라미터)에도 기본 값을 할당할 수 있다.**
<br>
(**기본 타입을 할당**)
<br>
**제네릭에서 Default Parameter 를 사용하는 이유**는 **React 에서의 JSX(JavaScript XML) 문법과
구별하기 위해서**다.
<br>
([React, JSX 에 대해서](https://ko.reactjs.org/docs/introducing-jsx.html))
```ts
// 타입 파라미터에 기본 값을 할당함으로써, JSX 문법과 제네릭을 구별할 수 있다.
function example<T = unknown>(x: T): void
{
    console.log(x);
}

example([1, 2, 3]);
```

<br>

참고 ) JSX 문법과 제네릭을 구별하는 다른 방법
* **extends unknown** (제네릭)
* **Type Parameter 뒤에 쉼표(,) 붙이기** (제네릭)
```ts
function example1<T extends unknown>(x: T): void
{
    console.log(x);
}

function example2<T,>(x: T): void
{
    console.log(x);
}

example1(1);
example2("a");
```