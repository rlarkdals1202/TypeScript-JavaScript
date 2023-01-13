export {}

// 디폴트 파라미터
// (Default Parameter)
// Parameter: Type = Default Value

function sum(a: number = 3, b: number = 3): number
{
    return (a + b);
}

console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));


// 객체의 경우
function printObject(object:{name: string} = {name: "kim"}): void
{
    console.log(object);
}

printObject();
printObject({name: "Lee"});

// React JSX 에서의 Generic
// 태그와 구별을 잘 못하기에, 타입 파라미터에 기본값을 넣어준다.
// (예를 들어, <div></div> 하고 <T>)
//
// 그 외?
// (1). extends unknown
// (2). 타입 파리미터 뒤에 콤마

function example<T = unknown>(x: T): void
{
    console.log(x);
}

function example2<T extends unknown>(x: T): void
{
    console.log(x);
}

function example3<T,>(x: T): void
{
    console.log(x);
}

example(1);
example2("a");
example3(true);