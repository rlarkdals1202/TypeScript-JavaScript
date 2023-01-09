# TypeScript Custom Type Guard

### 1. Custom Type Guard 
**타입을 구별해주는 커스텀 Type Guard 함수**를 개발자가 직접 만들 수 있다.
<br>
커스텀 Type Guard 함수를 만들 때는, **is 연산자를 함께 사용**한다.
<br>
**(is 연산자: Type Guard 를 할 때 사용하는 연산자)**

<br>

커스텀 Type Guard 함수의 예시)
```ts
interface Cat
{
    catName: string,
}

interface Dog
{
    dogName: string,
}

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
```
위 isDog 함수에서, animal is Dog 라는 코드를 **Type Predicate** 라고 한다.
<br>
**(Predicate(술어): 주어진 변수 값에 따라, 참이난 거짓이 결정되는 명제)**
<br><br>
커스텀 Type Guard 함수(위 예시에선 isDog 함수)에서, 반환값이...
* **true 이면, Type Predicate 가 참이라고 인식**한다.<br>(**Type Predicate 가 참이면, animal 매개변수의 타입이 Dog 라는 것이다.**)
* **false 이면, 반대로 animal 매개변수의 타입이 Cat 이라는 것을 알 수 있다.**

<br>

#### 정리. )
function example(parameter: A|B) parameter is A {} 라는 커스텀 Type Guard 함수가 있다고 하자.
* **함수의 반환값이 true 이면, parameter 의 타입은 A** 이다. (왜냐하면, **Type Predicate 가 참**이므로. (**함수의 반환값이 true 이면, Type Predicate 가 참이라고 인식**))
* **함수의 반환값이 false 이면, parameter 의 타입은 B** 이다.