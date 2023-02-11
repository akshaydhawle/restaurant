
# Section 4 - Object Oriented Programming

- introduction
- classes
- constructors
- properties and methods
- access control keywords
- getters and setters
- static members
- index signatures
- inheritance
- polymorphism
- abstract classes
- interfaces   

# What is object oriented programming

paradigms :
- procedural
- functional
- object-oriented
- event-driven
- aspect-oriented
- ...

- object has unit
 data (state)
 operations (behavior)

- eg person
properties : name, email
methods : talk(), dance()

- in real service we'll have object for 
    - Login Form
    - Auth service
    - Email service

- each object is responsible for single task

- in functional programming - function is the building block of the app
- in object oriented - object is the building blocks of the app.  
- every programming paradigms has some strengths and weakness  

# classes

- class is blueprint for creating objects
- constructor is special function inside class that is used for initializing object
- this method can't have return type because it always return instance of bank account
- this to ref current class
- use pascal naming convention capitalize first letter of class

Class : Account
properties: id, owner, balance
methods: deposit, withdraw

```ts
class Account {
    id: number;
    owner: string,
    balance: number;

    constructor(id:number, owner: string, balance: number{
        this.id = id ;
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount:number):void{
        if(amount <=0 )
            throw new Error('Invalid amount');
        this.balance += amount;    
    }

}

```

# object
- how to create object, using new operator we can create instance or object.

```ts
 let account = new Account(1,'person',0);
 account.deposit(100);
 console.log(account.balance);
 console.log(account); // we can see all properties of object
```

- typeof operator always return object no matter what is underlying class is.
- so we should use instanceof account or person

```ts
console.log(account instanceof Account);
```

# read only and optional properties
 
 ```ts
 class Account{
    readonly id : number;
    nickname? : string;
 }
 ```

 # access control keywords
 - public - by default
 - private 
 - protected

```ts
class Account {
    id: number;
    owner: string,
    private balance: number;
    constructor(id:number, owner: string, balance: number{
        this.id = id ;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount:number):void{
        if(amount <=0 )
            throw new Error('Invalid amount');
        this.balance += amount;    
    }

    private calculateTax(){

    }

    getBalance(): number {
        return this.balance;
    }

}

let account = new Account(1,'person',0);
account.balance = -1; // it will complain this because balance can be used only inside class. its private
```

# parameter properties

 - is we use parameters we don't need to declare properties and not need to intialize.

```ts
class Account {
    nickname ? : string;
    constructor(
        public readonly id:number,  // param properties
        public owner: string, 
        private balance : number {
    }
    deposit(amount:number):void{
        if(amount <=0 )
            throw new Error('Invalid amount');
        this.balance += amount;    
    }
}
``` 
  
# getters and setters

```ts
class Account {
    nickname ? : string;
    constructor(
        public readonly id:number,  // param properties
        public owner: string, 
        private balance : number {
    }
    deposit(amount:number):void{
        if(amount <=0 )
            throw new Error('Invalid amount');
        this.balance += amount;    
    }
    get balance():number {
        return this.balance;
    }
    set balance(value: number):{
        if(value < 0 ) throw new Error('Invalid value');
       this.balance = value; 
    }

}
let account = new Account(1,'person',0);
console.log(account.balance);
account.balance = 1;
```

# index signature
- we can add a1 ,a2 like properties , because seat can be 100 as well

```ts
class SeatAssignment {
    A1: string;
    // index signature properties
    [searNumber: string] : string
}
let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats['A2'] = 'John';
seats['A2'] = 1; // ts complain
```

- we can add properties but also we get type safety

# static members

```ts
class Ride {
     activeRides: number = 0;

     start(){ this.activeRides++}
     stop(){ this.activeRides--}
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();
```

- here each object independently tracking actives rides.
- we need global place to track this

```ts
class Ride {
    private static activeRides: number = 0;

     start(){ Ride.activeRides++}
     stop(){ Ride.activeRides--}

     static get activeRides(){
        return Ride.activeRides;
     }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides)
```

# inheritance

Class: Person 
properties: 
  firstName, lastName, fullName   
methods : walk(), talk()  

- student and teacher can inherit this

```ts
class Person {
    constructor(public firstName: string, public lastName: string){}

    get fullName(){
        return this.firstName + ''+this.lastName;
    }
    walk(){
        console.log('walking');
    }
}

class Student extends Person {
    constructor(public studentId:number, public firstName: string , public lastName: string ){
        super(firstName,lastName);// call the constructor of base class 
    }

    takeTest(){
        console.log('taking a test')
    }
}

let student = new Student(1,'John','john@gmail.com');
```

# method overriding

let say we want to change the implementation of fullName in inherited class this is where method overriding is useful.

property : noImplicitOverride : true

```ts
class Teacher extends Person {
    override get fullName(){
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Student('John','smith');
console.log(teacher.fullName);
```

# polymorphism ( many form )

```ts
printNames([
    new Student(1,'john','smith'),
    new Teacher('Mosh','Hamedani'),
    new Principle('Mary','Smith')
])
function printNames(people: Person[]){
   for(let perso n of people) console.log(person.fullName) 
}
```

- in for loop person takes different form of student or teacher 
- this is open closed principle


# private vs protected members
- private & protected - accessible within class but diff is private cannot be inherited but protected can inherited.

# Abstract Classes:
- these classes have some common properties
 - circle
 - rectangle 
 - triangle

- abstract class is uncooked meal another class has to extends it  
- abstract classes has no implementation
- abstract methods only available within abstract classes.

