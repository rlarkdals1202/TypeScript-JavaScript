# TypeScript Type Set

### 1. 집합의 관점으로 바라보는 Type
타입을 **집합의 관점에**서 생각해보자.
```ts
// (집합의 관점에서)

// 더 넓은 타입
type A = string|number;

// 더 좁은 타입
type B = string;

// 불가능하지만, type B 보다 더 좁은 타입
type C = string & number;

// (위 상황을 Venn Diagram 으로 그려보면 
// 쉽게 이해할 수 있다. -> |는 합집합으로, &는 교집합으로 보면..)
```
<br>

타입을 집합의 관점에서 생각해보면, **any 타입은 전체집합, never 타입은 공집합**으로
볼 수 있다.
* **변수의 타입이 any** 라면, **어떤 타입의 값도 변수에 대입할 수 있다.**
* **변수의 타입이 never** 라면, **어떤 타입의 값도 변수에 대입할 수 없다.**
```ts
const a: any = false;

// Type 'number' is not assignable to type 'never'.
const b: never = 1;
```

<br>


**더 좁은 타입에서 더 넓은 타입으로 대입이 가능하다.**
<br>
(반대로, **더 넓은 타입에서 더 좁은 타입으로 대입이 불가능하다.**)

<br>

### 2. 집합의 관점으로 바라보는 Type (Object 에서)
**객체에서는 멤버(Property, Method)의 개수가 많을수록 더 좁은 타입**이다.
<br>
(**객체가 더 상세할수록 더 좁은 타입**이다.)
```ts
type O1 = {name: string};
type O2 = {age: number};

// 타입 O3는 타입 O1, O2보다 더 좁은 타입이다.
type O3 = {name: string, age: number};

// 타입 O4는 타입 O1, O2보다 더 넓은 타입이다.
// (집합으로 생각해본다.)
type O4 = O1 | O2;

// 타입 O5는 타입 O1, O2보다 더 좁은 타입이다.
// (집합으로 생각해본다.)
type O5 = O1 & O2;
```

<br>

위에서 **더 좁은 타입에서 더 넓은 타입으로 대입이 가능하다**고 하였다.
<br>
(반대로, **더 넓은 타입에서 더 좁은 타입으로 대입이 불가능**하다.)
```ts
// 타입 O3은 타입 O1, O2보다 더 좁은 타입이다.
// (왜냐하면, 멤버의 개수가 더 많기 때문이다.)
type O1 = {name: string};
type O2 = {age: number};
type O3 = {name: string, age: number};

const object1: O3 = {name: "park", age: 22};

// 더 좁은 타입의 변수의 값을 더 넓은 타입의 변수에 대입이 가능하다.
const object2: O1 = object1; 

const object3: O1 = {name: "kim"};

// 에러) 더 넓은 타입에서 더 좁은 타입으로 대입이 불가능하다.
const obj4: O3 = object3; 
```

<br>

아래 예시를 보면, 원래 더 좁은 타입에서 더 넓은 타입으로의 대입이 가능한데,
에러가 발생한다. 그 이유는 **잉여 속성 검사**를 하기 때문이다.
```ts
type O1 = {name: string, age: number};

// 에러)
// Object literal may only specify known properties, and 'married' does not exist in type 'O1'.
const object1: O1 = {name: "kim", age: 35, married: true};

// 에러를 해결하고 싶다면? 아래와 같이 코드를 작성해보자.
const object2 = {name: "kim", age: 39, married: true};
const object3: O1 = object2;
console.log(object3);
```