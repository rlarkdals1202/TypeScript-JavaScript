export {}

// Object, {}

// {} 타입과 Object 타입
// {}, Object : 모든 타입(null, undefined 제외)

const x: {} = "Hello";
const y: Object = "Hello";

console.log(x, y);

// 실제 객체를 나타내는 타입은? (객체 타입)
// object
// (단, object 타입의 사용은 지양해야 한다. 대신, interface, class, type 을 사용)

const obj: object = {name: "kim", age: 23};
console.log(obj);

// unknown 타입으로 선언된 변수에 모든 타입의 값을 대입할 수 있다.
// (any 와 마찬가지로)

// unknown = {} | null | undefined
const z: unknown = 1;

if(z)
{
    // null, undefined 는 falsy 한 값이므로, 여기서 z 의 타입은 {}
    console.log(z);
}
else
{
    // 여기서 z 의 타입은 null | undefined
    console.log(z);
}


