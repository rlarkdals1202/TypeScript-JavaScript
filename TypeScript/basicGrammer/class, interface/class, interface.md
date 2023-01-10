# TypeScript Class, Interface
#### (자바스크립트 class 에 대해서: [JavaScript Class](https://github.com/rlarkdals1202/JavaScript-Note/tree/master/Note/class))

### 1. Class
**class 는 객체의 속성(Property)과 행동(Method)이 정의되어 있는 틀, Template** 이라고 할 수 있다.
<br>
**클래스로부터 만들어진 객체를 Instance (인스턴스)** 라고 한다.
<br>
클래스는 **class 키워드**를 사용하여 정의하며, **이름은 Pascal Case 를 따르는 것**이 좋다.
<br>
**클래스 이름이 인스턴스의 타입이다.**
```ts
class Person
{
    name: string;
    constructor(name: string)
    {
        this.name = name;
    }
}

// Instance 생성: new 연산자를 사용하여, 인스턴스를 생성
// (클래스 이름이 인스턴스의 타입이다.)
const person: Person = new Person("kim");
console.log(person.name);
```

<br>

클래스에서 정의할 수 있는 메소드
* **constructor(생성자)**<br>: **인스턴스를 초기화**하기 위한 특수한 메소드
* **instance method(인스턴스 메소드)**<br>: **인스턴스를 통해 호출할 수 있는** 메소드
* **static method(정적 메소드)**<br>: **인스턴스를 생성하지 않아도, 클래스를 통해 호출할 수 있는** 메소드
```ts
class Person
{
    // Instance Property
    // 인스턴스를 통해 접근 가능하다.
    name: string;
    
    // Static Property
    // 클래스를 통해 접근 가능하다.
    static greeting: string = "Hi";
    
    // Constructor
    constructor(name: string)
    {
        // 생성자 내부에서의 this 는 클래스가 생성한 인스턴스를 가리킨다.
        this.name = name;
    }
    
    // Instance Method
    sayHello(): void
    {
        // Instance Method 내부의 this 는
        // 인스턴스 메소드를 호출한 인스턴스를 가리킨다.
        console.log(`${this.name}이 인사를 합니다.`);
    }
    
    // static Method
    static sayHi(): void
    {
        // Static Method 내부의 this 는 클래스를 가리킨다.
        console.log(this.greeting);
    }
}

const person: Person = new Person("kim");
person.sayHello();
Person.sayHi();
```

<br>

### 2. Access Modifier
**Access Modifier(접근 제한자)** 를 통해, **특정 메소드나 프로퍼티에 대한 접근 가능 범위를
지정할 수 있다.**
* **public**<br>: public 접근 제한자가 붙은 member 는 **모든 곳에서 접근이 가능**하다.<br>
* **protected**<br>: protected 접근 제한자가 붙은 member 는 **외부에서 접근할 수 없지만, 자식클래스와 내부에서 접근할 수 있다.**
* **private**<br>: private 접근 제한자가 붙은 member 는 **오직 내부에서만 접근할 수 있다.**
* **접근 제한자가 붙지 않은 멤버의 default 접근 제한자는 public 이다.**
```ts
class Example
{
    // a, b: 모든 곳에서 접근 가능
    a: string;
    public b: string;
    
    // c: 내부, 자식클래스에서만 접근 가능
    protected c: number;
    
    // d: 내부에서만 접근 가능
    private d: boolean;
    
    // JavaScript 에서의 private 접근 제한자를 가지는 멤버
    // (앞에 #을 붙인다.)
    #e: number = 100;
    
    constructor(a: string, b: string, c: number, d: boolean)
    {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    
    public method(): void
    {
        console.log(this.a, this.b, this.c, this.d, this.#e);
    }
}

class Example1 extends Example
{
    constructor(a: string, b: string, c: number)
    {
        super(a, b, c, true);
    }
    
    public method1(): void
    {
        console.log(this.a, this.b, this.c);
    }
}    

const ex: Example = new Example("a", "b", 0, true);
ex.method();

const ex1: Example1 = new Example1("a1", "b1", 1);
ex1.method1();
```

### 3. getter, setter
Property 의 **정보 은닉을 지키기 위해**, **접근 제한자를 private 로 설정하고, 외부에서 Property 에 접근하기 위해,
getter, setter 함수를 구현할 수 있다.**
* **getter**<br>: **프로퍼티의 값을 읽거나, 별도의 행위가 필요할 때 호출**
* **setter**<br>: **프로퍼티에 값을 할당할 때 사용.**

getter 와 setter 는 **인스턴스 프로퍼티처럼 사용한다.**
<br>**(getter, setter 를 호출하는 것이 아니라, 프로퍼티를 참조하는 형식으로 사용한다.)**
```ts
class Person
{
    private name: string;
    private age: number;
    
    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }
    
    // getter
    get personName(): string
    {
        return (this.name);
    }
    
    get personAge(): number
    {
        return (this.age);
    }
    
    // setter
    // (setter 는 참고로 값을 반환할 수 없다.)
    set personName(name: string)
    {
        this.name = name;
    }
    
    set personAge(age: number)
    {
        this.age = age;
    }
}

const person: Person = new Person("kim", 20);

// getter 함수가 호출됨.
console.log(person.personName, person.personAge);

// setter 함수가 호출됨.
person.personName = "Kim";
person.personAge = 23;

// getter 함수가 호출됨.
console.log(person.personName, person.personAge);
```

<br>

### 4. Interface
인터페이스는 **여러가지 타입을 갖는 프로퍼티로 이루어진 새로운 타입을 정의하는 것과 유사하다.**
인터페이스는 **프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사**하나, **직접 인스턴스를 생성할 수 없고,
인터페이스 내에 선언된 모든 메소드는 추상 메소드이다.**
```ts
interface Person
{
    name: string,
    age: number,
    talk: () => void;
}

const person: Person =
    {
        name: "kim",
        age: 23,
        
        // 인터페이스에서 추상 메소드인 talk()를
        // 반드시 구현해야 한다.
        talk()
        {
            console.log("talk");
        }
    };
console.log(person.name, person.age);
person.talk();
```

<br>

### 5. Class, Interface
클래스는 **implements 키워드를 통해서 인터페이스를 구현할 수 있다.**
<br>
**인터페이스를 구현하는 클래스는 인터페이스에 선언된 멤버들을 모두 가져야 한다.**
<br>
(**선언된 모든 Property 를 가져야 하며**, **선언된 모든 추상 메소드를 구현해야 한다.**)
<br>
클래스가 인터페이스를 구현할 때, **구현할 모든 멤버들의 접근 제한자는 public 이어야 한다.**
```ts
interface Animal
{
    name: string,
    age: number,
    talk: () => void;
}

class Human implements Animal
{
    public name: string;
    public age: number;
    
    constructor(name: string, age: number)
    {
        this.name = name;
        this.age = age;
    }
    
    public talk()
    {
        console.log(`${this.name}이 말합니다.`);
    }
}

const human: Human = new Human("kim", 23);
human.talk();
```