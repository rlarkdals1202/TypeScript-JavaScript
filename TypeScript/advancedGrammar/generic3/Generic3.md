# TypeScript Generic III
#### 제네릭에 대해서
* [TypeScript Generic I](https://github.com/rlarkdals1202/TypeScript-JavaScript/tree/main/TypeScript/basicGrammer/generic)
* [TypeScript Generic II](https://github.com/rlarkdals1202/TypeScript-JavaScript/tree/main/TypeScript/advancedGrammar/generic2)

### 1. Custom Type Guard
**커스텀 타입 가드**에 대해서 :
<br>
[Custom Type Guard](https://github.com/rlarkdals1202/TypeScript-JavaScript/tree/main/TypeScript/basicGrammer/customTypeGuard)

<br>

### 2. Array.prototype.filter 메소드에서의 Generic
Array.prototype.filter 메소드에 대한 내용
: [filter](https://github.com/rlarkdals1202/JavaScript-Note/blob/master/Note/arrayMethodPartTwo.js)

<br>

```ts
interface Array<T>
{
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}

const array = [1, 2, 3, 4, 5, 6];
const oddArray = array.filter(value => value % 2 !== 0);
```
위 코드를 보면, TypeScript 가 value 의 타입을 number, oddArray 의 타입을 number[] 로 추론하는데,
이는 **제네릭** 덕분이다.
<br> 그러면, 어떻게 제네릭을 통해서 타입 추론을 할까?

1. 먼저, **array 배열을 생성하는 순간**, **타입 파라미터 T 에는 number 타입이 전달**된다.
2. **타입 파라미터 T 에 number 타입이 전달**되었으므로, **Array 인터페이스 내부의 모든 타입 파라미터 T 에는 number 타입이 전달**된다.<br>(그 결과? value: number, array: number[])
3. S extends number 의 의미: **타입 파라미터 S 에는 number 타입만 올 수 있다**.<br>(**타입 파라미터 S 에는 number 타입이 전달**된다.)
4. **filter 메소드의 리턴값의 타입이 S[]** 이므로, **filter 메소드의 리턴값의 타입은 number[]** 이다.<br>(왜냐하면, 타입 파라미터 S 에는 number 타입이 전달)
5. 그래서, TypeScript 는 oddArray 의 타입을 number[] 타입이라고 추론할 수 있는 것이다.

<br>

TypeScript 가 타입 추론을 잘 못하는 경우도 있다.
```ts
interface Array<T>
{
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}

const array = [1, "2", 3, "4", 5, "6"];
const filteredArray = array.filter(value => typeof value === "string");
```
위 코드를 보면, TypeScript 가 filteredArray 의 타입을 string 으로 추론해야 하는데, string | number 타입으로 추론한다.
<br>string | number 타입으로 추론하는 과정을 살펴보면,
1. 먼저, array 배열을 생성하는 순간, 타입 파라미터 T 에는 string | number 타입이 전달된다.
2. 타입 파라미터 T 에 string | number 타입이 전달되었으므로, Array 인터페이스 내부의 모든 타입 파라미터 T 에는 string | number 타입이 전달된다.
3. 결과적으로, filter 메소드의 리턴값의 타입은 (string | number)[] 이다.

<br>

TypeScript 가 filteredArray 의 타입을 string 으로 추론하게 하려면,
어떻게 해야할까?
<br>
: 타입 추론을 정확하게 할 수 있도록 **콜백함수를 수정**해주면 된다.
<br>(어떻게? Array 인터페이스 내부의 첫 번째 filter 메소드에서의 predicate 콜백함수의 형태를 따르자.)
```ts
interface Array<T>
{
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}

const array = [1, "2", 3, "4", 5, "6"];

const predicate = (value: string|number): value is string => typeof value === 'string';
const filteredArray = array.filter(predicate);
```
위 코드를 보면, 이제 TypeScript 가 filteredArray 의 타입을 string[] 으로 추론하는 것을 볼 수 있다.
<br>
그러면, 어떻게 제네릭을 통해서 타입 추론을 할까?
1. 먼저, **array 배열을 생성하는 순간, 타입 파라미터 T 에는 string | number 타입이 전달**된다.
2. **value is string** 을 통해서, **타입 파라미터 S 에는 string 타입이 전달**된다. <br> (이것이 가능한 이유: **S extends string | number**, 타입 파라미터 S 에는 string 또는 number 타입만 올 수 있다.)
3. **타입 파라미터 S 에 string 타입이 전달**되었으므로, **filter 메소드의 리턴값의 타입은 string[]** 이다.
4. 그래서, TypeScript 가 filteredArray 의 타입을 string[]으로 추론할 수 있는 것이다.