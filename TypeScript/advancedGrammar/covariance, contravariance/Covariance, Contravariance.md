# TypeScript Covariance, Contravariance

먼저, 타입 A 와 타입 B 가 있다고 하자. 만약, **타입 B 가 타입 A 를 포함하는 관계라면,
타입 A 는 타입 B 의 서브타입**이다.

### 1. Covariance
#### Covariance(공변성)
: **A 가 B 의 서브타입이면, T< A >는 T< B > 의 서브타입이다.**

<br>

TypeScript 에서 **타입들은 기본적으로 공변성 규칙을 따른다.**
<br>
(공변성 규칙을 따르면 -> **타입의 범위가 더 좁은 변수, 값을 타입의 범위가 더 넓은 변수에 대입할 수 있다.** (단, 역은 성립하지 않는다.))
```ts
const a: number = 1;
const b: number|string = a;

// 역은 성립하지 않는다.
const c: number|string = "abc";
const d: number = c;
```

<br>

**함수에서 리턴값의 타입들도 공변성 규칙을 따른다.**
<br>(공변성 규칙을 따르면 -> **리턴값의 타입의 범위가 더 좁은 함수를 리턴값의 타입의 범위가 더 넓은 함수에 대입할 수 있다.** (단, 역은 성립하지 않는다.))
```ts
// ** 함수의 매개변수와 리턴값의 타입을 미리 선언하는 것을
// Call Signature 라고 한다.

// call signature
type A = (x: string) => number;
let a: A = x => +x;

type B = (x: string) => number | string;
let b: B = x => +x;

b = a;

// 역은 성립하지 않는다.
a = b;
```

<br>

### 2. Contravariance
#### Contravariance(반공변성)
: **A 가 B 의 서브타입이면, T< B > 는 T< A > 의 서브타입이다.**

<br>

TypeScript 에서는 **함수의 매개변수의 타입들이 반공변성 규칙을 따른다.**
<br>
(반공변성 규칙을 따르면 -> **매개변수의 타입의 범위가 더 넓은 함수를 매개변수의 타입의 범위가 더 좁은 함수에 대입할 수 있다.** (단, 역은 성립하지 않는다.))
```ts
// ** 함수의 매개변수와 리턴값의 타입을 미리 선언하는 것을
// Call Signature 라고 한다.

// call signature
type A = (x: string | number) => number;
let a: A = x => +x;

type B = (x: string) => number;
let b: B = x => +x;

b = a;

// 역은 성립하지 않는다.
a = b;
```