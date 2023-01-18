# TypeScript Utility Types - Pick Type

TypeScript 는 **일반적인 타입 변환을 쉽게 하기 위해서 몇 가지 유틸리티 타입을 제공**한다.
<br>
(여기서 알아볼 유틸리티 타입은 Pick Type)

### 1. Pick Type
#### Pick Type 의 기능
: **타입 파라미터 T 에 전달되는 타입에서 명시된 프로퍼티만 선택하여, 새로운 타입(Pick<T, K>)을 정의한다.**
<br>
**Pick<T, K> 타입의 객체는 명시된 프로퍼티만 구현**하면 된다.
```ts
interface Human
{
    name: string,
    age: number,
    married: boolean,
}

// Human 타입의 객체는 인터페이스 내부의
// 모든 Property 들을 구현해야 한다.
const human: Human =
    {
        name: "kim",
        age: 39,
        married: true,
    };

// Pick<Human, "name" | "age"> 타입의 객체는 name, age Property 만
// 구현하면 된다.
// (왜냐하면 Pick 타입이 Human 타입에서 명시된, name, age Property 만 선택하여,
//  새로운 타입(Pick<Human, "name" | "age"> 타입을 정의하기 때문이다.)
const human1: Pick<Human, "name" | "age"> =
    {
        name: "lee",
        age: 29,
    };

// Type Alias
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
```

<br>

### 2. Pick Type 분석
Pick Type 을 직접 만들어보면,
<br>
(타입 P< T > 가 직접 Partial 타입을 구현한 것이다.)
```ts
// Pick Type 을 직접 구현
type P<T, K extends keyof T> =
    {
        [key in K]: T[key]
    };

type Human =
    {
        name: string,
        age: number,
    };

const human: Human =
    {
        name: "lee",
        age: 30,
    };

const human1: P<Human, "name"> =
    {
        name: "kim",
    };
```

<br>

type P<T, K extends keyof T> = {[key in K]: T[key]} 코드를 해석해보면
* K extends keyof T<br>: **타입 파리미터 K 에는 타입 파라미터 T 에 전달되는 타입의 Property Key 값 타입(리터럴 타입)만 올 수 있다.**
* [key in K]: **타입 파라미터 K 에 전달되는 타입의 각 Property Key**
* T[key]: **타입 파라미터 T에 전달되는 타입의 Property 의 타입 <br>(단 key 는 타입 파라미터 K 에 전달되는 타입의 Property Key)**