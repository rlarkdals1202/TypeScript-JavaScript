# TypeScript Type Guard

**Type Guard(타입 가드), 타입 좁히기를 통해서 tsc(TypeScript Compiler)가 타입을 예측할 수 있도록 타입을 좁혀 주어서(Narrowing),
좀 더 type safety 함을 보장할 수 있다. (타입 안전성 보장)**
<br><br>
TypeScript 에서 Type Guard 를 하는 방법
* **typeof 키워드를 활용해서 Type Guard**
* **instanceof 키워드를 활용해서 Type Guard**
* **Property Value 를 통해서 Type Guard**
* **Property Key, in 연산자를 통해서 Type Guard**

(참고로, Type Guard 를 할 땐, **as 키워드를 사용하지 말아야 한다**.<br>
as 키워드는 unknown 타입이 있을 때만 사용하자.)
<br>

### 1. typeof 키워드를 활용해서 Type Guard 하기 (Primitive Value 인 경우)
Type Guard 를 하지 않았을 때의 코드와 에러
```ts
// 에러가 있는 코드)
//
// Property 'toFixed' does not exist on type 'string | number'.
// Property 'toFixed' does not exist on type 'string'.
// (마지막 에러 메시지를 잘 보면 되는데, string 타입에는 toFixed 가 존재하지 않는다는 것이다.)
// (toFixed 는 number 타입인 변수, 값을 통해서만 호출가능)
function numberOrString(parameter: number|string): void
{
    parameter.toFixed(1);
}
```

<br>

조건문과 typeof 키워드를 사용해서 Type Guard 를 하면,
```ts
// typeof: 값의 타입을 문자열로 반환한다.
function numberOrString(parameter: number|string): void
{
    if(typeof parameter === `string`)
    {
        console.log(parameter.split(','));
    }
    else
    {
        console.log(parameter.toFixed(1));
    }
}

numberOrString("123");
numberOrString(1);
```

<br>

배열 같은 경우, **Array.isArray 정적 메소드**를 통해, Type Guard 를 할 수 있다.
```ts
// Array.isArray 정적 메소드
// : 전달된 인수가 배열이면 true 를 반환하고, 아니면 false 를 반환한다.
function numberOrNumArray(parameter: number|number[]): void
{
    if(Array.isArray(parameter))
    {
        console.log(parameter.join(","));
    }
    else
    {
        console.log(parameter.toFixed(2));
    }
}

numberOrNumArray([1, 2, 3]);
numberOrNumArray(2);
```

<br>

### 2. instanceof 키워드를 활용해서 Type Guard 하기(Instance 인 경우)
어떤 클래스로부터 만들어진 인스턴스인지 구분하기 위해, **instanceof 키워드**를 활용할 수 있다.
```ts
class A
{
    aaa(): void
    {
        console.log("aaa");
    }
}

class B
{
    bbb(): void
    {
        console.log("bbb");
    }
}

// 인스턴스의 타입은 클래스 이름으로 선언한다!
// (인스턴스란? 클래스로부터 만들어진 실체, 실제 객체)
//
// (클래스 자체의 타입을 알아보고 싶다면, 'typeof 클래스'
//  JavaScript 에서 클래스의 타입은 function 이다..)
function aOrB(parameter: A|B): void
{
    // 만약 인스턴스가 A 클래스로부터 만들어졌다면,
    if(parameter instanceof A)
    {
        parameter.aaa();
    }
    else
    {
        parameter.bbb();
    }
}

aOrB(new A());
aOrB(new B());
```

<br>

### 3. Property Value 활용해서 Type Guard 하기 (Object 인 경우)
**Property Value** 를 보고, TypeScript 가 알아서 객체의 타입을 구별해준다.
```ts
type C = {type: "c", ccc: "ccc"};
type D = {type: "d", ddd: "ddd"};
type E = {type: "e", eee: "eee"};

// Property Value 로 객체의 타입을 구별하기
function typeChecking(t: C|D|E): void
{
    if(t.type === "c")
    {
        console.log(t.ccc);
    }
    else if(t.type === "d")
    {
        console.log(t.ddd);
    }
    else
    {
        console.log(t.eee);
    }
}

typeChecking({type: "c", ccc: "ccc"});
```

<br>

### 4. Property Key, in 연산자를 활용해서 Type Guard 하기 (Object 인 경우)
**Property Key 와 in 연산자**를 활용해서, Type Guard 를 할 수 있다.
<br>
* **in 연산자: 명시된 Property Key 가 명시된 객체에 존재하면, true 를 반환하고, 아니면 false 를 반환한다.** 
```ts
// Property Key, in 연산자를 활용해서 타입 구별하기
type C = {ccc: "ccc"};
type D = {ddd: "ddd"};
type E = {eee: "eee"};

function typeChecking(t: C|D|E): void
{
    if('ccc' in t)
    {
        console.log(t.ccc);
    }
    else if('ddd' in t)
    {
        console.log(t.ddd);
    }
    else
    {
        console.log(t.eee);
    }
}
```

<br>

### 5. Object 생성 Tip
객체를 생성할 때, **type 이라는 Property 를 추가하는 것**이 나중에 도움이 될 수 있다.
<br>(왜냐하면, 나중에 객체의 타입을 구별할 때, 편리할 수 있다. -> Property Value 로 객체의 타입을 구별할 수 있으므로)
```ts
type Human = {type: "human", humanName: string};
type Dog = {type: "dog", dogName: string};
type Cat = {type: "cat", catName: string};

const human: Human = {type: "human", humanName: "kim"};
const dog: Dog = {type: "dog", dogName: "puppy"};
const cat: Cat = {type: "cat", catName: "kitty"};

function animalCheck(animal: Human|Cat|Dog): void
{
    if(animal.type === "human")
    {
        console.log(animal.humanName);
    }
    else if(animal.type === "dog")
    {
        console.log(animal.dogName);
    }
    else
    {
        console.log(animal.catName);
    }
}

animalCheck(human);
animalCheck(dog);
animalCheck(cat);
```

<br>

아니면, **Property Key, in 연산자를 가지고**, 객체의 타입을 구별한다.
<br>(4번에 in 연산자를 활용한 예시처럼)