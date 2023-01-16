# TypeScript Assertion

### 1. Type Assertion
#### Type Assertion (타입 단언)
: 개발자가 **직접 변수의 타입을 명시**해, **TypeScript Compiler 에게 알려주는 것**을 말한다.
<br>
**타입 단언은 주로 unknown 타입으로 선언된 변수와 함께 사용된다. <br> (웬만하면 타입 단언은 변수가 
unknown 타입으로 선언된 경우에만 사용하는 것이 좋다.)**

타입 단언 문법 )
* **Angle Bracket** 을 사용한 타입 단언
* **as 키워드**를 사용한 타입 단언
```ts
// Angle Bracket 을 사용한 타입 단언
const a: unknown = "abc";

// 문자열 관련 메소드를 사용하고 싶을 때, 직접 타입을 string 으로 명시
console.log((<string>a).toUpperCase());


// as 키워드를 사용한 타입 단언
const b: unknown = [1, 2, 3];

// 배열 관련 메소드를 사용하고 싶을 때, 직접 타입을 number[] 로 명시
console.log((b as number[]).join("."));
```

<br>

**타입 단언 문법은 일회성**이다.
<br>
즉, 타입 단언 문법을 사용해서 다시 타입을 직접 명시해야 한다.
```ts
const c: unknown = "abc";
console.log((c as string).toUpperCase());

// 에러 )
// 'c' is of type 'unknown'.
console.log(c.toUpperCase());
```

<br>

타입 단언 활용 예시
```ts
// try ... catch 문에서 error 변수의 타입은 unknown 이다.
// (왜냐하면, 어떤 타입의 에러가 발생할지 모르기 때문이다.)
//
// catch 문에서 타입 단언을 통해 error 변수의 타입을 직접
// 명시해줄 수 있다.
try
{
    // ...
}
catch(error)
{
    console.log((error as Error).message);
    console.log((<Error>error).stack);
}

// 하지만, catch 문에서 타입 단언보다는 if else, instanceof 를 사용하는 것이
// 더 좋다.
// (왜냐하면, 타입 단언 문법을 너무 많이 사용하면, 코드에 에러가 발생할
//  확률이 높아지기 때문이다.)
try
{
    // ...
}
catch(error)
{
    // 오류 클래스들은 Error 클래스를 상속받는다.
    if(error instanceof TypeError)
    {
        // error 변수의 타입은 TypeError
        // (클래스 이름이 인스턴스의 타입이다.)
        console.log(error.message);
    }
    else if(error instanceof SyntaxError)
    {
        // error 변수의 타입은 SyntaxError
        // (클래스 이름이 인스턴스의 타입이다.)
        console.log(error.name);
    }
    else
    {
        // ...
    }
}
```

<br>

### 2. Non-null Assertion Operator
#### Non-null Assertion Operator(Non-null 단언 연산자)
: **피연산자의 값이 null, undefined 가 아님을 단언**할 때, Non-null 단언 연산자를 사용한다.
<br>
(**연산자 기호는 !**)
```ts
// main 변수의 값이 null 이 아니라고 단언한다.
// (아이디가 main 인 태그가 있다고 단언한다.)
const main = document.getElementById("main")!;
main.innerHTML = "<p>Hello World!</p>";
```

<br>

하지만, **Non-null 단언 연산자를 사용하면, 코드의 가독성이 떨어지기 때문에**, 
사용하지 않는 것이 좋다.
<br>
대신 **if else 문을 사용**하는 것이 좋다.
```ts
const header = document.getElementById("header");

// 만약 header 값이 null 이 아니라면,
// (아이디가 header 인 태그가 존재한다면,)
if(header)
{
    header.innerHTML = "<p>Hello World!</p>";
}
else
{
    console.log("the value of header is null.");
}
```

<br>

### 3. Const Assertion
TypeScript 는 ...
* **const 키워드로 변수를 선언**할 경우, **자동적으로 변수에 할당된 리터럴 값 자체로 타입을 추론**한다.
* **let 키워드로 변수를 선언**할 경우, **변수에 할당된 리터럴 값이 속한 타입을 추론**한다.
```ts
// 타입을 "Hello" 로 추론
const greeting = "Hello";

// 타입을 string 으로 추론
let string = "string";
```

<br>

**하지만, 객체, 배열 같은 경우 const 키워드로 선언을 해도, 자동적으로 내부 Property 에
할당된 리터럴 값 자체로 타입을 추론하지 않는다.**
<br>
(왜냐하면, 참조형 변수가 객체, 배열을 참조하기 때문이다.)
```ts
// 타입을 
// {Up: number, Down: string, ...} 로 추론
// (내부 Property 에 할당된 리터럴 값이 속한 타입(number, string)으로 추론)
const direction =
    {
        Up: 0,
        Down: "Down",
        Left: 2,
        Right: "Right",
    };

// 타입을 number[] 로 추론
const array = [1, 2, 3];
```

<br>

자동적으로 **내부 Property 에 할당된 리터럴 값 자체로 타입을 추론하고 싶다면,**
<br>(**타입의 범위를 구체적으로 좁히고 싶다면**)
<br>**Const Assertion 을 활용**하면 된다.
<br>(**변수 선언문 뒤에 as const 키워드를 붙이면 된다.**)
```ts
// 타입을 
// {readonly Up: 0, readonly Down: "Down", ...} 로 추론 
const direction =
    {
        Up: 0,
        Down: "Down",
        Left: 2,
        Right: "Right",
    } as const;

// 타입을 readonly [1, 2, 3] 으로 추론
const array = [1, 2, 3] as const;
```

<br>

**let 키워드로 선언된 변수** 같은 경우, **선언문 뒤에 as const 키워드를 붙이면**,
**변수에 할당된 리터럴 값 자체로 타입을 추론**한다.
```ts
// 타입을 number 로 추론
let num1 = 1;

// 타입을 2로 추론
let num2 = 2 as const;
```