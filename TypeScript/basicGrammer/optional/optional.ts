export {};

// Optional Parameter
// 선언된 매개변수의 개수만큼 인수를 전달하고 싶지 않게 만들고 싶다면, ?를 사용하면 된다.
//
// 인수를 전달하지 않으면, 선택적 매개변수 (Optional Parameter) 에는 undefined 가 할당된다.
//
// 참고) ?? 연산자는 Null Coalescing Operator (null 병합 연산자) 라고 부른다.
// 좌항의 피연산자 값이 오직 null, undefined 인 경우에만, 우항의 피연산자 값을 반환하고,
// 아니면 좌항의 피연산자 값을 반환한다.
//
// b, c 매개변수에 값을 전달하지 않아도 된다.
// (단, undefined 가 할당.)
function sum(a: number, b?: number, c?: number)
{
    return (a + (b ?? 1) + (c ?? 2));
}

console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

// Optional Property
// 객체 타입에서 선언된 프로퍼티는 반드시 구현해야 하는데, 프로퍼티가 선택적으로 필요한
// 경우가 존재한다. 이때, Optional Property 를 사용하면 된다. (Property 뒤에 ?를 붙이면 된다.)
// (선택적 프로퍼티는 구현해도 되고, 안해도 된다.)
// (인터페이스, type alias 에서도 사용 가능)
type O = {a: string, b?: number};

const object1: O = {a: "123", b: 1};
console.log(object1);

const object2: O = {a: "abc"};
console.log(object2);

const object3: {a?: number, b?: number} =
    {
        a: 1,
    };
console.log(object3);

interface O4
{
    a: string,
    b: string,
    c?: number,
}

const object4: O4 = {a: "a", b: "b"};
console.log(object4);

// 참고)
// Optional Chaining (옵셔널 체이닝)
// 객체를 가리키는(참조하는) 참조변수의 값이 null, undefined 인지 확인하고, Property 를
// 참조하고 싶을 때 유용하다. (연산자는 ?.)
//
// 좌항 피연산자의 값이 오직 null, undefined 인 경우에만, null, undefined 를 반환하고, 아니면
// 우항의 Property 참조를 이어간다.

const dog: {name: string, age: number, owner: {name: string}, hello:() => void} =
    {
        name: "puppy",
        age: 8,
        owner:
            {
                name: "kim",
            },

        hello()
        {
            console.log(`${this.name}이 반갑다고 인사합니다.`);
        }
    };

console.log(dog?.age);
console.log(dog?.name);
console.log(dog?.owner?.name);
dog?.hello();