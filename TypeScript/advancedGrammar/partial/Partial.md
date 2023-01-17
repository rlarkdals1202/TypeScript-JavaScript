# TypeScript Utility Types - Partial Type

TypeScript 는 **일반적인 타입 변환을 쉽게 하기 위해서 몇 가지 유틸리티 타입을 제공**한다.
<br>
(여기서 알아볼 유틸리티 타입은 Partial Type)

### 1. Partial Type
#### Partial Type 의 기능
: **Type Parameter 에 전달되는 타입의 모든 Property** 를 **Optional Property 로 만든 새로운 타입(Partial< T >)을 정의한다.**
<br>
(**Optional Property : 구현해도 되고, 구현하지 않아도 되는 Property.** [Optional Property 에 대해서](https://github.com/rlarkdals1202/TypeScript-JavaScript/blob/main/TypeScript/basicGrammer/optional/optional.md))
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
        age: 45,
        married: true,
    };

// Partial<Human> 타입의 객체는 인터페이스 내부의
// 모든 Property 들을 구현해야 할 필요는 없다.
// (왜냐하면, Partial 타입이 Human 타입의 모든 Property 들을
//  Optional Property 로 만든 새로운 타입(Partial<Human>)을 정의하기 때문이다.)
const human1: Partial<Human> =
    {
        name: "lee",
        married: false,
    };

// Type Alias
type Animal = {name: string, age: number};

const animal: Animal =
    {
        name: "puppy",
        age: 10
    };

const cat: Partial<Animal> =
    {
        name: "kitty",
    };
```

<br>

### 2. Partial Type 분석
Partial Type 을 직접 만들어보면,
<br>
(타입 P< T > 가 직접 Partial 타입을 구현한 것이다.)
```ts
// Partial Type 을 직접 구현
type P<T> =
    {
        [key in keyof T]?: T[key]
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

const human1: P<Human> =
    {
        name: "park",
    };
```

<br>

type P< T > = {[key in keyof T]?: T[key]} 코드를 해석해보면
* [key in keyof T]<br>: **타입 파라미터 T 에 전달되는 타입의 각 Property Key**
* T[key]<br>: **타입 파라미터 T에 전달되는 타입의 각 Property 의 타입**
* ?:<br>: **옵셔널 프로퍼티로 선언**

결국에는 **타입 파라미터 T 에 전달되는 타입의 모든 Property 를 Optional Property 로 만든 새로운 타입(Partial< T >)을 정의 하겠다는 의미**이다.