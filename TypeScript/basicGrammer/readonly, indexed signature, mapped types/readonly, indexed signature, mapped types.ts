export {};

// readonly: 읽기 전용 Property 로 만들어준다.
// (읽기 전용: 변수 값을 읽을 수만 있고, 쓸 수 없다. (수정, Write 불가))

interface Ex
{
    readonly a: string,
    b: string,
}

const ex: Ex = {a: "aaa", b: "bbb"};

// 읽기 전용 Property 여서 값을 변경할 수 없음.
// ex.a = "ccc";

ex.b = "bbb1";
console.log(ex);

// Indexed Signature (인덱스드 시그니처)
// 인덱스드 시그니처는 객체가 <Key, Value> 의 형식이며, Key 와 Value 의 타입을 정확하게 명시해야 하는 경우
// 사용할 수 있다.
// (형태 {[key: T]: U}
//
// (모든 Property 의 타입을 한 번에 선언할 수 있다.
//  Property Key, Property Value 의 타입을 한 번에 선언할 수 있다.)

// Property Key 의 타입은 string, Property Value 의 속성은 number
type A = {[key: string]: number};

const a: A = {a: 1, b: 2, c: 3, d: 4};


// Mapped Types
// 기존에 정의되어 있는 타입을 새로운 타입으로 변환하는 데 사용한다.
type B = "Human" | "Dog" | "Cat";

// 타입이 Human, Dog, Cat 으로 선언된 Property Key 를 무조건 하나씩만 가져야 한다.
// Property Value 의 타입은 number
type C = {[key in B]: number};

const c1: C = {Human: 1, Dog: 2, Cat: 3};

// 타입이 Human, Dog, Cat 으로 선언된 Property Key 를 무조건 하나씩만 가져야 한다.
// Property Value 의 타입은 "Human", "Dog", "Cat" 중에 하나
type D = {[key in B]: B}

const d1: D = {Human: "Human", Dog: "Dog", Cat: "Cat"};