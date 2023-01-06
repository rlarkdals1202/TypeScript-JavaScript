export {};

// Type Alias: 새로운 타입을 생성하는 것이 아니라, 타입의 새로운 이름을 만든다.
// (타입에 다른 이름을 붙인다.)
type A = {a: string};
const object: A = {a: "a"};

// Interface: 새로운 타입을 생성한다.
interface B {a: string}
const object1: B = {a: "b"};

// Union
// 변수의 값이 여러 타입을 가지는 경우, Union 을 사용한다.
// (A | B 의 의미: 변수의 값이 A 또는 B 타입의 값을 가질 수 있다.)
const a: string|number = "hello";
const b: string|number|boolean = false;

// Intersection
// 기존 타입을 대체하지 않으면서, 기존 타입에 새로운 필드를 추가하고 싶을 때 Intersection 을 사용한다.
// (A & B 의 의미: 변수의 값이 A 타입이면서 동시에 B 타입이어야 한다.)
type I = string & number; // string 타입이면서 동시에 number 타입이다.(?) (예시)

type O = {hello : 'world'} & {age : 23};
const object2: O = {hello: 'world', age: 23};

// Union, Intersection 의 비교
// Union 같은 경우, 여러 타입 중 하나만 만족시키면 된다.
// 하지만, Intersection 같은 경우, 모든 타입을 만족시켜야 한다. (위 예시처럼)
type O1 = {hello: 'world'} | {age: 23};

const object3: O1 = {hello: 'world'};
const object4: O1 = {age: 23};
const object5: O1 = {hello: 'world', age: 23};
