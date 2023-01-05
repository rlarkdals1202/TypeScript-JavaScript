export {};

const a: string = "Hello";

// 타입 선언시 Wrapper 객체(Number, String, ...)를 사용하지 말아야 한다.
const b: String = "Hello";
const c: Boolean = true;

// Type Alias (타입 별칭)
type n = number;
const num: n = 1;

type World = "world";
const d: World = "world";

// Type Alias 에서 Template Literal 도 사용가능하다.
// (Template Literal: 내장된 표현식을 허용하는 문자열 리터럴)
type Greeting = `hello ${World}`;

// Rest Parameter
// Rest Parameter 는 매개변수 이름 앞에 ...을 붙여서 정의한 매개변수이다.
// Rest Parameter 는 함수에 전달된 인수들의 목록을 배열로 전달받는다.
// (...Parameter: 타입)
function sum(...numbers: number[])
{
    return (numbers.reduce((sum, value) => sum += value, 0));
}
console.log(sum(1, 2, 3, 4, 5));

// Tuple
// Tuple: 길이가 고정된 배열
const tuple: [number, string] = [10, "a"];

// 튜플은 길이가 고정되어 있으므로, 새로운 요소를 추가할 수 없다.
// tuple[3] = 1;

// 하지만, push 메소드로 요소를 추가하는 것이 가능하다..
tuple.push(10);