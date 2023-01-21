// string 
const str = 'my name is akshay Akshay';
const regex = new RegExp(/akshay/, 'ig');

let result = regex.test(str);
let matchResult = str.match(regex);
console.log(result, matchResult);

const csv = 'akshay,26,pune'.split(',');
console.log(csv);

const res = 'adcb'.split('').sort((a, b) => b - a).join('');
console.log(res);