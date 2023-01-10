# TypeScript Inheritance
#### (자바스크립트 inheritance 에 대해서: [JavaScript Inheritance](https://github.com/rlarkdals1202/JavaScript-Note/tree/master/Note/class))

### 1. Class Inheritance
Class Inheritance (클래스 상속)
<br>
: **기존 클래스(부모, 상위 클래스)의 멤버를 상속받아, 새로운 클래스(자식, 하위 클래스)를 확장하여 정의하는 것**을 말한다.
**(자식 클래스는 상속을 통하여, 부모 클래스의 멤버를 그대로 사용하면서, 자신만의 고유한 멤버만 추가하여 확장할 수 있다.)**
<br>
클래스 상속은 **extends 키워드**로 한다.<br>**private 접근 제한자가 붙은 멤버는 상속받을 수 없다.**
<br>
(TypeScript 는 **다중 상속을 지원하지 않는다!**)
```ts
// 부모, 상위 클래스
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

// 자식, 하위 클래스
class Child extends Parent
{
    public c: number
    constructor(a: number, b: number, c: number)
    {
        super(a, b);
        this.c = c;
    }
    
    method(): void
    {
        console.log(this.a, this.b, this.c);
    }
}

const child: Child = new Child(1, 2, 3);
child.method();
```

### 2. super
**super 를 호출**하면, **부모 클래스의 constructor 를 호출**한다.
<br>
만약에, 자식 클래스에서 추가한 프로퍼티를 갖는 인스턴스를 생성한다면, **constructor 를 생략할 수 없는데,**
이때, **super 를 통해, 부모 클래스 constructor 에 필요한 인수를 전달할 수 있다.**
<br>
<br>
super 호출 시의 주의사항 )
* 자식 클래스의 constructor 에서 **반드시 맨 처음에 super 를 호출해야 한다.** <br> (가장 첫 번째 줄에서 호출)
* 자식 클래스의 constructor 에서 **super 를 호출하기 전에는 자식 클래스의 constructor 에서 this 를 참조할 수 없다.**<br>(super 를 제일 먼저 호출해야 하는 이유)
* **super 는 반드시 자식 클래스의 constructor 에서 호출해야 한다.**

```ts
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
    public c: string;
    
    constructor(a: number, b: number, c: string)
    {
        super(a);
        this.b = b;
        this.c = c;
    }
}
```

<br>

자식 클래스에서 **super 키워드를 통해 부모 클래스의 멤버에 접근할 수 있다.**
<br>
(**단, 접근 제한자가 private 인 멤버는 제외**)
* super 키워드를 통해, **자식 클래스에서 부모 클래스의 Property 에 접근할 수 있다.**
* **자식 클래스의 인스턴스 메소드**에서, **super 키워드를 통해 부모 클래스의 인스턴스 메소드를 호출할 수 있다.**
* **자식 클래스의 정적 메소드**에서 **super 키워드를 통해 부모 클래스의 정적 메소드를 호출할 수 있다.**
```ts
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
```

<br>


### 3. Interface Inheritance
**인터페이스가 다른 인터페이스를 상속받을 수 있다.**
<br>
인터페이스가 다른 인터페이스를 상속받을 땐, **extends 키워드**를 사용한다.
<br>
(인터페이스는 클래스와 달리 **다중상속이 가능**하다.)
```ts
interface I1
{
    a: number;
}

interface I2
{
    b: number;
    method1: () => void;
}

interface I3 extends I1, I2
{
    c: number;
    method2: () => void;
}

const i3: I3 =
    {
        a: 1,
        b: 2,
        c: 3,
        
        method1(): void
        {
            console.log("method1");
        },
        
        method2(): void
        {
            console.log("method2");
        }
    }
```