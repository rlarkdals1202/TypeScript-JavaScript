# TypeScript Union, Intersection

### 1. Type Alias, Interface
* **Type Alias** : 새로운 타입을 생성하는 것이 아니라, 타입의 새로운 이름을 만든다.<br>(타입에 다른 이름을 붙인다.)
* **Interface** : 새로운 타입을 생성한다.
```ts
// Type Alias
type A = {a: string};
const object1: A = {a: "a"};
console.log(object1);

// Interface
interface B
{
    a: string,
}
const object2: B = {a: "b"};
console.log(object2);
```

<br>

### 2. Union
**변수의 값이 여러 타입을 가지는 경우**, Union 을 사용할 수 있다. <br> (연산자는 **|**)<br>
예시) A | B 의 의미: 변수의 값이 A 타입 또는 B 타입의 값을 가질 수 있다.
```ts
const a: number|string = "hello";
console.log(a);

const b: number|string|symbol = Symbol.for("abc");
console.log(b);
```

<br>

### 3. Intersection
**기존 타입을 대체하지 않으면서, 기존 타입에 새로운 필드 또는 프로퍼티를 추가하고 싶을 때**, Intersection 을 사용할 수 있다. <br> (연산자는 **&**) <br>
예시) A & B 의 의미: 변수의 값이 A 타입 이면서 동시에 B 타입이어야 한다.
```ts
// string 타입이면서, 동시에 number 타입이다.(?) (예시)
type I = string & number;

// {hello: 'world'} 타입이면서, 동시에 {age: 23} 타입이다.
type O = {hello: 'world'} & {age: 23};
const object1: O = {hello: 'world', age: 23};
console.log(object1);

// {name: string} 타입이면서, 동시에 {age: number} 타입이다.
type L = {name: string} & {age: number};
const object2: L = {name: "kim", age: 25};
console.log(object2);
```

<br>

### 4. Union, Intersection 비교
* Union 같은 경우)<br>**여러 타입 중 하나만 만족**시키면 된다.
* Intersection 같은 경우)<br>**모든 타입을 만족**시켜야 한다.
```ts
// Union 
type A1 = {name: string} | {age: number};
const obj1: A1 = {name: "kim"};
const obj2: A1 = {age: 30};
const obj3: A1 = {name: "park", age: 40};
console.log(obj1, obj2, obj3);

// Intersection
type A2 = {name: string} & {age: number};
const obj4: A2 = {name: "Lee", age: 50};
console.log(obj4);
```