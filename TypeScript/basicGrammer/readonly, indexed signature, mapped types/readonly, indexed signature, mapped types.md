# TypeScript readonly, Indexed Signature, Mapped Types

### 1. readonly
**readonly 키워드는 Property 를 읽기 전용으로 만들어준다.**
<br>
(읽기 전용: **변수 값을 읽을 수만 있고, 쓸 수 없다.** (수정, Write 불가능))
```ts
interface Ex
{
    readonly a: string,
    b: string,
}

const ex: Ex = {a: "aaa", b: "bbb"};

ex.b = "bbb1";
console.log(ex);

// 에러 )
// Cannot assign to 'a' because it is a read-only property.
// (읽기 전용 Property 여서, 값을 변경할 수 없다.)
ex.a = "aaa1";
```

<br>

### 2.Indexed Signature
**Indexed Signature**(인덱스드 시그니처)는 **객체가 <Key, Value>의 형식이며, Key 와 Value 의 타입을
정확하게 명시해야 하는 경우, 사용할 수 있다.**
<br><br>
Indexed Signature 를 통해, **모든 Property 의 타입을 한 번에 선언할 수 있다.**
<br>
**(Property Key, Property Value 의 타입을 한 번에 선언할 수 있다.)**
<br>
형태 >> **{[key: T]: U}**
```ts
// Property Key 의 타입은 string, Property Value 의 타입은 number
type A = {[key: string]: number};

const a: A = {a: 1, b: 2, c: 3};
console.log(a);

// 에러 )
// Type 'string' is not assignable to type 'number'.
const a1: A = {a: "a"};
```

<br>

### 3. Mapped Types
**Mapped Types 는 기존에 정의되어 있는 타입을 새로운 타입으로 변환하는 데 사용한다.**
```ts
type B = "Human" | "Dog" | "Cat";

// 타입이 Human, Dog, Cat 으로 선언된 Property Key 를 무조건 하나씩만 가져야 한다.
// Property Value 의 타입은 number
type C = {[key in B]: number};

const c1: C = {Human: 1, Dog: 2, Cat: 3};
console.log(c1);

// 타입이 Human, Dog, Cat 으로 선언된 Property Key 를 무조건 하나씩만 가져야 한다.
// Property Value 의 타입은 "Human", "Dog", "Cat" 중에 하나
type D = {[key in B]: B};

const d1: D = {Human: "Human", Dog: "Dog", Cat: "Cat"};
console.log(d1);
```

