export {}

interface Human
{
    name: string,
    age: number,
    married: true,
}

// Omit Type
// 타입 파라미터 T 에 전달되는
// 타입에서 명시된 프로퍼티만 제외하고 새로운 타입(Omit<T, K>) 을 정의한다.

const human1: Human =
    {
        name: "kim",
        age: 30,
        married: true,
    };

// married Property 를 제외하고, 나머지 Property 를 구현하면 된다.
const human2: Omit<Human, "married"> =
    {
        name: "park",
        age: 24,
    };

// Omit Type 은 Pick Type 과 Exclude Type 을 조합해서 정의한 Type 이다.

// Exclude Type
// 타입 파라미터 T 에 전달되는 타입 중 타입 파라미터 U 에 전달되는 타입에서 겹치는 타입을
// 제외하고 새로운 타입(Exclude<T, U>)을 정의한다.
type Fruit = "cherry" | "banana" | "strawberry" | "lemon";

type YellowFruit = Exclude<Fruit, "cheery" | "strawberry">;

const yellowFruit: YellowFruit = "banana";


// Extract Type
// 타입 파라미터 T 에 전달되는 타입 중 타입 파라미터 U 에 전달되는 타입과 겹치는 타입을
// 추출하여 새로운 타입(Extract<T, U>)을 정의한다.
// -> Exclude Type 과 반대되는 개념

type RedFruit = Extract<Fruit, "cherry" | "strawberry">;

const redFruit: RedFruit = "cherry";