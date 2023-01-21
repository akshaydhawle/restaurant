// string 
const str = 'my name is akshay Akshay';
const regex = new RegExp(/akshay/, 'ig');

let result = regex.test(str);
let matchResult = str.match(regex);
console.log(result, matchResult);

const csv = 'akshay,26,pune'.split(',',2);
console.log(csv);

let join = [1,2,3,4].join();
console.log(join);

let order = [1,3,4,2].sort((a,b)=>a-b);
console.log(order);

let map = [1,2,3,4].map((value, index, self)=>{
   if(value === 1){
    return true
   } else {
    return false;
   }
})

let mapResult = [{ name: 'akshay',age:27},{ name: 'priya',age:26}].map((value,index,self)=>{
    console.log('value:',value,'index:',index,'self:',self);
    return {
        name: value.name
    }
});

let filter = [1,2,3,4].filter((value,index,array)=>{
    if(value !== 1) return value;
});

let find = [1,2,1,3,4].find((value)=> value === 1 );
let findIndex = [1,2,1,3,4].findIndex((value)=> value === 3 );
console.log(findIndex );

// is already exists
// is found
// try catch
function test({ name }){
    return name ;
}

console.log(test({ name: 'test' }));
function log(arr1){
 console.log(arr1);
}

log([1,2,3,5]);

let req = {
    params: { id: 1 },
    query: { name: 'akshay' },
    body: { age: 27 },
    headers:{

    },
    
}

let res = {
    headers:{},
    body:{},
    statusCode: 200
}

function CustomError({ message = '', statusCode, data }) {
    let err = new Error(message);
    Object.setPrototypeOf(err, CustomError.prototype);
    err.message = message;
    err.statusCode = statusCode;
    err.data = data;
    console.log(err);
    return err;
}

function test1(){
    try {
     test2();
       
    } catch (error) {
        console.log(error);
    }
}

function test2(){
    try {
        test3();
    } catch (error) {
        throw error;        
    }
}

function test3(){
    try {
        throw new Error('invalid user');
    } catch (error) {
        throw error;
    }
}


test1();