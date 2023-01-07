export {}

// 타입을 집합으로 생각하자.

// 더 넓은 타입
type A = string|number;

// 더 좁은 타입
type B = string;

// 불가능함.. (그리고, type B 보다 더 좁은 타입)
type C = string & number;

// any 는 전체집합, never 는 공집합으로 볼 수 있다.

// 더 좁은 타입에서 더 넓은 타입으로 대입이 가능하다.
// (반대로, 더 넓은 타입에서 더 좁은 타입으로 대입이 불가능하다.)

// 객체에서는?
// 멤버(Property, Method)의 개수가 많을수록 더 좁은 타입이다!!!
// (객체가 더 상세할수록 더 좁은 타입이다.)
type O1 = {name: string};
type O2 = {age: number};
type O3 = {name: string, age: number};

// 타입 O1, O2보다 더 넓은 타입. (집합으로 생각해보자.)
type O4 = O1 | O2;

// 타입 O1, O2보다 더 좁은 타입. (집합으로 생각해보자.)
type O5 = O1 & O2;

const obj1: O1 = {name: "kim"};
const obj2: O3 = {name: "park", age: 22};

// 더 좁은 타입에서 더 넓은 타입으로 대입이 가능함.
const obj3: O1 = obj2;

// 더 넓은 타입에서 더 좁은 타입으로 대입은 불가능함.
// const obj4: O3 = obj1;

// 아래 예시를 보면, 더 좁은 타입에서 더 넓은 타입으로의 대입이 가능한데,
// 에러가 발생한다. 그 이유는 잉여 속성 검사를 하기 때문이다.
// const obj4: O3 = {name: "kim", age: 35, married: true};

// 이것을 해결하고 싶다면 아래와 같이 해보자.
const obj5 = {name: "kim", age: 35, married: true};
const obj6: O3 = obj5;
console.log(obj6);