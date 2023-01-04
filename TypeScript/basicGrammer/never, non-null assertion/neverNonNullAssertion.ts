export {};

// 빈 배열의 타입은 never 이다.
// (빈 배열의 타입이 never 가 되기 위해선, tsconfig.json 파일에서 strict: true, noImplicitAny: false 로 설정해야한다.)
// never 타입? 값의 공집합이다. 즉, 어떤 값도 할당할 수 없는 타입이다.
// 그래서, 타입 선언이 필요하다.

const array = [];

const stringArray: string[] = [];
stringArray.push("abc");

// 2개 이상의 타입을 선언하고 싶다면, | 연산자를 사용한다.
let a: number|string;
a = 1;
a = "Hello";

let b: HTMLElement|null = document.getElementById("header");

// Non-null assertion
// Non-null 단언 연산자는 해당 변수의 값이 null, undefined 가 아니라고 단언한다.
const header = document.getElementById("header")!;
header.innerHTML = "<p>Hello</p>";

// 하지만, Non-null 단언 연산자를 사용하지 않는 것이 좋다.
const body = document.getElementById("body");
if(body)
{
    body.innerHTML = "<p>body</p>";
}
else
{
    console.log("the value of body is null.");
}

