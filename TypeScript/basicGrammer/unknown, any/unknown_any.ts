export {}

// unknown, any

// any 보다는 unknown 을 사용하라.
// any 를 사용하는 순간, 타입 검사를 하지 않는다. (타입 선언 포기)
// => 타입스크립트를 사용하는 이유가 사라짐.
const a: any = 1;

// unknown 은 타입을 정확하게 모를 때 선언하면 된다.
// (후에 직접 타입 정하면 됨.)
//
// unknown 을 사용하는 순간, 개발자가 직접 타입을 정해주어야 한다.
const b: unknown = "abc";

// 문자열 관련 메소드를 사용하고 싶다면, 직접 타입을 string 으로 정해주자.
console.log((b as string).toLowerCase())

// try catch 와 unknown
try
{

}

// 여기서 에러 타입이 unknown 이다. (왜냐하면 어떤 타입의 에러가 발생할지 모르기 때문이다.)
catch(error)
{
    // 직접 타입을 Error 로 정함.
    console.log((error as Error).message);
}

// 타입 간 대입 가능 표
// 참고자료)
// https://github.com/ZeroCho/ts-all-in-one