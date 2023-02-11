# Typescript

- what is typescript

- js is kid without discipline
- ts is kid with some discipline
- ts is programming lang built top of the js.
- but typescript adds benefits
    - static typing
    - code completion
    - refactoring
    - shorthand notations
- helps us build robust and maintainable app in less type.   

- static typing : 
- we know the type of variable while coding.

-  drawbacks of ts
 - compilation - compiler need to transpile ts code into js code
 - discipline in coding

# setup
- download nodejs & install typescript compiler
    - sudo npm i -g typescript

- verify installation
    - tsc -v

# code

- typescript is superset of js

> create
- mkdir hello-world
- cd hello-world
- touch index.ts

```typescript
 let age: number = 10;
 age = 'a'; // it will complain
```
- it will generate js code which use old js

- if we want modern js to generate we have to add target

> configure typescript compiler

- this will create tsconfig config file
> tsc --init

- this all settings has desc in front of this.

- we can select **target** as which js version we want
- target property we can use.

# property : 
- rootDir:
 - it is directory that contains source files
- outDir: 
 - it is directory where contains js file , when we compile code the js code will stored into this dir.  
- removeComments: 
  - ts will remove all comments when convert code into js.  
- noEmitOnError:
  - when true it will not generate js code if code has errors.  

# debug
- in order to debug we have to set property sourceMap to true.

# property : 
- sourceMap
    - it will tell compiler which line of ts code map to which js code.

- after setting this we can add debugger breakpoint on line.

- create launch.json file
 - we can see **program** to where to start.
 - outFiles - output files store location
 - add one more setting
  > preLaunchTask: "tsc: build - tsconfig.json"
 - using this setting we're telling typescript compiler to build our application using this tsconfig file 

 - start debugger

 - step over - for executing one line
 - step into - for stepping into function
 - step out - for stepping out from function

 left side variables
 - we have all variables values
 - if there is something which you're not able to see in variables you can go to the watch window
  - insert variable name

  