export {}

interface Array<T>
{
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
}

// filter

// 첫 번째 filter 함수가 사용됨.

// 제네릭을 통한 타입 추론 과정
// (1). 타입 파라미터 T 에 number 타입이 전달된다.
// (2). S extends number 의 의미: 타입 파라미터 S 에는 number 타입만 올 수 있다. -> 타입 파리미터 S 에는 number 타입이 전달
// (3). filter 메소드의 리턴값의 타입은 number[]
// (왜냐하면, 타입 파라미터 S 에 number 타입이 전달되었으므로)
// (4). 따라서 oddArray 의 타입을 number[] 타입이라고 추론 가능
const array = [1, 2, 3, 4, 5, 6];
const oddArray = array.filter(value => value % 2 !== 0);

// 타입 추론을 잘 못하는 경우
// (filteredArray 의 타입을 string 으로 추론해야 하는데, string | number 타입으로 추론함.)
const array2 = [1, "2", 3, "4", 5];
const filteredArray = array2.filter(value => typeof value === "string");

// 타입 추론을 잘 못하는 이유
// 먼저, filteredArray 의 타입을 string | number 타입으로 추론하는 이유
// (1). 타입 파라미터 T 에 string | number 타입이 전달된다.
// (2). 결과적으로 filter 메소드의 리턴값의 타입이 string | number 타입이 된다. (첫 번째, 두 번째 filter 함수 둘 다)

// 타입 추론을 정확하게 할 수 있도록 콜백함수를 수정해주면 된다.
// (Array 인터페이스 내부의 첫 번째 filter 함수에서, predicate 콜백함수의 형태를 따르자.)
// (화살표 함수에서 반환값이 true 이면, Type Predicate 가 참이라고 인식해, value 의 타입은 string)
// (value is S 이므로, 타입 파라미터 S에는 string 타입이 전달됨. 따라서, filter 메소드의 리턴값의 타입은 string[])
const predicate = (value: string|number): value is string => typeof value === 'string';
const filteredArray2 = array2.filter(predicate);
