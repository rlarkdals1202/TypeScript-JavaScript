# TypeScript Object, {}, object type

### 1. Object, {} type
**{}, Object 타입으로 선언된 변수에는 모든 타입의 값을 대입할 수 있다. (단, null, undefined 제외)**
```ts
const x: {} = "Hello";
const y: Object = "Hello";

console.log(x, y)

// 에러 )
// Type 'null' is not assignable to type '{}'.
const z: {} = null;
```

<br>

### 2. object type
그러면 **실제 객체를 나타내는 타입**은? (객체 타입)
<br>**object 타입**으로 선언하면 된다.
```ts
const obj: object = {name: "kim", age: 23};
console.log(obj);

// 에러 )
// Type 'number' is not assignable to type 'object'.
const a: object = 1;
```

<br>

하지만, **object 타입의 사용은 지양해야 한다.**
<br>대신에, **interface, class, type 을 사용**하자.

<br>

### 3. unknown type 과 {}
any 타입과 마찬가지로, **unknown 타입으로 선언된 변수에 모든 타입의 값을 대입할 수 있다.**
```ts
const a: unknown = 1;
console.log(a);
```

<br>

TypeScript 4.8 버전부터 다음과 같은 식이 성립한다.
<br>
**unknown = {} | null | undefined**
```ts
const a: unknown = 1;

if(a)
{
    // null, undefined 는 falsy 한 값이므로,
    // 여기서 z 의 타입은 {} 이다.
    console.log(z);
}
else
{
    // 여기서 z 의 타입은 null | undefined
    console.log(z);
}
```