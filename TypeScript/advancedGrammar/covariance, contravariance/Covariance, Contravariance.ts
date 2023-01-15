export {}

// 공변성, 반공변성

// Return Value
function a(x: string): number
{
    return (+x);
}

a("1");

// (x: string) => number | string (함수 타입)
type B = (x: string) => number | string;

// 서로 타입이 다른데, 대입이 된다.

// 이유
// 리턴값의 타입의 범위가 더 넓은 쪽으로 대입할 수 있다. -> 공변성
// (공변성: A 가 B 의 서브타입이면, T<A> 는 T<B> 의 서브타입이다.)
// (타입 A 와 타입 B 가 있다고 하자. 만약 타입 B 가 타입 A 를 포함하는 관계라면,
//  A 는 B 의 서브타입이다.)
const b: B = a;

// 리턴값의 타입의 범위가 더 좁은 쪽으로 대입할 수 없다.
// (x: string) => string 이 불가능함. (타입 C 에서)
function a1(x: string): number | string
{
    return (+x);
}

type C = (x: string) => number;

// const c: C = a1;


// Parameter
function a2(x: string | number): number
{
    return (+x);
}

type D = (x: string) => number;

// 서로 타입이 다른데, 대입이 된다.

// 이유
// 매개변수의 타입의 범위가 더 좁은 쪽으로 대입할 수 있다. -> 반공변성
// (반공변성: A 가 B 의 서브타입이면, T<B> 는 T<A> 의 서브타입이다.)
// (리턴값의 경우와 반대)
const d: D = a2;

// 매개변수의 타입의 범위가 더 넓은 쪽으로 대입할 수 없다.

function a3(x: string): number
{
    return (+x);
}

type E = (x: string|number) => number;

// const e: E = a3;