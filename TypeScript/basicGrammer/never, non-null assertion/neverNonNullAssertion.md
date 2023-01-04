# TypeScript never type, |, ! operator

### 1. 빈 배열의 타입
빈 배열의 타입은 never 이다.<br>
(빈 배열의 타입이 never 가 되기 위해서는, **tsconfig.json** 파일에 **strict: true, noImplicitAny: false** 로 설정해야 한다.)
<br>
never 타입? 값의 공집합이다. **즉, 어떤 값도 할당할 수 없는 타입**이다.
그래서, 빈 배열의 경우 타입 선언이 필요하다.
```ts
// 빈 배열의 경우, 타입이 never 여서, 어떤 값도 push 할 수 없다.
const array = [];

const numberArray: number[] = [];
for(let i = 0; i < 5; i++)
{
    numberArray.push(i + 1);
}
```

<br>

### 2. | 연산자
2개 이상의 타입을 선언하고 싶다면, **| 연산자**를 사용한다.
```ts
// 변수 a 에 타입이 number 또는 string 인 값을 할당할 수 있다.
let a: number|string;
a = 1;
a = "Hello";
```

<br>

### 3. Non-null assertion
**Non-null 단언 연산자 !** 는 해당 변수의 값이 null, undefined 가 아니라고 단언한다.

```ts
// 변수 header 의 값이 null 값이 아니라고 단언한다.
const header = document.getElementById("header")!;
header.innerHTML = "<p>Hello</p>";

// 하지만, Non-null 단언 연산자를 사용하지 않는 것이 좋다.
const body = document.getSelection("body");
if(body)
{
    body.innerHTML = "<p>body</p>";
}
else
{
    console.log("the value of body is null.");
}
```
