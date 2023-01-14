export {}

// 타입 파라미터에 전달할 타입을 직접 명시할 수 있다.
function printNumber<T>(x: T, y: T): void
{
    console.log(x, y);
}

printNumber(1, 2);

// 타입을 직접 명시하는 경우.
// (언제 직접 명시하나? TypeScript 가 타입 추론을 제대로 하지 못하는 경우 )
printNumber<string>("a", "b");

// 클래스, 인터페이스, Type Alias 에서도 Generic 을 사용할 수 있다.

type Arr<T> = Array<T>;

class Stack<T>
{
    private data: T[];

    constructor()
    {
        this.data = [];
    }

    push(item: T): void
    {
        this.data.push(item);
    }

    length(): number
    {
        return (this.data.length);
    }

    //...
}


// forEach, Map Generic
interface Array<T>
{
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
}


// Array.prototype.forEach 메소드에서 generic 이 어떻게 사용되었는지
// 살펴보기.
//
// TypeScript 가 element 의 타입을 number 라고 추론하는데,
// 이는 Generic 덕분이다!
// 어떻게?
// (1). 배열을 아래와 같이 생성하는 순간, 타입 파라미터에는 number 타입이 전달된다.
const numArray: Array<number> = [1, 2, 3];

// (2). 타입 파라미터에 number 타입이 전달되었으므로, Array 인터페이스 내부의
// 모든 타입 파라미터에는 number 타입이 전달된다.
// (그 결과? value: number, array: number[])

// (3). 그래서, element 의 타입을 number 라고 추론할 수 있는 것이다.
numArray.forEach(element => console.log(element));


// 타입이 string, boolean 인 경우도 확인해보자.
const strArray: Array<string> = ["a", "b", "c"];
strArray.forEach(value => console.log(value));

const boolArray: Array<boolean> = [true, false];
boolArray.forEach(value => console.log(value));

// 아래 같은 경우는?
// (타입은 배열의 요소값보고 추론)

// 타입 파라미터에 string | number | boolean 타입(Union Type)이 전달되어,
// value: string | number | boolean, array: (string | number | boolean) []
const array = ["a", 1, true];
array.forEach(value => console.log(value));


// Array.prototype.map 메소드에서 generic 이 어떻게 사용되었는지
// 살펴보기

const numArr = [1, 2, 3];

const mappedStrArr = numArr.map(value => value.toString());

// 타입 스크립트가 mappedStrArr 의 타입을 string[] 으로 추론하는데,
// 이는 Generic 덕분이다!
// 어떻게?

// (1). 배열을 아래와 같이 생성하는 순간, 타입 파라미터에는 number 타입이 전달된다.
const numberArr: Array<number> = [1, 2, 3];

// (2). 타입 파라미터에 number 타입이 전달되었으므로, Array 인터페이스 내부의
// 모든 타입 파라미터에는 number 타입이 전달된다.
// (그 결과? value: number, array: number[])

// (3). 콜백함수의 리턴값의 타입은 U이다. 그리고, map 메소드의 리턴값의 타입은
// U[] 이다.
// 근데 위에서 콜백함수의 리턴값이 string 인 것을 알 수 있다. 왜냐하면 {return value.toString();}
// 그러면, 타입 파라미터 U 에는 string 타입이 전달되고, map 메소드의 리턴값의 타입은
// string[] 이 된다.
//
// 따라서, mappedStrArr 의 타입이 string[] 인 것을 알 수 있다.

// 다른 경우도 살펴보자.
// (위와 같은 과정으로 살펴보면, numMappedArr 의 타입이 number [] 인 것을 알 수 있다.)
// (왜냐하면, 콜백함수의 리턴값의 타입은 number 이고, 타입 파라미터 U 에는 number 타입이 전달.
//  따라서, map 메소드의 리턴값의 타입은 number[])
const stringArr = ["a", "b", "c"];

const numMappedArr = stringArr.map(value => value.charCodeAt(0));

