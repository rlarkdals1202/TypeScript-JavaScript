export {}

// Type Assertion
// (타입 단언)

// 개발자가 직접 변수의 타입을 명시해, TypeScript Compiler 에게 알려주는 것을 말한다.

// 주로 타입 단언은 unknown 타입으로 선언된 변수와 함께 사용된다.
// (그리고, 웬만하면 타입 단언은 변수가 unknown 타입으로 선언된 경우에만 사용하자.)

// 타입 단언 문법

// (1). Angle Bracket 을 사용한 타입 단언
const a: unknown = "abc";

// 문자열 관련 메소드를 사용하고 싶을 때, 직접 타입을 string 으로 명시
console.log((<string>a).toUpperCase());

// (2). as 키워드를 사용한 타입 단언
const b: unknown = [1, 2, 3];

// 배열 관련 메소드를 사용하고 싶을 때, 직접 타입을 number[] 로 명시
console.log((b as number[]).join("."));

// 타입 단언 문법은 일회성이다.
// -> 즉, 다시 타입 단언 문법을 사용해서 타입을 직접 명시해야 한다.
const c: unknown = "abc";
console.log((c as string).toUpperCase());

// 에러) 'c' is of type 'unknown'.
// console.log(c.toUpperCase());
console.log((c as string).toUpperCase());


// 타입 단언 사용 예시

// try ... catch 문에서 error 변수의 타입은 unknown 이다.
// (왜냐하면, 어떤 타입의 에러가 발생할지 모르기 때문이다.)
//
// catch 문에서 타입 단언을 통해 타입을 직접 명시해줄 수 있다.
try
{
    // ...
}
catch(error)
{
    console.log((error as Error).message);
    console.log((<Error>error).stack);
}

// 하지만 catch 문에서 타입 단언보다는 if else, instanceof 를 사용하는 것이
// 더 좋다.
// (왜냐하면, 타입 단언 문법을 너무 많이 사용하면, 코드에 에러가 발생할 확률이 높아지기 때문이다.)
// (아래의 오류 클래스들은 Error 클래스를 상속받는다.)
try
{
    // ...
}
catch(error)
{
    if(error instanceof TypeError)
    {
        console.log(error.message);
    }
    else if(error instanceof SyntaxError)
    {
        console.log(error.name);
    }
    else
    {
        // ...
    }
}

// Non-null Assertion Operator
// (Non-null 단언 연산자)
//
// 피연산자의 값이 null, undefined 가 아님을 단언할 때, Non-null Assertion 연산자를 사용할 수 있다.
// (연산자 기호는 !)

// main 변수의 값이 null 이 아니라고 단언한다.
// (아이디가 main 인 태그가 있다고 단언한다.)
const main = document.getElementById("main")!;
main.innerHTML = "<p>Hello World!</p>"

// 하지만, Non-null 단언 연산자를 사용하지 않는 것이 좋다. (이유: 가독성이 떨어지기 때문에)
// 대신, if else 문을 사용하는 것이 좋다.
const header = document.getElementById("header");
if(header)
{
    main.innerHTML = "<p>Hello World!</p>";
}
else
{
    console.log("the value of header is null.");
}


// Const Assertion

// TypeScript 는
// const 키워드로 변수를 선언한 경우, 자동적으로 변수에 할당된 리터럴 값 자체로 타입을 추론한다.
// let 키워드로 변수를 선언한 경우, 변수에 할당된 리터럴 값이 속한 타입을 추론한다.

const greeting = "Hello";
let string = "string";

// 하지만, 객체, 배열 같은 경우, const 키워드로 선언을 해도, 자동적으로 내부 Property 에
// 할당된 리터럴 값 자체로 타입을 추론하지 않는다.
// (왜냐하면, 참조형 변수가 객체, 배열을 참조하기 때문이다.)
const direction =
    {
        Up: 0,
        Down: "Down",
        Left: 2,
        Right: "Right",
    };

const array = [1, 2, 3];

// 자동적으로 내부 Property 에 할당된 리터럴 값 자체로 타입을 추론하고 싶다면,
// (타입의 범위를 구체적으로 좁히고 싶다면)
// Const Assertion 을 활용하면 된다.
// -> 변수 선언문 뒤에 as const 키워드를 붙이면 된다.
const direction1 =
    {
        Up: 0,
        Down: "Down",
        Left: 2,
        Right: "Right",
    } as const;

const array1 = [1, 2, 3] as const;

// let 키워드로 선언된 변수 같은 경우, 선언문 뒤에 as const 키워드를 붙이면,
// 변수에 할당된 리터럴 값 자체로 타입을 추론한다.
let num1 = 1;
let num2 = 2 as const;