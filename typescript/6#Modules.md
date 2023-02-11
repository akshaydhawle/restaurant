
# exporting and importing

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

- shortcut : put cursor on circle and press command + . and add import

- command + . again if we want to move to new file

# Module formats

- AMD
- UMD
- Commonjs
- ES2015 / ES6 - widely supports all browsers, so we don't need other formats

- tsconfig,  module: commonjs,  default
- this is module format initially came with node

- compile code and check js file
- so everything is converted in js like require, and exports

- change module: ES2015 - widely supported
so we can see in js file , import and export instead of require and exports

- depending on module format we set in our tsconfig file,
the generated js format gonna be different. 

# Default Exports

- sometimes we want to export single thing from module.

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

- reduce coupling

# Wildcard imports

- sometimes we need quite few objects from module, but importing them one by one is quite bit hassle

- what if we want to import 10 or more classes

```ts
 import * as Shapes from './shapes';
 Shapes.Circle 
 Shapes.Square 
```

# Re- exporting

- with re exporting we have single module exporting multiple modules

- move file using command + .

separate code:

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

- set below line so we no need to refer /index
tsconfig : 
   moduleResolution : "node" 

