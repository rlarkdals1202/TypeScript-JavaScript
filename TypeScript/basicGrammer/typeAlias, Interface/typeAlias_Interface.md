# TypeScript Type Alias, Interface

Type Alias, Interface 를 통해, **새로운 타입을 정의할 수 있다.**
<br>
Type Alias 와 Interface 의 차이점: **Type Alias 는 선언적 확장이 불가능하지만, Interface 는 선언적 확장이 가능하다.**
<br>
(**선언적 확장: 이미 선언된 타입 선언에 멤버(Property, Method)를 추가하는 것**)

### 1. Type Alias
**Type Alias** : 타입의 새로운 이름을 만드는 방법이다.<br>
(타입에 다른 이름을 붙인다.)
```ts
// Type Alias
type Human = {name: string, age: number};
const human: Human = {name: "kim", age: 23};
console.log(human);


// Intersection (&) 을 사용하여, 기존 타입을 대체하지 않으면서,
// 기존 타입에 멤버(프로퍼티, 메소드)를 추가할 수 있다.
type Doctor = Human & {job: "doctor"};
const doctor: Doctor = {name: "park", age: 23, job: "doctor"};
console.log(doctor);
```

<br>

### 2. Interface
Interface 는 일반적으로 **타입 체크를 위해 사용**된다. **인터페이스는 
여러가지 타입을 갖는 프로퍼티, 메소드로 이루어진 새로운 타입을 정의하는 것**과 유사하다.

```ts
interface Animal
{
    name: string,
    age: number,
}

const animal: Animal = {name: "a", age: 12};
console.log(animal);

// 인터페이스는 다른 인터페이스를 상속받을 수 있다. (extends 키워드를 통해)
// (아래 예시 같은 경우, Pet 인터페이스가 Animal 인터페이스의 멤버를 상속받는다.)
interface Pet extends Animal
{
    sort: string,
    owner: string,
}

const myPet: Pet = {name: "b", age: 10, sort: "말티즈", owner: "kim"};
console.log(myPet);

// 인터페이스는 동일한 이름을 가지고 중복 선언을 할 수 있다. -> 선언적 확장
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

const person: Person = {name: "lee", age: 39, job: "developer"};
console.log(person);
```

<br>

### 3. Type, Interface Naming Rule
Interface )
1. **이름은 PascalCase** 를 사용한다.
2. **멤버(Property, Method)는 camelCase** 를 사용한다.
3. I 를 접두어로 사용하지 말아야 한다.


Type )
1. **이름은 PascalCase** 를 사용한다.
2. **멤버(Property, Method)는 camelCase** 를 사용한다.
```ts
interface Dog
{
    name: string,
    age: number,
    owner: string,
}

type Cat =
    {
        name: string,
        age: number,
        owner: string,
    };

const myDog: Dog = {name: "a", age: 10, owner: "kim"};
console.log(myDog);

const myCat: Cat = {name: "b", age: 11, owner: "park"};
console.log(myCat);
```