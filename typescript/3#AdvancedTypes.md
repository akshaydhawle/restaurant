
# Advanced Types

- Type Aliases
- unions and intersections
- Type narrowing
- Nullable Types
- The unknown type
- never type


# Type Aliases :

- there are 3 problems in previous employee object
- if we want to create another employee , we have to repeat shape.
- we end up duplication our code which is bad, we should
follow DRY principle.
- this is where we use type alias , using this we can define custom Types.

- we can reuse employee type now
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

# union Types ( | )

- using union we can give function or variable more than one type.

- using vertical bar we can give union type.
```ts
 function kgToLbs(weight: number | string): number {

 }
 kgToLbs(10);
 kgToLbs('10');
```

- but with using union we lose methods of number and string, we'll able to see methods which is common in string and number in autocompletion.

- we can use narrowing

```ts
 function kgToLbs(weight: number | string): number {
    // narrowing
    if(typeof weight === 'number') return weight * 2.2;
    else return parseInt(weight) * 2.2; 
 }
 kgToLbs(10);
 kgToLbs('10');
```
- now we can see methods of numbers and strings.

# Intersection Types ( & )

- we can merge 2 types;

- in order to implement textbox we need widgets of draggable and Resizable

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

# Literal Types : (exact,specific value)

```ts
let quantity: 50 | 100 = 50;
```

- now quantity can only set to 50 or 100;
- lets create custom type.
- literal don't have to be number they also can be a string.

```ts
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = 'cm' | 'inch';
```

# nullable Types

- ts is very strict about using null and undefined 

```ts
 function greet(name:string){
    console.log(name.toUpperCase());
 }
 greet(null); // null is common source of problem, ts will complain
```
- arg of null is not assignable to string
- this comes from strict property & strictNullChecks in ts
- but we can turn off this feature, we should always turn it on.

```ts
 function greet(name:string|null){ // allowed values
    if(name)
        console.log(name.toUpperCase());
    else 
        console.log('hi');    
 }
 greet(null);
```

# optional chaining

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

- there is simpler way to right this

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

- if we have getCustomer returning customers array

```ts
// for arrays
customers?.[0]

 let log: any = null; // for functions
 log?.('a');
```

# nullish coalescing operator

- in plain js
```ts
let speed : number | null = null;
let ride = {
    speed : speed | 30
}
```
- accurate way to check this

```ts
speed : speed !== null ? speed : 30;
```
- in ts we have better way;
```ts
speed : speed ?? 30; // nullish coalescing operator
```

- we are saying if speed is not null or undefined use that value otherwise use 30

# Type Assertion
```ts
let phone = document.getElementById('phone');
```
HTMLElement is the class is defined represents any html element

- if we type phone. we cannot see value property
- so we do type assertion. we'll tell tsc compiler i know more than you about this element.

```ts
let phone = document.getElementById('phone') as HTMLInputElement;
```
- now we can see the phone.value property
- another syntax
```ts
let phone = <HTMLInputElement> document.getElementById('phone');
```

# unknown type

- we should try to avoid any as much as possible
- let's say we've situation so we need to use any.
- there is big problem on any

```ts
function render(document: any){
    document.move();
    document.fly();
    document.whatever();
} 
```

- here is no any type checking on document
- so here is good option
- we immediately see compilation error.

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

- so compiler don't know about document has which methods
- so we use type narrowing & type guard
- typeof works on primitive types not on custom types
- for the classes we need to use instanceof

# Never type

- represents the values that never occurred.

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

- so we annotate return type of method to never to tell the compiler this function never returns.

- set allowUnreachableCode in tsconfig to false

```ts
function reject(message): never{ 
    throw new Error(message);
}
reject('...');
console.log('hello world'); // will never execute
```
