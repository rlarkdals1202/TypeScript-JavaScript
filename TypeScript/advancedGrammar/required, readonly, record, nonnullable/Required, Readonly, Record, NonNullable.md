# TypeScript Utility Types - Required, Readonly, Record, NonNullable Type

TypeScript 는 **일반적인 타입 변환을 쉽게 하기 위해서 몇 가지 유틸리티 타입을 제공**한다.
<br>
(여기서 알아볼 유틸리티 타입은 Required, Readonly, Record, NonNullable)

### 1. Required Type
#### Required Type 의 기능
: **타입 파라미터 T 에 전달되는 타입의 모든 프로퍼티에 대해, Required 속성으로 만들고, 새로운 타입을 정의(Required< T >)** 한다.
<br>
(Partial Type 과 반대되는 개념.)
```ts
interface Human
{
    name?: string,
    age?: number,
    married?: true,
}

// Human 타입의 객체는 내부 프로퍼티들이 모두 옵셔널 프로퍼티이므로,
// 반드시 구현해야 할 필요가 없다.
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
```

<br>

Required< T > 타입을 구현해보면...
```ts
// 여기서 -? 의 의미는 옵셔널을 없앤다는 것이다.
// (remove Optionality)
type R<T> = {[key in keyof T]-?: T[key]};
```

<br>

### 2. Readonly Type
#### Readonly Type 의 기능
**타입 파라미터 T 에 전달되는 타입의 모든 프로퍼티에 대해, Readonly 속성으로 만들고, 새로운 타입(Readonly< T >)을 정의**한다.
<br>(readonly: 값을 읽을 수만 있고, 수정할 수는 없다.)
```ts
interface Human
{
    name: string,
    age: number,
    married: boolean,
};

const human: Human =
    {
        name: "kim",
        age: 39,
        married: true,
    };

// 값 수정 가능
human.name = "park";

const human1: Readonly<Human> =
    {
        name: "lee",
        age: 25,
        married: false,
    };

// 에러 )
// Cannot assign to 'married' because it is a read-only property.
// (Readonly<Human> 타입의 객체는 프로퍼티의 값을 수정할 수 없다.
//  Readonly 타입은 타입 파라미터 T의 모든 프로퍼티에 대해, readonly 속성으로 만듬.)
human1.married = true;
```

<br>

### 3. Record Type
#### Record Type 의 기능
: **Property Key 의 타입은 타입 파라미터 K 에 전달되는 타입이고, Property Value 의 타입은 타입 파라미터 T 에 전달되는 타입인 새로운 타입(Record<K, T>)을 정의**한다.
<br>
(모든 Property 에 대해서 적용된다.)
<br>
단, **타입 파라미터 K 에는 string, number, symbol 타입만 올 수 있다.**
즉, Property Key 의 타입은 무조건 string, number, symbol 중 하나이다.
```ts
// Property Key 의 타입은 string,
// Property Value 의 타입은 number.
const object: Record<string, number> =
    {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    };
```

<br>

### 4. NonNullable Type
#### NonNullable Type 의 기능
: **타입 파라미터 T 에 전달되는 타입에서 null, undefined 타입을 제외한 나머지 타입만을 구성하여 새로운 타입(NonNullable< T >)을 정의**한다.
```ts
type A = string | null | undefined | boolean | number;

// Union Type A 에서 null, undefined 타입을 제외한 나머지 타입(string, boolean, number)만을 구성하여
// 새로운 타입 B 를 정의
type B = NonNullable<A>;

const a: A = null;
const b: B = "abc";
```

<br>

NonNullable< T > 타입을 구현해보면...
```ts
// 타입 파라미터 T에 전달되는 타입이 null 또는 undefined 타입이면, T의 타입은 never 이고,
// 아니면, T의 타입은 그대로 타입 파라미터 T에 전달된 타입이다.
type N<T> = T extends null | undefined ? never : T;
```