export {}

interface Cat
{
    catName: string,
}

interface Dog
{
    dogName: string,
}

// 커스텀 Type Guard 함수
//
// is 연산자는 Type Guard 를 할 때 사용하는 연산자이다.
//
// 아래 animal is Dog 라는 코드를 Type Predicate 라고 한다.
// (Predicate(술어): 주어진 변수 값에 따라, 참이나 거짓이 결정되는 명제)
//
// 커스텀 Type Guard 함수에서 리턴값이 true 이면, Type Predicate 가 참이라고 인식한다.
// (Type Predicate 가 참이면, animal 매개변수의 타입이 Dog 라는 것이다.)
//
// 리턴값이 false 이면, 반대로 animal 매개변수의 타입이 Cat 이라는 것을 알 수 있다.
//
// 정리)
// function example(parameter: A|B) parameter is A {}
// 라는 커스텀 Type Guard 함수가 있을 때,
// 함수의 반환값이 true 이면, parameter 의 타입은 A (왜냐하면, Type Predicate 가 참이므로)
// 함수의 반환값이 false 이면, parameter 의 타입은 B
function isDog(animal: Cat|Dog): animal is Dog
{
    return !!((animal as Dog).dogName);
}

function pet(animal: Cat|Dog): void
{
    if(isDog(animal))
    {
        console.log(animal.dogName);
    }
    else
    {
        console.log(animal.catName);
    }
}

const myDog: Dog = {dogName: "puppy"};
const myCat: Cat = {catName: "kitty"};

pet(myDog);
pet(myCat);