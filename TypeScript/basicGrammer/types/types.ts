export {};

// TypeScript 는 변수, 매개변수, 리턴값에 타입을 붙이면 된다.

const a: number = 5;
const b: string = "Hello World!";
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for('123');
let g: any = 1234;
g = "";
g = true;
g = NaN;

// function 함수이름(매개변수: 타입): 리턴값 타입 {}
function add(x: number, y: number): number
{
    return (x + y);
}

console.log(add(100, 200));

// 타입과 함수 정의 부분을 분리할 수 있음.
function minus(x: number, y: number): number;
function minus(x: any, y: any)
{
    return (x - y);
}

console.log(minus(100, 200));

// 화살표 함수이름: 타입 = (매개변수) => {}
// 타입 구조?
// (매개변수: 타입) => 리턴값 타입
const add2: (x: number, y: number) => number = (x, y) => x + y;

// Type Alias
type Add = (x: number, y: number) => number;
const add3: Add = (x, y) => x + y;

// 객체: {프로퍼티: 타입}
const object: {x: number, y: number} =
    {
        x: 10,
        y: 20,
    };

// 배열: 배열 타입[]
// 배열: Array<타입> (제네릭 이용)
const stringArray: string[] = ["1", "2", "3"];
const numberArray: Array<number> = [1, 2, 3];
const booleanArray: boolean[] = [true, false];
const symbolArray: Array<symbol> = [Symbol.for("1"), Symbol.for("2")];

// 튜플(Tuple): 길이가 고정된 배열
const array: [number, number, string] = [1, 0.1, "k"];

// 고정된 Primitive Value 를 할당할 수 있다.
const t: true = true;
const five:5 = 5;
