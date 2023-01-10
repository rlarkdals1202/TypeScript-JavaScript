export {};

// class

class A
{
    // Instance Property

    // public property 는 외부에서 접근이 가능하다.
    // (아무 키워드 안 붙이면, public 이 Default 이다.)
    public a: string;
    public b: number;

    // 원래 JavaScript 에서 Private Property 는 Property 식별자 앞에 #을 붙이면 된다.
    // 그런데, TypeScript 에서는 private 키워드를 붙이면 된다. (Java 와 비슷함.)
    // (TypeScript 에서의 private 를 사용하자.)
    //
    // private property 는 오직 내부에서만 접근이 가능하다.
    // (외부, 자식클래스에서 접스 불가능)
    private readonly c: string;
    #d: number;

    // protected property 는 외부에서 접근이 불가능하지만, 클래스 내부와 자식 클래스에서
    // 접근이 가능하다.
    protected e: string = "e";


    static c: number = 1;

    // Constructor
    constructor(a: string = "a", b: number = 1)
    {
        this.a = a;
        this.b = b;
        this.c = "c";
        this.#d = 5;
    }

    // Instance Method
    foo(): void
    {
        console.log(this.a, this.b);
    }

    // Static Method
    static foo1(): void
    {
        console.log(this.c);
    }
}

// 클래스 상속
// extends 키워드를 통해 상속받을 수 있다.
// B 는 자식클래스, A 는 부모클래스
class B extends A
{
    method()
    {
        console.log(this.e);
    }
}

// 클래스 이름이 인스턴스의 타입이다.
const objectA: A = new A("a", 1);
console.log(objectA.a, objectA.b);
objectA.foo();

console.log(A.c);
A.foo1();

// Type Alias
type AA = A;
const objectA1: AA = new A("b", 2);

// 클래스와 인터페이스
//
// 인터페이스
// 인터페이스는 여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다.
// 인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사하나,
// 직접 인스턴스를 생성할 수 없고, 인터페이스 내 선언된 모든 메소드는 추상 메소드이다.
// 그래서, 인터페이스를 구현할 클래스가 추상 메소드를 반드시 구현해야 한다!!
interface Animal
{
    name: string;
    age: number;
    talk: () => void;
}

// 클래스는 인터페이스를 구현할 수 있다.
// implements 키워드를 통해서
// 인터페이스를 구현하는 클래스는 인터페이스에 선언된 멤버들을 모두 다 가져야 한다.
// (Property 를 가져야 하며, Method 는 구현해야 한다.)
//
// 클래스가 인터페이스를 구현할 때, 구현할 모든 멤버들의 접근제한자는 public 이어야 한다.
class Human implements Animal
{
    public name;
    public age;

    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }

    public talk(): void
    {
        console.log(this.name, this.age);
    }
}

const human: Human = new Human("kim", 23);
human.talk();

// 추상 클래스
// -> 추상 메소드를 가질 수 있는 클래스
// 추상 클래스 내부의 추상 메소드는 선언만 되어 있다.
// 추상 클래스를 상속받는 클래스가 추상 메소드를 구현해야만 한다. (abstract 키워드가 붙은 모든 것은
// 구현해야 함.)
// 또한 추상 클래스로부터 인스턴스를 생성할 수 없다.
// 일반 메소드를 가질 수 있다.
// (추상 메소드는 앞에 abstract 키워드를 붙이면 된다.)
// (추상 메소드는 반드시 추상 클래스에서만 선언되어야 한다.)
abstract class Shape
{
    protected abstract width: number;
    protected abstract height: number;
    abstract getArea(): number;
}

// 상속 받을 때, 프로퍼티의 접근 제한자의 접근 범위가 더 넓거나 같아야 한다.
// (만약, 부모 클래스에서 접근 제한자가 protected 이면, 자식 클래스에서 접근 제한자가
//  public, protected 여야 한다.)
class Triangle extends Shape
{
    public width;
    public height;

    constructor(width: number, height: number)
    {
        super();
        this.width = width;
        this.height = height;
    }
    
    getArea(): number
    {
        return this.width;
    }
}

const triangle: Triangle = new Triangle(10, 20);
console.log(triangle.getArea());


