# TypeScript Utility Types - Parameters, ReturnType, InstanceType Type

TypeScript 는 **일반적인 타입 변환을 쉽게 하기 위해서 몇 가지 유틸리티 타입을 제공**한다.
<br>
(여기서 알아볼 유틸리티 타입은 Parameters, ReturnType, InstanceType)

### 1. Parameters Type
#### Parameters Type 의 기능
: **타입 파라미터 T 에 전달된 함수 타입의 매개변수의 타입으로 구성된 새로운 튜플 타입을 정의**한다.
```ts
function toObject(x: number, y: string, z: boolean): {x: number, y: string, z: boolean}
{
    return ({x, y, z});
}

// typeof 키워드: 값을 타입으로 쓰고 싶을 때 사용한다.
type Params = Parameters<typeof toObject>;

type Num = Params[0];
type Str = Params[1];
type Bool = Params[2];

const num: Num = 1;
const str: Str = "abc";
const bool: Bool = true;
```

<br>

### 2. ReturnType Type
#### ReturnType Type 의 기능
: **타입 파라미터 T 에 전달된 함수 타입의 리턴값의 타입으로 구성된 새로운 타입을 정의**한다.
```ts
type Num = ReturnType<(x: number, y: number) => number>;
type Str = ReturnType<() => string>;
type Bool = ReturnType<() => boolean>;

type VoidFunc = (x: string, y: string) => void;
type Void = ReturnType<VoidFunc>;

interface ObjectFunc
{
    (x: number, y: number): {x: number, y: number};
}

type Object = ReturnType<ObjectFunc>;

function stringReverse(string: string): string
{
    const stringArray = Array.from(string);
    const reversedStringArray = stringArray.reverse();
    return (reversedStringArray.join(""));
}

// typeof 키워드: 값을 타입으로 쓰고 싶을 때 사용한다.
type String = ReturnType<typeof stringReverse>

type Generic = ReturnType<<T extends number>() => T>;
```

<br>

### 3. InstanceType Type
#### InstanceType Type 의 기능
: **타입 파라미터 T 에 전달되는 생성자 함수 타입에서 해당 생성자 함수가 반환하는 인스턴스의 타입으로 구성된 새로운 타입을 정의**한다.
```ts
class Animal
{
    public name: string;
    public age: number;
    
    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }
}

// typeof 키워드: 값을 타입으로 쓰고 싶을 때 사용한다.
type A = InstanceType<typeof Animal>;

const dog: Animal = new Animal("puppy", 10);
const cat: A = new Animal("kitty", 10);
```