export {}

// Pick Type
// 타입 파라미터 T 에 전달되는
// 타입에서 명시된 프로퍼티만 선택하여 새로운 타입(Pick<T, K>)을 정의한다.
// (Pick<T, K> 타입의 객체는 명시된 프로퍼티만 구현하면 된다.)

interface Human
{
    name: string,
    age: number,
    married: boolean,
}

const human: Human =
    {
        name: "kim",
        age: 39,
        married: true,
    };

// name, age Property 만 구현하면 된다.
const human1: Pick<Human, "name" | "age"> =
    {
        name: "lee",
        age: 29,
    };

type Animal = {name: string, age: number};

const animal: Animal =
    {
        name: "puppy",
        age: 10,
    };

const cat: Pick<Animal, "name"> =
    {
        name: "kitty",
    };

// Pick Type 직접 구현
type P<T, K extends keyof T> =
    {
        [key in K]: T[key]
    };

const human2: P<Human, "name" | "married"> =
    {
        name: "kim",
        married: true,
    };