```ts
 abstract class Shape {
    constructor(public color : string){}
    abstract render():void;
 }
 class Circle extends Shape{
    constructor(public radius: number, color: string){
        super(color);
    }
    override render(): void {
        console.log('rendering a circle.')
    }
 }
```

# Interfaces 

- to define the shape of objects.

- below all calender has some base class
    - google
    - iCal
    - Outlook

 ```ts
 abstract class Calender {
    constructor(public name: string){}
    abstract addEvent(): void;
    abstract removeEvent(): void;
}
 ```

- redesign using interface more cleaner

```ts
interface ICalender{
    name: string;
    addEvent():void;
    removeEvent():void; 
} 
```

- we have some method impl and we want to share those with child classes then we should use abstract 
- if we want just with no impl we should use interfaces. 

- interface can extend another interface

```ts
interface CloudCalender extends Calender {
    sync():void;
}
```

- how to add these interfaces; 

```ts
class GoogleCalender implements Calender {
    constructor(public name: string){}
    addEvent(): void{
        throw new Error('Method not implemented');
    }
    removeEvent(): void {
        throw new Error('Method not implemented');
    } 
}
```

# Generics 
 - Generic classes
 - Generic Functions
 - Generic Interfaces
 - Generic Constraints
 - Type Mappings


# understanding problem

```ts
class KeyValuePair {
constructor(public key:number, public value: string ){}
}
let pair = new KeyValuePair(1,'apple');
let pair = new KeyValuePair('1','apple'); //not allowed
```

- what if i want to send value as number
- one solution to use any but with any we loose type safety
- we need reusable solution.

# Generic class

- T means template classes
```ts
class KeyValuePair<T>{
constructor(public key:T, public value: T ){}
}
let pair = new KeyValuePair<string, number>('1',1);
let pair = new KeyValuePair<number, string>(1,'apple');
let pair = new KeyValuePair('1','apple'); // compiler can infer the key and value from data.
```

# Generic functions

```ts
function wrapInArray(value: number){
    return [value];
}
let numbers = wrapInArray(1);
let numbers = wrapInArray('1');// we can't pass string
```

- this is where we  need generics 

```ts
class ArrayUtils {
   wrapInArray<T>(value: T){
        return [value];
    } 
}
let utils = new ArrayUtils();
utils.wrapInArray(1);

function wrapInArray<T>(value: T){
    return [value];
}
let numbers = wrapInArray(1);
let numbers = wrapInArray('1'); //allowed
```

# Generic Interfaces

```ts
interface Result<T> {
 data: T | null,
 error: string | null
}

function fetch<T>(url:string):Result<T>{
     return { data: null, error: null };
}

interface User {
    username: string;
}

interface Product {
    title: string
}

let result = fetch<User>('url');
result.data.username;

let result = fetch<Product>('url');
result.data.title;

```
because function returning generic result we have to add type.

# Generic Constraints

```ts
 function echo<T>(value:T):T{
   return value;  
 }

 echo('1');// we can give anything but if we want to any constraints then.
```

```ts
 function echo<T extends number | string >(value:T):T{
   return value;  
 }

 echo('1'); // we can pass number and string only now
 echo(true);
```

- we can also pass shape

```ts
 function echo<T extends { name: string } >(value:T):T{
   return value;  
 }
 echo({ name: 'a' });
 ```

 - with interface

 ```ts
 interface Person {
    name: string;
 }
 function echo<T extends Person>(value:T):T{
   return value;  
 }
 echo({ name: 'a' });

 or 

 class Person {
    constructor(public name:string){}
 }
 class Customer extends Person {
 }
 echo(new Customer('a'));
 ```

 # extending generic classes

- lets say we're building ecommerce  project
- where we're storing products

```ts
interface Product {
    name: string;
    price: number;
}

class Store<T>{
   protected objects: T[] = [];
    add(obj: T): void {
        this.objects.push(obj);
    }
    // if T is product then keyof return name | price
    // if T is something else then that
    find(property: keyof T, value: unknown): T | undefined {
        return this.objects.find(obj => obj[property] === value);
    }
}
let store = new Store<Product>();
store.objects = [ ] ; // not allowed since private

// passing generic type parameter
class CompressibleStore extends Store<T> {
   compress(){}   
};

let store = new CompressibleStore<Product>();
store.add(productObj);
store.compress();

// restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T>{
    find(name:string):T | undefined {
        return this.objects.find(obj => obj.name === name )
    }
}

// fix the generic type parameter
class ProductStore extends Store<Product>{
    filterByCategory(category: string): Product[]{
        return [];
    }
}
```


# Keyof operator:

- continue with previous example
```ts
let store = new Store<Product>();
store.add({ name: 'a',price:1 });
store.find("name","a");
store.find("price",1);
store.find("nonExistingProperty",1); // this will crash program
```

# Type Mapping

- sometimes we need to based on the another type this is called type mapping.

```ts
interface Product {
    name: string;
    price: number;
}

// index signature -to dynamically add operator and key of operator to get dynamically properties of product type
type ReadOnlyProduct = {
  readonly [K in keyof Product]: Product[K]
}

let product: ReadOnlyProduct = {
    name: 'a',
    price: 1
}
product.price = 1// it will complain because property is read only
```

- why we limiting to the product what if we have user and so on.
- create generic type
```ts
type ReadOnly<T> ={
    readonly [K in keyof T]: T[K]
}

type Optional<T> = {
    [K in keyof T]? : T[K];
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null
}

let product: ReadOnly<Product> = {
    name: 'a',
    price: 1
}

let customer: ReadOnly<Customer> = {
    name: 'a',
}
```

- typescript utility types search on google
  - partial ,required, Readonly, ....
