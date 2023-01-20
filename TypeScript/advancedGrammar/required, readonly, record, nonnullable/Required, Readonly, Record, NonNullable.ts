export {}

interface Human
{
    name?: string,
    age?: number,
    married?: boolean,
}

// Required Type
// 타입 파라미터 T 의 모든 프로퍼티에 대해, Required 속성으로 만들고 새로운 타입을
// 정의한다. (Required<T>)
// -> Partial Type 과 반대되는 개념임.

// Human 타입 내의 프로퍼티들이 모두 옵셔널 프로퍼티이므로,
// 반드시 구현할 필요가 없다.
const human: Human =
    {
        name: "kim",
    };

// Required<Human> 타입의 객체는 타입의 모든 프로퍼티를 구현해야 한다.
// (Required 타입은 타입 파라미터 T의 모든 프로퍼티에 대해, Required 속성으로 만듬.)
const human1: Required<Human> =
    {
        name: "kim",
        age: 39,
        married: true,
    };

// Require<T> 구현
// -? 의 의미: 옵셔널을 없앤다. (remove optionality)
type R<T> =
    {
        [key in keyof T]-?: T[key];
    };


// Readonly Type
// 타입 파라미터 T의 모든 프로퍼티에 대해, Readonly 속성으로 만들고
// 새로운 타입을 정의한다.
// (readonly: 값을 읽을 수만 있고, 수정할 수는 없다.)
const human2: Human =
{
    name: "lee",
    age: 40,
    married: false,
}

human2.age = 29;

const human3: Readonly<Human> =
    {
        name: "park",
        age: 29,
        married: true,
    };

// Readonly<Human> 타입의 객체는 프로퍼티의 값을 수정할 수 없다.
// (Readonly 타입은 타입 파라미터 T의 모든 프로퍼티에 대해, readonly 속성으로 만듬.)
// human3.married = false;


// Record Type
// Property Key 의 타입이 K 이고, Property Value 의 타입이 T 인
// 새로운 객체 타입(Record<K, T>)을 정의한다. (모든 Property 에 대해서 적용된다.)
//
// 타입 파라미터 K 에는 string, number, symbol 타입만 올 수 있다.
// 즉, Property Key 의 타입은 string, number, symbol 중 하나이다.
const object: Record<string, number> =
    {
        a: 3,
        b: 4,
        c: 7,
    };


// NonNullable Type
// 타입 파라미터 T에서 null, undefined 타입을 제외한 나머지 타입만을 구성하여
// 새로운 타입을 정의한다.

type A = string | null | undefined | boolean | number;
type B = NonNullable<A>;

const a: A = null;
const b: B = "abc";

// NonNullable Type 구현
// 타입 파라미터 T에 전달되는 타입이 null 또는 undefined 이면, never 타입
// 아니면, T 타입
type N<T> = T extends null | undefined ? never : T;