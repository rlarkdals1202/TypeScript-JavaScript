export {}

// Partial, Interface

interface A
{
    name: string,
    age: number,
    married: boolean,
}

interface PartialA
{
    name?: string,
    age?: number,
    married?: boolean,
}

const human: A =
    {
        name: "kim",
        age: 40,
        married: true,
    };

// Partial Type 의 기능
// 타입 파라미터에 전달되는 타입의 모든 프로퍼티를 옵셔널 프로퍼티로 만든 새로운 타입을 정의한다.
// (Partial<A> 한 결과가 PartialA)

const human2: Partial<A> =
    {
        name: "kim",
        age: 50,
    };

// Partial Type 만들어보기

type P<T> = {[key in keyof T]?: T[key]};

const human3: P<A> =
    {
        name: "lee",
        married: false,
    };


// Partial, Type Alias
type Animal = {age: number, name: string};

const animal: Animal =
    {
        age: 10,
        name: "puppy",
    };

const cat: Partial<Animal> =
    {
        name: "kitty",
    };