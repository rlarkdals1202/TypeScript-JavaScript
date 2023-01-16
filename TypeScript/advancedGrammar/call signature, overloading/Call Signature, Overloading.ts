export {}

// 일반적인 함수 정의
// (1). 함수 선언문
function ex1(x: number): void
{
    console.log(x);
}
ex1(1);

// (2). 함수 표현식
const ex2 = function (x: number): void
{
    console.log(x);
}
ex2(2);

// (3). 화살표 함수
const ex3 = (x: number, y: number): void =>
{
    console.log(x, y);
}
ex3(3, 3);

// call signature
// 함수의 파라미터와 리턴값의 타입을 모두 미리 선언하는 것

// 함수 표현식에서의 call signature
// const/let 함수이름: (매개변수: 타입) => 리턴값 타입 = function (매개변수) {}
const printBool: (x: boolean) => void = function (x)
{
    console.log(x);
}

printBool(true);

// 화살표 함수에서의 call signature
// const/let 함수이름: (매개변수: 타입) => 리턴값 타입 = (매개변수) => {}
const printString: (x: string, y: string) => void = (x, y) => console.log(x, y);
printString("a", "b");

// Type Alias 를 사용해서 함수의 파라미터와 리턴값의 타입을 모두 미리 선언하기
// type 함수 타입 이름 = (매개변수: 타입) => 리턴값 타입
// (함수 표현식에서의 함수 타입을 미리 선언한 것으로 볼 수 있다.)
type PrintNum = (x: number, y: number) => void;

const printNum: PrintNum = (x, y) => console.log(x, y);
printNum(10, 20);

// Interface 를 사용해서 함수의 파라미터와 리턴값의 타입을 모두 미리 선언하기
// interface 함수 타입 이름 { (매개변수: 타입): 리턴값 타입 }
interface PrintNumberArray
{
    (x: number[], y: number[]): void,
}

const printNumberArray: PrintNumberArray = (x, y) => console.log(x, y);
printNumberArray([1, 2, 3], [4, 5, 6]);


// 함수 오버로딩
// 함수 오버로딩(function overloading) 이란,
// 같은 이름의 함수를 중복하여 정의하는 것이다.
// (타입 스크립트에서는 같은 이름의 함수를 중복하여 선언하고,
//  함수를 구현할 때는 any 타입을 사용한다.)
//
// 오버로드 된 함수는 단 한 번만 구현할 수 있다.
// 이때는, 함수 구현할 때 any 타입을 써도 상관없다.
function add(x: number, y: number): number;
function add(x: string, y: string): string;

function add(x: any, y: any): any
{
    return (x + y);
}

console.log(add(10, 20));
console.log(add("a", "b"));

// 클래스, 인터페이스 내부에서의 함수 오버로딩

// (매개변수: 타입): 리턴값 타입 형식으로 함수 타입을 미리 선언(call signature)하는 것은
// 함수 오버로딩을 지원한다.
interface Add
{
    (x: number, y: number): number,
    (x: string, y: string): string,
}

const add1: Add = (x: any, y: any): any => x + y;
console.log(add1(10, 20));
console.log(add1("a", "c"));

class A
{
    add(x: number, y: number): number;
    add(x: string, y: string): string;
    add(x: any, y: any): any
    {
        return (x + y);
    }
}

console.log(new A().add(10, 20));
console.log(new A().add("a", "d"));