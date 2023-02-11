
# Node with typescript

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

# setting express project
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

# create basic route

```ts
file: index

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
})

```

# create router

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

# parsing request bodies


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

# Building an API

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

 
