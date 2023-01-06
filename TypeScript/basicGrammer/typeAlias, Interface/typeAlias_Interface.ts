export {}

// Type Alias
type Human = {name: string, age: number};
type Doctor = Human & {job: "doctor"};


// Interface
// 인터페이스는 일반적으로 타입 체크를 위해 사용된다. 인터페이스는 여러가지 타입을 갖는 프로퍼티, 메소드로 이루어진 새로운
// 타입을 정의하는 것과 유사하다. (새로운 타입을 생성)
//
// 인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 class 와 유사하나, 직접 인스턴스를
// 생성하는 것은 불가능하다.

// Interface 와 상속
interface Animal
{
    name: string,
    age: number,
}

// 상속 키워드: extends
interface Pet extends Animal
{
    sort: string,
    owner: string,
}

const animal: Animal = {name: "a", age: 10};
const pet: Pet = {name: "b", age: 11, sort: "cat", owner: "Lee"};
console.log(animal, pet);

// 인터페이스 중복 선언 가능하다.
// (중복 선언할 경우, 인터페이스가 서로 합쳐진다.)

interface Person
{
    name: string,
}

interface Person
{
    age: number,
    job: string,
}

const person: Person = {name: "park", age: 20, job: "doctor"};
console.log(person);

// TypeScript Naming Rule
//
// Interface
// 1. 이름은 PascalCase 사용
// 2. 멤버(프로퍼티, 메소드)는 camelCase 사용
// 3. I 를 접두어로 사용하지 말자.
//
// Type
// 1. 이름은 PascalCase 사용
// 2. 멤버(프로퍼티, 메소드)는 camelCase 사용
interface Dog
{
    name: string,
    age: number,
    owner: string,
}

type Cat = {name: string, age: number, owner: string};

const myDog: Dog = {name: "a", age: 10, owner: "kim"};
console.log(myDog);

const myCat: Cat = {name: "b", age: 11, owner: "park"};
console.log(myCat);