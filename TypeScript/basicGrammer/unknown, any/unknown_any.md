# TypeScript any, unknown type

### 1. any

any 타입으로 선언된 변수에는 어떤 타입의 값도 대입할 수 있다.
```ts
let a: any = 1;
a = "abc";
a = true;
a = Symbol.for("123");
```

<br>

하지만, **any 타입을 사용하는 순간, TypeScript 가 타입 검사를 하지 않는다. (타입 선언 포기)**
<br> 타입 검사를 하지 않으면, TypeScript 를 사용하는 이유가 사라진다.
<br>(any 타입을 사용할 땐, 신중해야 한다.)

<br>

### 2. unknown
unknown 타입으로 선언된 변수에는 어떤 타입의 값도 대입할 수 있다.
**unknown 타입은 지금 당장 어떤 타입을 선언해야 할 지 정확하게 모를 때 선언하면 된다.**
<br>
(**나중에, 개발자가 직접 타입을 정해주어야 한다.**)
```ts
const b: unknown = "abc";

// 문자열 관련 메소드를 사용하고 싶다면, 직접 타입을 string 으로 정해주자.
// (as 키워드를 통해서)
console.log((b as string).toLowerCase());
```

<br>

**try ... catch 문에서 error 변수의 타입은 unknown** 이다.
<br>
(왜냐하면, **어떤 타입의 에러가 발생할지 모르기 때문이다.**)
```ts
try
{
    
}
catch(error)
{
    // 직접 타입을 Error 로 정함.
    console.log((error as Error).message);
}
```

### 3. 타입 간 대입 가능 표
<img src="https://user-images.githubusercontent.com/10962668/179646513-3c3be896-3bbc-4784-848b-06bc47e8b129.png">

(이미지 출처: [ZeroCho 님 깃허브](https://github.com/ZeroCho/ts-all-in-one))
```ts
// 예시) any 타입의 변수 값을 unknown 타입의 변수에 대입할 수 있음.
const a: any = 1;
const b: unknown = b;
```
