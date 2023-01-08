# TypeScript void, declare

### 1. void type
일반적인 함수에서 **리턴해야 할 값이 존재하지 않으면, 함수의 리턴값 타입을 void 라고 선언**하면 된다.<br>
(c 언어에서의 void 하고 비슷하다.)
<br><br>
**return; return undefined; 라고 작성하는 것은 가능하다.**
<br>
(애초에, **return 문을 생략하면, return undefined 가 자동으로 추가되고, return; 만 작성하면, 암묵적으로
undefined 가 반환된다.** -> JavaScript 에서)
```ts
// 반환 값이 존재하는 경우,
function sum(x: number, y: number): number
{
    return (x + y);
}
console.log(sum(1, 2));

// 반환 값이 존재하지 않은 경우,
function foo1(): void
{
    console.log("Hello1");
}

function foo2(): void
{
    console.log("Hello2");
    return;
}

function foo3(): void
{
    console.log("Hello3");
    return undefined;
}

foo1();
foo2();
foo3();
```

<br>

### 2. Method, Callback 함수에서의 void
Method, Callback 함수에서 리턴 값의 타입이 void 인데도, 값을 반환할 수 있다.
<br>
(**Method, Callback 함수에서의 => void: 리턴값이 있어도 사용하지 않겠다!**)
```ts
// 메소드, 콜백함수에서의 => void
// : 리턴값이 있어도 사용하지 않겠다.
interface Human
{
    talk: () => void;
}

const human: Human =
    {
        talk()
        {
            return (3);
        }
    };

function example(callback: () => void): void
{
    
}

example(() => {return (3)});
```

<br>


### 3. declare
declare 키워드는 **tsc (TypeScript Compiler)에게 해당 변수나 함수가 이미 존재한다는 것을 알리는 역할을 한다.**
<br>(다른 파일에서 이미 정의된 변수나 함수를 재정의 할 수 있다.)
```ts
// 만약 다른 파일에 a 라는 식별자를 가지는 변수와 foo 라는 식별자를 가지는
// 함수 foo 가 정의되어 있다면,

declare let a: number;
declare function foo(): void;
// 바로 위 코드의 의미는...
// a 라는 식별자를 갖는 변수와 foo 라는 식별자를 갖는 함수가 어딘가에 이미
// 존재한다는 것을 알린다. (분명 어딘가에 존재한다는 것을 알린다.)
```

<br>

* declare 의 특징: **JavaScript 코드로 변환되지 않는다.**
* declare 를 사용하는 이유: **.js 파일의 변수, 함수를 가져다 쓰는데, 발생하는 에러(타입 에러, 변수, 함수를 찾을 수 없다는 에러)를
방지하기 위해**