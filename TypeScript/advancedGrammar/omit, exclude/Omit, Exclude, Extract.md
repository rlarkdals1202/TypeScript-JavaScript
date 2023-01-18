# TypeScript Utility Types - Omit, Exclude, Extract Type

TypeScript 는 **일반적인 타입 변환을 쉽게 하기 위해서 몇 가지 유틸리티 타입을 제공**한다.
(여기서 알아볼 유틸리티 타입은 Omit, Exclude, Extract Type)

### 1. Omit Type
#### Omit Type 의 기능
: **타입 파라미터 T 에 전달되는 타입에서 명시된 프로퍼티만 제외하고 새로운 타입(Omit<T, K>)을 정의한다.**
<br>
**Omit<T, K> 타입의 객체는 명시된 프로퍼티를 제외한, 나머지 프로퍼티들을 구현**하면 된다.
```ts
interface Human
{
    name: string,
    age: number,
    married: true,
}

// Human 타입의 객체는 인터페이스 내부의
// 모든 Property 들을 구현해야 한다.
const human: Human =
    {
        name: "kim",
        age: 39,
        married: true,
    };

// Omit<Human, "married"> 타입의 객체는 name, age Property 만
// 구현하면 된다.
// (왜냐하면 Omit 타입이 Human 타입에서 명시된, married Property 만 제외하고,
//  새로운 타입(Omit<Human, "married">)을 정의하기 때문이다.
const human1: Omit<Human, "married"> =
    {
        name: "lee",
        age: 29,
    };
```

<br>

Omit Type 은 **Pick Type 과 Exclude Type 을 조합해서 정의한 Type** 이다.
```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

<br>

### 2. Exclude Type
#### Exclude Type 의 기능
: **타입 파라미터 T 에 전달되는 타입 중 타입 파라미터 U 에 전달되는 타입에서 겹치는 타입을
제외하고 새로운 타입(Exclude<T, U>)을 정의한다.**
```ts
type Fruit = "cherry" | "banana" | "strawberry" | "lemon";

// Exclude<Fruit, "cherry" | "strawberry"> 타입은 겹치는 타입인 "cherry", "strawberry" 를 제외한,
// "banana" | "lemon" 타입으로 정의한다.
type YellowFruit = Exclude<Fruit, "cherry" | "strawberry">;
const yellowFruit: YellowFruit = "banana";
```

<br>

### 3. Extract Type
#### Extract Type 의 기능
: **타입 파라미터 T 에 전달되는 타입 중 타입 파라미터 U 에 전달되는 타입에서 겹치는 타입을
추출하여 새로운 타입(Extract<T, U>)을 정의한다.**
```ts
type Fruit = "cherry" | "banana" | "strawberry" | "lemon";

// Extract<Fruit, "cherry" | "strawberry"> 타입은 겹치는 타입인 "cherry", "strawberry" 를 추출하여,
// "cherry" | "strawberry" 타입으로 정의한다.
type RedFruit = Extract<Fruit, "cherry" | "strawberry">;
const redFruit: RedFruit = "strawberry";
```