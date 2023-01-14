# TypeScript Generic II
#### 제네릭에 대해서 
* [TypeScript Generic I ](https://github.com/rlarkdals1202/TypeScript-JavaScript/tree/main/TypeScript/basicGrammer/generic)

### 1. Generic
Type Parameter 에 **전달할 타입을 직접 명시**할 수 있다.
<br>
(TypeScript  **타입 추론을 제대로 하지 못하는 경우**, 타입을 직접 명시한다. 아래 코드는 그냥 예시)
```ts
function printValue<T>(x: T): void
{
    console.log(x);
}

printValue(1);
printValue<string>("abc");
printValue<symbol>(Symbol.for("123"));
```

<br>

### 2. Class, Interface, Type Alias and Generic
**클래스, 인터페이스 Type Alias** 에서도 Generic 을 사용할 수 있다.

#### - 인터페이스, Type Alias 에서 Generic 을 사용하는 경우
```ts
interface Example<T>
{
    val1: T,
    val2: T,
    method1: (x: T, y: T) => void
}

type Ex<T> = Example<T>;

const object1: Example<number> =
    {
        val1: 10,
        val2: 20,
        method1(x: number, y: number)
        {
            console.log(x, y);
        }
    };

const object2: Ex<string> =
    {
        val1: "a",
        val2: "b",
        method1(x: string, y: string)
        {
            console.log(x, y);
        }
    };

console.log(object1.val1, object1.val2);
object1.method1(1, 2);

console.log(object2.val1, object2.val2);
object2.method1("c", "d");
```

<br>

#### - 클래스에서 Generic 을 사용하는 경우
```ts
// Stack Data Structure 구현해보기 (일부분)
// (스택 자료구조)
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
    
    printAll(): void
    {
        for(const element of this.data)
        {
            console.log(element);
        }
    }
    
    // ...
}

const numStack: Stack<number> = new Stack<number>();

console.log(numStack.length());
numStack.printAll();

numStack.push(10);
numStack.push(20);

console.log(numStack.length());
numStack.printAll();
```

<br>

### 3. Array.prototype.forEach, Array.prototype.map 메소드에서의 Generic
Array.prototype.forEach, Array.prototype.map 메소드에 대한 내용
: [forEach, map](https://github.com/rlarkdals1202/JavaScript-Note/blob/master/Note/arrayMethodPartTwo.js)

#### (1). Array.prototype.forEach Method
```ts
interface Array<T>
{
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
}

const numArray: Array<number> = [1, 2, 3];
numArray.forEach(value => console.log(value));
```
위 코드를 보면, TypeScript 가 value 의 타입을 number 로 추론하는데, 이는 **제네릭** 덕분이다.
<br>그러면, 어떻게 제네릭을 통해서 타입 추론을 할까?

1. 먼저, **numArray 배열을 생성하는 순간**, **타입 파라미터 T 에는 number 타입이 전달**된다. 
2. **타입 파라미터 T 에 number 타입이 전달**되었으므로, **Array 인터페이스 내부의 모든 타입 파라미터 T 에는 number 타입이 전달**된다.<br>(그 결과? value: number, array: number[])
3. 그래서 TypeScript 는 value 의 타입을 number 라고 추론할 수 있는 것이다. (**제네릭** 덕분에)

<br>

하나만 더 예를 들자면,
```ts
interface Array<T>
{
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
}

const array = ["a", 1, true];
array.forEach(value => console.log(value));
```
타입 파라미터 T 에 string | number | boolean 타입(Union Type)이 전달된다. (**타입은 배열의 요소값을 보고 추론**)
<br>
타입 파라미터 T 에 string | number | boolean 타입이 전달되었으므로, value 의 타입은 string | number | boolean 이다.

<br>

#### (2). Array.prototype.map Method
```ts
interface Array<T>
{
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
}

const numberArray = [1, 2, 3];
const mappedStrArray = numberArray.map(value => value.toString());
```
위 코드를 보면, TypeScript 가 value 의 타입을 number, mappedStrArray 의 타입을 string[] 으로 추론하는데,
역시 제네릭 덕분이다. 
<br>
그러면 어떻게 제네릭을 통해서 타입 추론을 할까?

1. 먼저 **numberArray 배열을 생성하는 순간, 타입 파라미터 T 에는 number 타입이 전달**된다.
2. **타입 파라미터 T 에 number 타입이 전달**되었으므로, **Array 인터페이스 내부의 모든 타입 파라미터 T 에는 number 타입이 전달**된다. <br> (그 결과? value: number, array: number[])
3. **콜백함수의 리턴값의 타입은 U** 이다. **그리고 map 메소드의 리턴값의 타입은 U[]** 이다.
4. **근데 위에서 콜백함수의 리턴값이 string** 인 것을 알 수 있다. 왜냐하면 {return value.toString();}<br>({return value.toString();} 에서 {}, return 생략하면 value.toString(); 자세한 내용은 화살표 함수 참고)
5. 그래서, **타입 파라미터 U 에는 string 타입이 전달되고, map 메소드의 리턴값의 타입은 string[]** 이 된다.
6. 따라서, TypeScript 는 mappedStrArray 의 타입이 string[] 인 것을 추론할 수 있다.

<br>

하나만 더 예를 들자면,
```ts
interface Array<T>
{
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
}

const stringArray = ["a", "b", "c"];
const mappedNumberArray = stringArray.map(value => value.charCodeAt(0));
```
타입 파라미터 T 에 string 타입이 전달되고, 콜백함수의 리턴값의 타입이 number 이므로, 타입 파라미터 U 에는 number 타입이 전달된다.
map 메소드의 리턴값의 타입이 number[] 이므로, mappedNumberArray 의 타입은 number[] 이다.