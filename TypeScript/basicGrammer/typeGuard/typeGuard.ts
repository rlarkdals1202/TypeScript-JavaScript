export {};

// Type Guard
// 타입 가드, 타입 좁히기

// 에러가 있는 코드
//
// Property 'toFixed' does not exist on type 'string | number'.
// Property 'toFixed' does not exist on type 'string'.
// (마지막 에러 메시지를 잘 보면 되는데, string 타입에는 toFixed 가 존재하지 않는다는 것이다.)
// (toFixed 는 number 타입인 변수, 값을 통해서만 호출가능)
//
// function numberOrString(parameter: number|string): void
// {
//     parameter.toFixed(1);
// }

// 타입 가드, 타입 좁히기을 수행할 땐 as 키워드를 사용하지 말자.
// (as 키워드는 unknown 타입이 있을 때만 사용하자.)
//
// 타입 가드, 타입 좁히기를 수행할 땐, typeof 키워드를 사용하자.
// (원시 값인 경우)
function numberOrString(parameter: number|string): void
{
    if(typeof parameter === `string`)
    {
        console.log(parameter.split(','));
    }
    else
    {
        console.log(parameter.toFixed(1));
    }
}

numberOrString('123');
numberOrString(1);


// 배열 구분하기
// 배열은 Array.isArray 메소드를 사용하자.
function numberOrNumArray(parameter: number|number[]): void
{
    if(Array.isArray(parameter))
    {
        console.log(parameter.join(","));
    }
    else
    {
        console.log(parameter.toFixed(1));
    }
}

numberOrNumArray([1, 2, 3]);
numberOrNumArray(2);

// 어떤 클래스의 인스턴스인지 구분하기
// instanceof 연산자 사용하자.
class A
{
    aaa(): void
    {
        console.log("aaa");
    }
}

class B
{
    bbb(): void
    {
        console.log("bbb");
    }
}

// 인스턴스의 타입은 클래스 이름으로 선언한다.
// (인스턴스: 클래스로부터 만들어진 실체, 실제 객체)
//
// (* 클래스 자체의 타입은 typeof 클래스)
function aOrB(parameter: A|B): void
{
    // 만약 인스턴스가 A 클래스로부터 만들어졌다면,
    if(parameter instanceof A)
    {
        parameter.aaa();
    }
    else
    {
        parameter.bbb();
    }
}

aOrB(new A());
aOrB(new B());

// 객체 타입 체크하기
//
// 프로퍼티를 보고 타입스크립트가 알아서 객체 타입을 구별해준다.
type C = {type: "c", ccc: "ccc"};
type D = {type: "d", ddd: "ddd"};
type E = {type: "e", eee: "eee"};

// Property Value 로 객체 타입 구별하기
function typeChecking(t: C|D|E): void
{
    if(t.type === 'c')
    {
        console.log(t.ccc);
    }
    else if(t.type === 'd')
    {
        console.log(t.ddd);
    }
    else
    {
        console.log(t.eee);
    }
}

typeChecking({type: "c", ccc: "ccc"});

// Property Key 로 객체 타입 구별하기
function typeChecking2(t: C|D|E): void
{
    // in 연산자
    // : 명시된 Property Key 가 명시된 객체에 존재하면, true 를 반환하고, 아니면 false 를 반환한다.
    if('ccc' in t)
    {
        console.log(t.ccc);
    }
    else if('ddd' in t)
    {
        console.log(t.ddd);
    }
    else
    {
        console.log(t.eee);
    }
}

typeChecking2({type: "d", ddd: "ddd"});

// 객체 만들 때, type 이라는 Property 를 추가하는 것이 좋다.
// (왜냐하면, 나중에 객체 타입 구별할 때, 편리하다. -> Property Value 로 객체 타입
//  구별할 수 있으므로.)
type Human = {type: "human"};
type Cat = {type: "cat"};
type Dog = {type: "dog"};

const human: Human = {type: "human"};
const dog: Dog = {type: "dog"};
const cat: Cat = {type: "cat"};

function animalCheck(animal: Human|Cat|Dog): void
{
    if(animal.type === "human")
    {
        console.log("Human");
    }
    else if(animal.type === "cat")
    {
        console.log("cat");
    }
    else
    {
        console.log("dog");
    }
}

animalCheck(human);

// 아니면, Property Key 를 가지고, 객체의 타입을 구별한다.
// (위에 in 연산자를 활용한 예시처럼)