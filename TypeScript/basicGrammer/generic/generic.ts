export {};

// 에러가 있는 코드
// Operator '+' cannot be applied to types 'string | number' and 'string | number'.

// function add(x: string|number, y: string|number): string|number
// {
//     return (x + y);
// }

// 제네릭(Generic)
// 타입을 변수처럼 생각. 타입을 나중에 정하고 싶을 때 사용한다.

// T에 올 수 있는 타입의 종류를 제한시키는 방법은? (제네릭 제한)
// -> extends 키워드를 사용하면 된다.


// function add<T extends number|string>(x: T, y: T): T
// {
//     Operator '+' cannot be applied to types 'T' and 'T'.
//     (T 의 타입이 정확하게 뭔지 몰라서 에러가 남.)
//
//     return (x + y);
// }

// 제네릭을 여러 개 동시에 만들 수 있다.

function printValue<T extends number|boolean, K extends string>(x: T, y: K): void
{
    console.log(x, y);
}

printValue<number, string>(1, "a");
printValue(true, "a");

// 각종 타입 제한 방법 (제네릭에서)

// 객체 타입으로 제한하기
function ex1<T extends {a: string, b: number}>(x: T): void
{
    console.log(x);
}

ex1({a: "a", b: 3});

// 배열 타입으로 제한하기
function printArray<T extends number[]|string[]>(array: T): void
{
    array.forEach(element => console.log(element));
}

// 함수 형태로 제한하기
// (보통 콜백함수에서)

function calculator<T extends (x: number, y: number) => number>(operator: T, x: number, y: number): void
{
    console.log(operator(x, y));
}

const add: (x: number, y: number) => number = (x, y) => x + y;
calculator(add, 1, 2);

calculator((x, y) => x - y, 1, 2);
calculator((x, y) => x * y, 1, 2);
calculator((x, y) => x / y, 1, 2);

// 생성자 타입만 올 수 있도록 제한하기

function ex2<T extends abstract new (...args: any) => any>(x: T): void
{
    console.log(x);
}

class A {}
class B {}
class C {}

ex2(A);
ex2(B);
ex2(C);

