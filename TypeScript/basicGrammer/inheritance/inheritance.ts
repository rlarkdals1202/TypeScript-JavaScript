export {};

// Inheritance (상속)

// 클래스 상속
// : 기존 클래스의 멤버를 상속받아 새로운 클래스를 확장하여 정의하는 것을 말한다.
// 클래스 상속은 extends 키워드로 한다.
// 타입스크립트는 다중 상속을 지원하지 않는다.

class Parent
{
    public a: number;
    public b: number;

    constructor(a: number, b: number)
    {
        this.a = a;
        this.b = b;
    }
}

// Parent 클래스: 부모 클래스, 상위 클래스
// Child 클래스: 자식 클래스, 하위 클래스
class Child extends Parent
{
    constructor(a: number, b: number)
    {
        super(a, b);
    }

    method(): void
    {
        console.log(this.a, this.b);
    }
}

const child: Child = new Child(10, 20);
child.method();

// super 에 대해서
// super 를 호출하면, 부모 클래스의 생성자를 호출한다. (constructor)
// 만약, 서브클래스에서 추가한 프로퍼티를 갖는 인스턴스를 생성한다면, constructor 를
// 생략할 수 없는데, 이때 super 를 통해 부모 클래스 constructor 에 필요한 인수를
// 전달할 수 있다.


// super 호출 시 주의사항
// 자식 클래스의 constructor 에서 반드시 맨 처음에 super 를 호출해야 한다.
// (가장 첫 번째 줄에서 호출)
//
// 자식 클래스의 constructor 에서 super 를 호출하기 전에는 this 를 참조할 수 없다.
// (super 를 제일 먼저 호출해야 하는 이유)
//
// super 는 반드시 자식 클래스의 constructor 에서 호출해야 한다.

class A
{
    public a: number;

    constructor(a: number)
    {
        this.a = a;
    }
}

class B extends A
{
    public b: number;

    constructor(a: number, b: number)
    {
        super(a);
        this.b = b;
    }
}

// 자식 클래스의...
// 인스턴스 메소드에서 super 를 통해 부모 클래스의 인스턴스 메소드를 호출할 수 있다.
// 정적 메소드에서 super 를 통해 부모 클래스의 정적 메소드를 호출할 수 있다.
//
// super 키워드를 통해 부모 클래스의 프로퍼티에 접근할 수 있다.
// (접근 제한자가 private 인 프로퍼티 제외)

class C
{
    private readonly a: number;
    public b: number;
    protected c: number;

    public static s: number = 1;

    constructor(a: number, b: number, c: number)
    {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public pMethod1()
    {
        console.log(this.a, this.b, this.c);
    }

    public static pMethod2()
    {
        console.log(this.s);
    }
}

class D extends C
{
    public d: number;

    constructor(a: number, b: number, c: number, d: number)
    {
        super(a, b, c);
        this.d = d;
    }

    public cMethod1()
    {
        super.pMethod1();
        console.log(super.b, this.b, super.c, this.c, this.d);
    }

    public static cMethod2()
    {
        super.pMethod2();
        console.log(super.s, this.s);
    }
}

// 인터페이스 상속
// 인터페이스가 다른 인터페이스를 상속받을 수 있다.
// 인터페이스는 다중상속이 가능하다.

interface I1
{
    a: number;
}

interface I2
{
    b: number;
}

interface I3 extends I1, I2
{
    c: number;
}

const i3: I3 = {a: 1, b: 2, c: 3};
