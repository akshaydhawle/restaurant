
# React With typescript

# creating react app with typescript

> npx create-react-app reminders-app --template typescript

> cd reminders-app
> code .

# how to add bootstrap

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

# creating first component

extension - Reactjs Code snippets by charalampos

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


# state management using state hook :


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

# calling backend

- fake json - jsonplaceholder
- todos endpoint

> npm i axios

- axios comes with type definition files so we don't need to declare it separately.

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

# using the effect hook

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

# handling events

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
