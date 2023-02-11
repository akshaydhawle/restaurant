
# Contents
 - [Section 1 - Typescript](#typescript) 
    - [Setup](#setup) 
    - [Code](#code) 
    - [RootDir](#rootDir) 
    - [SourceMap](#sourcemap) 
 - [Section 2 - Typescript Basics](#basics) 
    - [Arrays](#arrays) 
    - [Tuples](#Tuples) 
    - [Enums](#enums) 
    - [Functions](#functions) 
    - [Objects](#object) 
- [Section 3 - Advanced Types](#advanced-types) 
    - [Type Aliases](#type-aliases) 
    - [Tuples](#Tuples) 
    - [Union Types](#union-types) 
    - [Intersection Types](#intersection-types) 
    - [Literal Types](#literal-types) 
    - [Nullable Types](#nullable-types) 
    - [Optional Chaining](#optional-chaining) 
    - [Nullish Coalescing Operator](#nullish-coalescing-operator) 
    - [Type Assertion](#type-assertion) 
    - [Unknown type](#unknown-type) 
    - [Never Type](#never-type) 
- [Section 4 - Object Oriented Programming](#section-4-object-oriented-programming) 
    - [what Is Object Oriented Programming](#what-is-object-oriented-programming) 
    - [Classes](#classes) 
    - [Object](#object) 
    - [Read Only And Optional Properties](#read-only-and-optional-properties) 
    - [Access Control Keywords](#access-control-keywords) 
    - [Parameter Properties](#parameter-properties) 
    - [Index Signature](#index-signature) 
    - [Static Members](#static-members) 
    - [Inheritance](#inheritance) 
    - [Method Overriding](#method-overriding) 
    - [Polymorphism](#polymorphism) 
    - [Private Vs Protected Members](#private-vs-protected-members) 
    - [Abstract Classes](#abstract-classes) 
    - [Interfaces](#interfaces) 
- [Section 5 Generics](#generics) 
    - [Understanding Problem](#understanding-problem) 
    - [Generic Class](#generic-class) 
    - [Generic Functions](#generic-functions) 
    - [Generic Interfaces](#generic-interfaces) 
    - [Generic Constraints](#generic-constraints) 
    - [Extending Generic Classes](#extending-generic-classes) 
    - [Keyof Operator](#keyof-operator) 
    - [Type Mapping](#type-mapping) 
- [Section 6 - Decorators](#decorators) 
    - [Class Decorators](#class-decorators) 
    - [Parameterized Decorators](#parameterized-decorators) 
    - [Decorator Composition](#decorator-composition) 
    - [Method Decorator: ](#method-decorator: ) 
    - [Accessor Decorators ](#accessor-decorators ) 
    - [Property Decorators](#property-decorators) 
    - [Parameter Decorators](#parameter-decorators) 
- [Section 7 - Modules](#section-7-modules) 
    - [Exporting And Importing](#exporting-and-importing) 
    - [Module Formats](#module-formats) 
    - [Default Exports](#default-exports) 
    - [Wildcard Imports](#wildcard-imports) 
    - [Re Exporting](#re-exporting) 
- [section 8 - Integration With Js](#section-8-integration-with-js) 
    - [Including Js Code In Ts Projects](#including-js-code-in-ts-projects) 
    - [Type Checking Js Code](#type-checking-js-code) 
    - [How To Check For Types In Js](#how-to-check-for-types-in-js) 
    - [Creating Declaration Files Or Type Definition File](#creating-declaration-files-or-type-definition-file) 
    - [Using Definitely Typed Declaration Files](#using-definitely-typed-declaration-files) 
- [section 9 - React With Typescript](#react-with-typescript) 
    - [Creating React App With Typescript](#creating-react-app-with-typescript) 
    - [How To Add Bootstrap](#how-to-add-bootstrap) 
    - [Creating First Component](#creating-first-component) 
    - [State Management Using State Hook ](#state-management-using-state-hook ) 
    - [Calling Backend](#calling-backend) 
    - [Using The Effect Hook](#using-the-effect-hook) 
    - [Handling Events](#handling-events) 
- [section 10 - Node With Typescript](#node-with-typescript) 
    - [Setting Express Project](#setting-express-project) 
    - [Create Basic Route](#create-basic-route) 
    - [Create Router](#create-router) 
    - [Parsing Request Bodies](#parsing-request-bodies) 
    - [Building An Api](#building-an-api) 

# typescript

> What Is Typescript
- Js Is Kid Without Discipline
- Ts Is Kid With Some Discipline
- Ts Is Programming Lang Built Top Of The Js.
- **But Typescript Adds Benefits**
    - Static Typing
    - Code Completion
    - Refactoring
    - Shorthand Notations
- Helps Us Build Robust And Maintainable App In Less Type.   
- Static Typing : 
- We Know The Type Of Variable While Coding.

-  **Drawbacks Of Ts**
 - Compilation - Compiler Need To Transpile Ts Code Into Js Code
 - Discipline In Coding

# setup
- Download Nodejs & Install Typescript Compiler
    > sudo npm i -g typescript

- Verify Installation
    > tsc -v

# code

- Typescript Is Superset Of Js

- Create Project
    > mkdir hello-world
    > cd hello-world
    > touch index.ts

    ```ts
    let age: number = 10;
    age = 'a'; // it will complain
    ```

- It Will Generate Js Code Which Use Old Js

- If We Want Modern Js To Generate We Have To Add Target

- **configure typescript compiler**
- This Will Create Tsconfig Config File

> tsc --init

- This All Settings Has Desc In Front Of This.
- We Can Select **Target** As Which Js Version We Want
- Target Property We Can Use.

# rootDir : 
- rootDir:
 - It Is Directory That Contains Source Files
- outDir: 
 - It Is Directory Where Contains Js File , When We Compile Code The Js Code Will Stored Into This Dir.  
- removeComments: 
  - Ts Will Remove All Comments When Convert Code Into Js.  
- noEmitOnError:
  - When True It Will Not Generate Js Code If Code Has Errors.  

# debug
- In Order To Debug We Have To Set Property Sourcemap To True.

# sourcemap : 
- sourceMap
    - It Will Tell Compiler Which Line Of Ts Code Map To Which Js Code.

- After Setting This We Can Add Debugger Breakpoint On Line.

- **create launch.json file**
 - we can see **program** to where to start.
 - **outFiles** - output files store location
 - add one more setting
  > preLaunchTask: "tsc: build - tsconfig.json"
 - Using This Setting We're Telling Typescript Compiler To Build Our Application Using This Tsconfig File 

 - **Start Debugger**
 - Step Over - For Executing One Line
 - Step Into - For Stepping Into Function
 - Step Out - For Stepping Out From Function

- Left Side Variables
    - We Have All Variables Values
    - If There Is Something Which You're Not Able To See In Variables You Can Go To The Watch Window
    - Insert Variable Name

  
# basics
 - The Any Type
 - Arrays
 - Tuples
 - Enums
 - Functions
 - Objects  

> **Types**
-  Js Has Types
 - Number
 - String
 - Boolean
 - Null
 - Undefined
 - Object
- Ts Extends This To
 - Any
 - Unknown
 - Never
 - Enum
 - Tuple 

    ```ts
    let sales: number = 123_456_789;
    let course : string = 'Typescript' // or
    let course  = 'Typescript' // or
    ```

- If We Have Large Number We Can Annotate Number By Underscore.
- In Ts We Don't Need To Always Annotate. Because Compiler Detects Type Based On Value.
- By Default If You Declared Variable It Has Type Any

> Any
 - Non Initialized Variables Has Any Type;
- But It Is Ignoring Typescript Idea Of Type Safety
- If We Use Any We're Losing That Feature Of Typescript.
- Best Practice Is To Avoid Using Any Type As Much As Possible

- Property: 
    - strict: Use To Tell Errors
    - noImplicitAny: Use To Tell Errors When In App We Use Any

# arrays
- We Should Annotate Arrays

```ts
let numbers: number[] = [1,2,3];// right
let numbers = [1,2,3,'3'];// wrong
let numbers = []; // wrong
```

- numbers.forEach Item Will Gives Code Completion Methods Automatically On Numbers

# Tuples - fixed length arrays
- We Use For Pair Of Values

```ts
let user: [number, string] = [1, 'Akshay'];
```
- It Should Have Exactly Two Values Of Provided Types.
- Internally It Represents As Plain Js Arrays
- **please keep tuples limited two values.**

# enums
- We Can Represent Size Of T-Shirts
- By Default Ts Use Values From 0,1,2.
- We Also Can Set Values
```ts
const small = 1;
const medium = 1;
const large = 1;

// vs
enum Size { Small, Medium, Large = 'L' }
```

# functions

- How Ts Avoid Common Problems Using Functions
- Always Properly Annotate Functions

    ```ts
    function calculateTax(income: number): number(){
        return 0
    }
    ```

- We Have Income As Unused Parameter , We Have Option To Detect Unused Parameter.
- Property - noUnusedParameters: true

    ```ts
    function calculateTax(income: number): number(){
        if(income < 50_000){
            return income * 1.2;
        } 
    }
    ```

- So In Above Code It Will Complain Since If Not Satisfied Then Function Return Undefined.

- We Have One Setting To Detect This
- noImplicitReturns : true
- It Means It Will Not Complain But Gives You Warning Error.

```ts
function calculateTax(income: number): number(){
    if(income < 50_000){
        return income * 1.2;
    } 
    return income * 1.3;
}
```
- Annotate Return Types Properly To Function 

- Detect Unused Variables
- noUnusedLocals
- With The Help Of This We Can Removed Unused Variables.

# object

- In Js Objects Are Dynamic.
    ```ts
    let employee = { id : 1 };
    employee.name = 'something';
    ```

- We Can Easily Add Name To This Employee Object In Js
But In Ts Is Not Valid.
- Ts Always Infer Types From Initialization

>  we can explicitly add types

    ```ts
    let employee: { id: number, name: string } = { id : 1 };
    employee.name = 'something';
    ```

- But Now Compiler Will Complain Name Is Missing At Initialization Step.

- One Sol Is Set Name To Empty String But Null Or Undefined Not Allowed.

- Second Solution- Make This Property Optional

- But This Is Not Good Solution, So Either Set Name To Empty String Or String.

- Don't Use Ts Blindly.

- Sometimes We Need Property Readonly.

```ts
let employee: {
    readonly id: number, 
    name: string 
} = { id : 1, name:'Akshay' };
employee.id = 1 // ts will complain
```
- how to define method in object

```ts
let employee: {
    readonly id: number, 
    name: string ,
    retire: (date: Date)=> void
} = { 
        id : 1, 
        name:'Akshay',
        retire: (date: Date) =>{
        console.log(date);   
        }
    };
```

# advanced-types

- Type Aliases
- Unions And Intersections
- Type Narrowing
- Nullable Types
- The Unknown Type
- Never Type

# type-aliases :

- There Are 3 Problems In Previous Employee Object
- If We Want To Create Another Employee , We Have To Repeat Shape.
- We End Up Duplication Our Code Which Is Bad, We Should
follow DRY principle.
- This Is Where We Use Type Alias , Using This We Can Define Custom Types.

- We Can Reuse Employee Type Now
```ts
type Employee = {
    readonly id: number, 
    name: string ,
    retire: (date: Date)=> void
}
let employee: Employee = { 
    id : 1, 
    name:'Akshay',
    retire: (date: Date) =>{
        console.log(date);   
    }
};
```

# union-types ( | )

- Using Union We Can Give Function Or Variable More Than One Type.

- Using Vertical Bar We Can Give Union Type.
```ts
function kgToLbs(weight: number | string): number {

}
kgToLbs(10);
kgToLbs('10');
```

- But With Using Union We Lose Methods Of Number And String, We'll Able To See Methods Which Is Common In String And Number In Autocompletion.

- We Can Use Narrowing

```ts
    function kgToLbs(weight: number | string): number {
        // narrowing
        if(typeof weight === 'number') return weight * 2.2;
        else return parseInt(weight) * 2.2; 
    }
    kgToLbs(10);
    kgToLbs('10');
```
- Now We Can See Methods Of Numbers And Strings.

# intersection-types ( & )

- We Can Merge 2 Types;
- In Order To Implement Textbox We Need Widgets Of Draggable And Resizable

    ```ts
    type Draggable = {
        drag: ()=> void
    }
    type Resizable = {
        resize: ()=> void
    }
    type UIWidget = Draggable & Resizable;

    let textBox : UIWidget = {
        drag: ()=> {},
        resize: ()=>{}
    }
    ```

# literal-types : (exact,specific value)

    ```ts
    let quantity: 50 | 100 = 50;
    ```

- Now Quantity Can Only Set To 50 Or 100;
- Lets Create Custom Type.
- Literal Don't Have To Be Number They Also Can Be A String.

    ```ts
    type Quantity = 50 | 100;
    let quantity: Quantity = 50;

    type Metric = 'cm' | 'inch';
    ```

# nullable-types

- Ts Is Very Strict About Using Null And Undefined 

    ```ts
    function greet(name:string){
        console.log(name.toUpperCase());
    }
    greet(null); // null is common source of problem, ts will complain
    ```
- Arg Of Null Is Not Assignable To String
- This Comes From Strict Property & Strictnullchecks In Ts
- But We Can Turn Off This Feature, We Should Always Turn It On.

    ```ts
    function greet(name:string|null){ // allowed values
        if(name)
            console.log(name.toUpperCase());
        else 
            console.log('hi');    
    }
    greet(null);
    ```

# optional-chaining

```ts
type Customer = {
birthday: Date;
}

function getCustomer(id:number):Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
if(customer !== null && customer !== undefined){
    console.log(customer.birthday);
}
```

- There Is Simpler Way To Right This

    ```ts
    type Customer = {
    birthday?: Date;
    }

    function getCustomer(id:number):Customer | null | undefined {
        return id === 0 ? null : { birthday: new Date() };
    }

    let customer = getCustomer(0);
    console.log(customer?.birthday?.getFullYear());
    ```

- If We Have Getcustomer Returning Customers Array

    ```ts
    // for arrays
    customers?.[0]

    let log: any = null; // for functions
    log?.('a');
    ```

# nullish-coalescing-operator

- In Plain Js
    ```ts
    let speed : number | null = null;
    let ride = {
        speed : speed | 30
    }
    ```
- Accurate Way To Check This

    ```ts
    speed : speed !== null ? speed : 30;
    ```
    - in ts we have better way;

    ```ts
    speed : speed ?? 30; // nullish coalescing operator
    ```

- We Are Saying If Speed Is Not Null Or Undefined Use That Value Otherwise Use 30

# type-assertion :
    
   - type assertion :

```ts
let phone = document.getElementById('phone');
```

- HTMLElement Is The Class Is Defined Represents Any Html Element

- If We Type Phone. We Cannot See Value Property
- So We Do Type Assertion. We'll Tell Tsc Compiler I Know More Than You About This Element.

```ts
let phone = document.getElementById('phone') as HTMLInputElement;
```
- Now We Can See The Phone.Value Property
- Another Syntax
  
    ```ts
    let phone = <HTMLInputElement> document.getElementById('phone');
    ```

# unknown-type

- We Should Try To Avoid Any As Much As Possible
- Let's Say We've Situation So We Need To Use Any.
- There Is Big Problem On Any

    ```ts
    function render(document: any){
        document.move();
        document.fly();
        document.whatever();
    } 
    ```

- Here Is No Any Type Checking On Document
- So Here Is Good Option
- We Immediately See Compilation Error.

```ts
function render(document: unknown){
    // type narrowing
    if(typeof document === 'string'){
        return document.toUpperCase();
    }
    document.move();
    document.fly();
    document.whatever();
} 
```

- So Compiler Don't Know About Document Has Which Methods
- So We Use Type Narrowing & Type Guard
- Typeof Works On Primitive Types Not On Custom Types
- For The Classes We Need To Use Instanceof

# never-type

- Represents The Values That Never Occurred.

```ts
// function called infinite times
function processEvents(): never {
    while(true){
        // read msg from the queue
    }
}
processEvents();
console.log('Hello world'); // this line never execute
```

- So We Annotate Return Type Of Method To Never To Tell The Compiler This Function Never Returns.

- Set Allowunreachablecode In Tsconfig To False

```ts
function reject(message): never{ 
    throw new Error(message);
}
reject('...');
console.log('hello world'); // will never execute
```

# section-4-object-oriented-programming

- Introduction
- Classes
- Constructors
- Properties And Methods
- Access Control Keywords
- Getters And Setters
- Static Members
- Index Signatures
- Inheritance
- Polymorphism
- Abstract Classes
- Interfaces   

# what-is-object-oriented-programming

**Paradigms** :
- Procedural
- Functional
- Object-Oriented
- Event-Driven
- Aspect-Oriented
- ...

- **Object Has Unit**
 Data (State)
 Operations (Behavior)

- Eg Person
Properties : Name, Email
Methods : Talk(), Dance()

- In Real Service We'll Have Object For 
    - Login Form
    - Auth Service
    - Email Service

- Each Object Is Responsible For Single Task

- In Functional Programming - Function Is The Building Block Of The App
- In Object Oriented - Object Is The Building Blocks Of The App.  
- Every Programming Paradigms Has Some Strengths And Weakness  

# classes

- Class Is Blueprint For Creating Objects
- Constructor Is Special Function Inside Class That Is Used For Initializing Object
- This Method Can't Have Return Type Because It Always Return Instance Of Bank Account
- This To Ref Current Class
- Use Pascal Naming Convention Capitalize First Letter Of Class

```js
Class : Account
properties: id, owner, balance
methods: deposit, withdraw
```

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
- How To Create Object, Using New Operator We Can Create Instance Or Object.

```ts
let account = new Account(1,'person',0);
account.deposit(100);
console.log(account.balance);
console.log(account); // we can see all properties of object
```

- typeof Operator Always Return Object No Matter What Is Underlying Class Is.
- So We Should Use instanceof Account Or Person

```ts
console.log(account instanceof Account);
```

# read-only-and-optional-properties
 
    ```ts
    class Account{
        readonly id : number;
        nickname? : string;
    }
    ```

# access-control-keywords
 - Public - By Default
 - Private 
 - Protected

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

# parameter-properties

 - Is We Use Parameters We Don't Need To Declare Properties And Not Need To Intialize.

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
  
# getters-and-setters

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

# index-signature
- We Can Add A1 ,A2 Like Properties , Because Seat Can Be 100 As Well

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

- We Can Add Properties But Also We Get Type Safety

# static-members

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

- Here Each Object Independently Tracking Actives Rides.
- We Need Global Place To Track This

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

```js
Class: Person 
properties: 
firstName, lastName, fullName   
methods : walk(), talk()  
```

- Student And Teacher Can Inherit This

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

# method-overriding

Let Say We Want To Change The Implementation Of Fullname In Inherited Class This Is Where Method Overriding Is Useful.

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

- In For Loop Person Takes Different Form Of Student Or Teacher 
- This Is Open Closed Principle


# private-vs-protected-members
- Private & Protected - Accessible Within Class But Diff Is Private Cannot Be Inherited But Protected Can Inherited.

# abstract-classes:
- These Classes Have Some Common Properties
 - Circle
 - Rectangle 
 - Triangle

- Abstract Class Is Uncooked Meal Another Class Has To Extends It  
- Abstract Classes Has No Implementation
- Abstract Methods Only Available Within Abstract Classes.

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

# interfaces 

- To Define The Shape Of Objects.

- Below All Calender Has Some Base Class
    - Google
    - Ical
    - Outlook

```ts
abstract class Calender {
    constructor(public name: string){}
    abstract addEvent(): void;
    abstract removeEvent(): void;
}
```

- Redesign Using Interface More Cleaner

```ts
interface ICalender{
    name: string;
    addEvent():void;
    removeEvent():void; 
} 
```

- We Have Some Method Impl And We Want To Share Those With Child Classes Then We Should Use Abstract 
- If We Want Just With No Impl We Should Use Interfaces. 

- Interface Can Extend Another Interface

```ts
interface CloudCalender extends Calender {
    sync():void;
}
```

- How To Add These Interfaces; 

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

# generics 
 - Generic classes
 - Generic Functions
 - Generic Interfaces
 - Generic Constraints
 - Type Mappings


# understanding-problem

```ts
class KeyValuePair {
    constructor(public key:number, public value: string ){}
}
let pair = new KeyValuePair(1,'apple');
let pair = new KeyValuePair('1','apple'); //not allowed
```

- What If I Want To Send Value As Number
- One Solution To Use Any But With Any We Loose Type Safety
- We Need Reusable Solution.

# generic-class

- T Means Template Classes
```ts
class KeyValuePair<T>{
    constructor(public key:T, public value: T ){}
}
let pair = new KeyValuePair<string, number>('1',1);
let pair = new KeyValuePair<number, string>(1,'apple');
let pair = new KeyValuePair('1','apple'); // compiler can infer the key and value from data.
```

# generic-functions

```ts
function wrapInArray(value: number){
    return [value];
}
let numbers = wrapInArray(1);
let numbers = wrapInArray('1');// we can't pass string
```

- This Is Where We  Need Generics 

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

# generic-interfaces

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
Because Function Returning Generic Result We Have To Add Type.

# generic-constraints

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

- We Can Also Pass Shape

```ts
function echo<T extends { name: string } >(value:T):T{
    return value;  
}
echo({ name: 'a' });
```

 - With Interface

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

# extending-generic-classes

- Lets Say We're Building Ecommerce  Project
- Where We're Storing Products

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


# keyof-operator:

- Continue With Previous Example
```ts
let store = new Store<Product>();
store.add({ name: 'a',price:1 });
store.find("name","a");
store.find("price",1);
store.find("nonExistingProperty",1); // this will crash program
```

# type-mapping

- Sometimes We Need To Based On The Another Type This Is Called Type Mapping.

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

- Why We Limiting To The Product What If We Have User And So On.
- Create Generic Type
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

- Typescript Utility Types Search On Google
  - Partial ,Required, Readonly, ....

# decorators  

- What?
- Class Decorators 
- Method Decorators
- Property Decorators
- Accessor Decorators
- Parameter Decorators

-  What Are The Decorators

- Decorators Are The Attributes We Apply To The Classes And Members.
- Frequently Used In Angular/Vue
- Under The Hood Decorator Is Just Function That Is Called By Js Runtime , Js Modify Class And Add Properties
- decorator we need to enable property - experimentalDecorators: true

```ts
@Component 
class ProfileComponent {

};
```

# class-decorators

- If Arg Is Function Then Means We Are Applying It On Class
- Every Object In Js Has Prototype Where It Inherits Various Properties And Methods.
- So All The Class With Component Decorator Inherits Properties Of The Component.

```ts
function Component(constructor: Function){
    console.log('component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = ()=>{
        console.log('inserting the component in dom')
    }
}

@Component 
class ProfileComponent {

};
```

- We Can Solve The Same Problem Using Inheritance 

```ts
class Component {
    insertInDom(){}
}

class ProfileComponent extends Component {

};
```

# parameterized-decorators

```ts
type ComponentOptions = {
    selector : string;
}
// acting as decorator factory
function Component(options: ComponentOptions){
    return (constructor: Function)=> {
        console.log('component decorator called');
        constructor.prototype.options = value;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDom = ()=>{
        console.log('inserting the component in dom')
    }
}
}

@Component({ selector: '#my-profile' })
class ProfileComponent {

} 
```

# decorator-composition
- We Can Also Apply Multiple Decorator To The Class.

    ```ts
    function Pipe(constructor: Function){
        console.log('Pipe decorator called');
        constructor.prototype.pipe = true;
    }

    @Component({ selector: '#my-profile' })
    @Pipe
    class ProfileComponent {

    } 
    ```
- Decorator Are Applied In Reverse Order 
 - First Pipe Then Component

# method-decorator: 
- Every Property In Object Has Descriptor Which Describes The Object Property
- Search Typescript Decorators On Google It Has Examples As Well
- turn on noUnusedParameters : false

```ts
function Log(target: any, methodName: string, descriptor: PropertyDescriptor){
const original = descriptor.value as Function;
descriptor.value = function(...args: any){
    console.log('Before');
    original.call(this, ...args);
    console.log('After');
}
}

class Person {
    @Log
    say(message:string){
        console.log('Person says' + message);
    }
}

let person = new Person();
person.say('Hello')
```

# accessor-decorators 

```ts
function Capitalize(target:any, methodName: string, descriptor: PropertyDescriptor){
    const original = descriptor.get;
    descriptor.get = function(){
    const result = original?.call(this);
    return if( typeof result === 'string') ? result.toUpperCase() : result;
    }
}

class Person {
    constructor(public firstName: string, public lastName: string){}

    @Capitalize
    get FullName(){
        return `${this.firstName} ${this.lastName}`
    }

}
```

# property-decorators

```ts
function MinLength(length:number){
    return (target:any, propertyName: string)=>{
        let value : string;
        let descriptor: PropertyDescriptor = {
            get(){ return value };
            set(newValue:string){
                if(newValue.length < length)
                throw new Error(`${propertyName} should be at least ${length} characters long`) 
                value = newValue;                    
            }
        }

        Object.defineProperty(target, propertyName,descriptor) 
    }
}

class User {
    @MinLength(4)
    password : string;
    constructor(password: string){
        this.password = password;
    }
}

let user = new User('1234');
let user1 = new User('123');
console.log(user.password, user1.password); // will throw error - user1.password
```

# parameter-decorators

```ts
type WatchedParameter = {
    methodName: string,
    parameterIndex: number
}

const watchedParameters : WatchedParameter[] = []; 

// we can collect metadata for future in watchedParameters
function Watch(target:any, methodName: string, parameterIndex: number){
watchedParameters.push({
    methodName,
    parameterIndex
})
}
class Vehicle {
    move(@Watch speed: number){}
}

console.log(watchedParameters);
```

# section-7-modules

- Creating And Using Modules
- Module Formats
- Default Exports
- Wildcard Imports
- Re-Exporting

# exporting-and-importing

```ts
File - shapes.ts
export class Circle {
    constructor(public radius: number){}
}

export class Square {
    constructor(public width: number){}
}

File - index.ts

import { Circle as MyCircle, Square  } from './shapes';

let circle = new Circle(1); 
console.log(circle.radius)
```

- Shortcut : Put Cursor On Circle And Press Command + . And Add Import

- Command + . Again If We Want To Move To New File

# module-formats

- AMD
- UMD
- Commonjs
- ES2015 / ES6 - widely supports all browsers, so we don't need other formats

- tsconfig,  module: commonjs,  default
- This Is Module Format Initially Came With Node

- Compile Code And Check Js File
- So Everything Is Converted In Js Like Require, And Exports

- Change Module: Es2015 - Widely Supported
So We Can See In Js File , Import And Export Instead Of Require And Exports

- Depending On Module Format We Set In Our Tsconfig File,
The Generated Js Format Gonna Be Different. 

# default-exports

- Sometimes We Want To Export Single Thing From Module.

```ts
// outside, we need only use store
export default class Store { // default export

}

export enum Format { Raw, Compressed } // named export


// abstraction
class Compressor {}
class Encryptor {}

// in other file
import Store, { Format } from './storage';
```

- Reduce Coupling

# wildcard-imports

- Sometimes We Need Quite Few Objects From Module, But Importing Them One By One Is Quite Bit Hassle

- What If We Want To Import 10 Or More Classes

```ts
import * as Shapes from './shapes';
Shapes.Circle 
Shapes.Square 
```

# re-exporting

- With Re Exporting We Have Single Module Exporting Multiple Modules

- Move File Using Command + .

Separate Code:

```ts
file : shapes/Circle.ts
file : shapes/Square.ts

file: shapes/index.ts - re exporting
import { Circle } from './Circle';
import { Square } from './Square';
export { Circle, Square } 

or 
export { Circle } from './Circle';
export { Square } from './Square';

file: index.ts
import { Circle, Square } from './shapes'
```

- Set Below Line So We No Need To Refer /Index
Tsconfig : 
   moduleResolution : "node" 


# section-8-integration-with-js 
- Including Js Code In Ts Projects
- Type Checking Js Code
- Jsdocs
- Declaration( Type Definition)
- Using Declaration Files From @types/

# including-js-code-in-ts-projects

- Js Code

```js
file: tax.js
export function calculateTax(income){
return income * .3;
}

file : index.ts
import { calculateTax } from './tax'; //compilation error because js is not added in tsconfig by default

let tax = calculateTax(100);
console.log(tax);
```

- tsconfig 
 - We Have To Turn On 
 - allowjs: true property

- After Running Code We Get The Error:
- **cannot use import statement outside a module**

- This Is Happen Because We Use Module To Es2015 In Last Time.

- Changed Below Setting
    tsconfig.json 
    module: CommonJs

- Now It's Working

# type-checking-js-code

```js
let tax = calculateTax();
```

- If We Run This Code In Js We'll Get Error In Runtime Not In Compile Time , So In Order To Solve This Issue 

- tsconfig 
  checkjs: true - get some basic type checking

- Once Run We Get Error With Tsc

- Temporarily Disable Checking Js Code 
- Add Below Line In Top Of The File
    ```js
    // @ts-nocheck
    ```

# how-to-check-for-types-in-js

- Generate Jsdocs On Function

```js
/**
 * @param {number} income - net salary
    * @returns {number}
*/
export function calculateTax(income){
return income * .3;
}
```

- Recompile Code We'll Get Error

```ts
let tax = calculateTax(10_000);
```

- With Jsdocs We Can Describe Out Function , Give Ts Some Information For Validation


# creating-declaration-files-or-type-definition-file

- We've Another Way To Provide Information To Ts
- Name Of The Declaration File Should Be Same As The Corresponding Js File.
- In This File We Can Declare All The Features Of The Target Module.
- Using D File We Can Provide Type Info To Ts

```ts
file: tax.d.ts
declare function calculateTax(income: number): number;

file: tax.js - target module
export function calculateTax(income){
return income * .3;
}
```

- Imp - We Should Describe All The Features Of Target So It Is Visible To Compiler

# using-definitely-typed-declaration-files

- npm i lodash

```ts
    import * as _ from 'lodash';
```

- We Get Error , Can't Find Module Lodash
Since It Is Pure Js Lib 

- So Search Google - Definitelytyped  Github
- This Is Where We Find Declaration Files For All Popular Js Lib

- In Order To Install This Definitely Type
> npm i  -D  @types/lodash

- Error Gone

- We Don't Need To Every Time Install Definitely Typed,
Because Most Of Code Today Supports Declaration File.

> npm i chalk

- In Node_Modules/Chalk We Can See - Index.D.Ts
- So We Don't Need To Install Types For It


# react-with-typescript

# creating-react-app-with-typescript

> npx create-react-app reminders-app --template typescript

> cd reminders-app
> code .

# how-to-add-bootstrap

> npm i bootstrap

- src/index.tsx

```tsx
import 'bootstrap/dist/css/bootstrap.css';
```

- App.css - delete all css and add below
```css
 body {
    padding: 20px
 }
```

- App.tsx
```tsx
function App(){
    return (
        <div className="App">
           <button className="btn btn-primary">click Me</button> 
        </div>
    )
}
export default App;
```

# creating-first-component

Extension - Reactjs Code Snippets By Charalampos

> components/ReminderList.tsx

```tsx

file: src/models/reminder.ts

export interface Reminder {
    id : number;
    title: string;
}

file : src/components/ReminderList.tsx

import React from 'react';
import Reminder from '../models/reminder';

interface ReminderListProps {
    items: Reminder[]
}

function ReminderList({ items }: ReminderListProps) {
    return (
        <ul>
           {items.map(item => <li key={item.id}>{item.title}</li>)} 
        </ul>
    );
}

export default ReminderList;

file: app.tsx
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';

const reminders: Reminder[] = [
    { id: 1, title: 'Reminder 1' }
];

function App(){
    return (
        <div className="App">
           <ReminderList items={reminders} />
        </div>
    )
}
export default App;
```

- if we hover over item it is type of reminder. 


# state-management-using-state-hook :


```tsx
file: app.tsx
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';

function App(){
   const [ reminders, setReminders ] =  useState<Reminder[]>([
    { id: 1, title: 'Reminder 1' }
   ]);

    return (
        <div className="App">
           <ReminderList items={reminders} />
        </div>
    )
}
export default App;
```

# calling-backend

- fake json - jsonplaceholder
- todos endpoint

> npm i axios

- Axios Comes With Type Definition Files So We Don't Need To Declare It Separately.

```ts
file: services/reminders.ts

import axios from 'axios';
import Reminder from '../models/reminder';

class ReminderServie {
    http = axios.create({ 
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    });

    async getReminders(){
       const response = await this.http.get<Reminder[]>('/todos');
       return response.data;
    }
    async addReminder(title: string){
       const response = await this.http.post<Reminder>('/todos',{ title });
       return response.data;
    }

    async removeReminder(id:number){
        const response = await this.http.delete('/todos'+id);
        return response.data;
    }
}

export default new ReminderService(); // export instance of this class
```

# using-the-effect-hook

```tsx
file : app
import reminderService from './services/reminder';

const loadReminders = async()=>{
    const reminders = await reminderService.getReminders(); 
    setReminders(reminders);
} 

useEffect(()=>{
    loadReminders();
},[])

file: ReminderList.tsx

// apply bootsrap

<ul className="list-group">
<li className="list-group-item">

```

# handling-events

```tsx
file : ReminderList
function ReminderList({ items, onRemoveReminder }: ReminderListProps) {

return (
    <>
    <button  
        onClick= () => onRemoveReminder(item.id) 
        className="btn btn-outline-danger mx-2 rounded-pill">Delete</button>
    </>
)}

file: App.tsx
// add function
interface ReminderListProps {
   onRemoveReminder: (id: number)=> void; 
}

const removeReminder = (id: number)=>{
   setReminders(reminders.filter(reminder => reminder.id !== id))
}

<ReminderList items={reminders} onRemoveReminder={removeReminder}>
```

- adding new reminder

```tsx
file: app.tsx -------------

const addReminder = async(title: string)=>{
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders])
};

<NewReminder onAddReminder={addReminder} />

file: - NewReminder.tsx -------------

import React from 'react';

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('');

    const submitForm = (e: React.FormEvent)=>{
        e.preventDefault();
        if(!title) return;
        onAddReminder(title);
        setTitle('');
    }

    return (
        <form onSubmit={submitForm}>
           <label htmlFor="title"></label>     
           <input value={title} onChange={e => setTitle(e.target.value)} id="title"
           type="text" className="form-control"
           />
           <button type="submit" className="btn btn-primary rounded-pill">Add Reminder</button>
        </form>
    );
}

export default NewReminder;
```

# node-with-typescript

- executing typescript with node

> mkdir reminders-api
> cd 
> code .

> npm init --y  
> npm i -D ts-node

file: package.json
- add script
```json
{
    start: "ts-node index.ts"
}
```

# setting-express-project
- installation
> npm i express 
> npm i -D typescript @types/node @types/express

- we're installing ts in project as well because if we given this project to another developer then he don't need to have ts on his machine.

- create ts config
> tsc --init


```ts
file: index

import express from 'express';
const app = express();
app.listen(8000, ()=> console.log('server started'));
```

- install nodemon, latest version also support ts-node
> npm i -D nodemon

- change script
```json
{
    "start":"nodemon index.ts"
}
```

> npm start

# create-basic-route

```ts
file: index

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
})

```

# create-router

```ts
file : router/reminders.ts

import { Router } from 'express';

router.get('/',(req,res)=>{
 res.send('List Of Reminders');
})

export default router;

file: index
import remindersRouter from 'router/reminders';

app.use('/reminders', remindersRouter);

```

# parsing-request-bodies


```ts
file: dtos/createReminder.ts

export default interface CreateReminderDto {
    title: string;
}

file : router/reminders.ts
import  CreateReminderDto from './dtos/createReminder';

router.post('/',(req,res)=>{
   const { title } = req.body as CreateReminderDto;
 
   res.send(title);
})

```

# building-an-api

```ts
file: models/reminder.ts

export default class Reminder {
    id: number;
    isComplete: boolean;

    constructor(public title: string){
        this.id = Date.now();
        this.isComplete = false;
    }
}


file : router/reminders.ts
import  CreateReminderDto from './dtos/createReminder';
import  Reminder from './models/Reminder';

const reminders:Reminder[]  = []

router.get('/',(req,res)=>{
 res.json(reminders);
})

router.post('/',(req,res)=>{
   const { title } = req.body as CreateReminderDto;
   const reminder = new Reminder(title);
   reminders.push(reminder);
   res.status(201).send(reminder);
})

```

````

 
