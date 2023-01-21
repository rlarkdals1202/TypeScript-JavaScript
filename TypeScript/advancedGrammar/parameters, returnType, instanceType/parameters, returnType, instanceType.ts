export {};

// Parameters Type
// 타입 파라미터 T 에 전달된 함수 타입의 매개변수의 타입으로 구성된
// 새로운 튜플 타입을 정의한다.

function zip(x: number, y: string, z: boolean): {x: number, y: string, z: boolean}
{
    return {x, y, z};
}

// typeof : 값을 타입으로 쓰고 싶을 때 사용
type Params = Parameters<typeof zip>;
type N = Params[0];
type S = Params[1];
type B = Params[2];


// ReturnType
// 타입 파라미터 T 에 전달된 함수 타입의 리턴값의 타입으로 구성된
// 새로운 타입을 정의한다.

type Num = ReturnType<(x: number, y: number) => number>;
type Str = ReturnType<() => string>;
type Bool = ReturnType<() => boolean>;

type VoidFunc = (x: string, y: string) => void;
type Void = ReturnType<VoidFunc>;

interface ObjectFunc
{
    (x: number, y: number): {x: number, y: number},
}

type Object = ReturnType<ObjectFunc>;

function stringReverse(string: string): string
{
    const stringArray = Array.from(string);
    const reversedStringArray = stringArray.reverse();
    return (reversedStringArray.join(""));
}

// typeof 키워드: 값을 타입으로 쓰고싶을 때 사용한다.
type String = ReturnType<typeof stringReverse>;


// InstanceType
// 타입 파라미터 T 에 전달되는 생성자 함수 타입에서 해당 생성자 함수가 반환하는 인스턴스의 타입으로 구성된
// 새로운 타입을 정의한다.
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

type A = InstanceType<typeof Animal>;

const dog: Animal = new Animal("puppy", 10);
const cat: A = new Animal("kitty", 8);