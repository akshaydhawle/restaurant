# we'll learn
 - the any type
 - arrays
 - tuples
 - enums
 - functions
 - objects  

> **types**
-  js has types
 - number
 - string
 - boolean
 - null
 - undefined
 - object
- ts extends this to
 - any
 - unknown
 - never
 - enum
 - tuple 

```ts
let sales: number = 123_456_789;
let course : string = 'Typescript' // or
let course  = 'Typescript' // or
```
if we have large number we can annotate number by underscore.

- in ts we don't need to always annotate. because compiler detects type based on value.

- by default if you declared variable it has type any

> Any
 - non initialized variables has any type;
- but it is ignoring typescript idea of type safety
- if we use any we're losing that feature of typescript.
- best practice is to avoid using any type as much as possible

- property: 
    - strict: use to tell erros
    - noImplicitAny: use to tell errors when in app we use any

# Arrays
- we should annotate arrays

```ts
 let numbers: number[] = [1,2,3];// right
 let numbers = [1,2,3,'3'];// wrong
 let numbers = []; // wrong
```

- numbers.forEach item will gives code completion methods automatically on numbers

# Tuples - fixed length arrays
- we use for pair of values

 ```ts
 let user: [number, string] = [1, 'Akshay'];
 ```
 - it should have exactly two values of provided types.

- internally it represents as plain js arrays

- **please keep tuples limited two values.**

# Enums
- we can represent size of t-shirts
- by default ts use values from 0,1,2.
- we also can set values
```ts
const small = 1;
const medium = 1;
const large = 1;

// vs
enum Size { Small, Medium, Large = 'L' }
```

# Functions

- how ts avoid common problems using functions
- always properly annotate functions
```ts
 function calculateTax(income: number): number(){
     return 0
 }
```

- we have income as unused parameter , we have option to detect unused parameter.
- property - noUnusedParameters: true

```ts
 function calculateTax(income: number): number(){
     if(income < 50_000){
        return income * 1.2;
     } 
 }
```

- so in above code it will complain since if not satisfied then function return undefined.

- we have one setting to detect this
 - noImplicitReturns : true
 - it means it will not complain but gives you warning error.

```ts
 function calculateTax(income: number): number(){
     if(income < 50_000){
        return income * 1.2;
     } 
     return income * 1.3;
 }
```
- annotate return types properly to function 

- detect unused variables
 - noUnusedLocals
  - with the help of this we can removed unused variables.

# object

- in js objects are dynamic.

```ts
 let employee = { id : 1 };
 employee.name = 'something';
```

- we can easily add name to this employee object in js
but in ts is not valid.

- ts always infer types from initialization

>  we can explicitly add types


```ts
 let employee: { id: number, name: string } = { id : 1 };
 employee.name = 'something';
```

- but now compiler will complain name is missing at initialization step.

- one sol is set name to empty string but null or undefined not allowed.

- second solution- make this property optional

- but this is not good solution, so either set name to empty string or string.

- don't use ts blindly.

- sometimes we need property readonly.

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
