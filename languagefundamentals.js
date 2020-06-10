//JAVASCRIPT LANGUAGE FUNDAMENTALS

console.log('hello');
console.log([1,2,3,4]);

//arrays
console.log({a:1,b:2});
console.table({a:1,b:2});

//errors
console.error('some error');
console.warn('some warning');

//time calculation for statement execution
console.time('hello');
console.log(12345*234234);
console.timeEnd('hello');

console.clear();


var greeting;
console.log(greeting); //undefined
greeting = 'hello';
console.log(greeting);

//JS primitive data types
// String , Number, Boolean, Null, undefined, symbols(ES6)

//Reference Types
//Arrays, Object Literals, Funcitons, Dates, Anything else...

// JS is dynamically typed language -> types are associated with values not vairables.
//the same variable can hold multiple types. we don not need to specify types.


// >>>>> Primitive types

//String
const name = 'John Doe';
//Number
//const age =45;
//Boolean
const hasKids = true;
//Null
const car = null; //bug, null not object
//undefined
let test;
//symbol
const sym = Symbol();

console.log(typeof sym);


// >>>>> Reference types -  Objects
//Array
const hobbies = ['movies', 'music'];

//Object Literal
const address = {
    city:'Mumbai',
    state: 'Maharashtra'
}

const today = new Date();
console.log(today);
console.log(typeof hobbies);

console.clear();

let val;
val = String(5);
val = String(4+4);
//bool to string
val = String(true);
//date to string
val = String(new Date());
// to string
val = (5).toString();

//String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('null');
val = Number([1,2,3]);

//type conversion
val = parseInt('100.30');
val = parseFloat('100.30');

console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

console.clear();

//Type coersion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

console.clear();

// >>>>> Numbers 

const num1 = 100;
const num2 = 50;
//let value;

//simple math
val = num1 + num2;

val = Math.round(2.4);
val = Math.ceil(2.4);
//remove decimal
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.min(1,33,4,1,55,-3);
val = Math.max(1,33,4,1,55,-3);
val = Math.random();
val = Math.floor(Math.random() * 20 +1);
console.log(val);
console.clear();


// >>>>> String Methods and Concatenation

const firstName = 'Amit korde';
const lastName = 'Kotde';
const age = 32;

val = firstName + lastName;

//Escaping
val = 'That\'s awesome, can\'t wait';


//Length
val = firstName.length;

// concat
val = firstName.concat(' ',lastName);
val = firstName.toUpperCase();
val = lastName.toUpperCase();

let v = firstName.concat(' ',lastName);
val = firstName.indexOf('t');
val = v.lastIndexOf('t');
val = firstName.charAt('3');
val = firstName.charAt(firstName.length - 1);
val = firstName.substring(4);

val = firstName.slice(-3);

//split
val = firstName.split(' ');
val = firstName.replace('Amit', 'AK');
val = firstName.includes('Amit');
console.log(val);
console.clear();

// >>>>> Template Literals

const name1 = 'Amit';
const age1 = 32;
const job = 'web developer';
const city = 'bangalore';
let html;

//without template strings (es5)

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + 
        age + '</li><li>Job:' + job + '</li><li>City:' + city + '</ul>';

html = '<ul>'+
        '<li>Name: '+ name + '</li>' +
        '<li>Age: '+ age + '</li>' +
        '<li>Job: '+ job + '</li>' +
        '<li>City: '+ city + '</li>' +
        '</ul>';

//with template strings
function hello () {
    return ' hello function';
}

html = `<ul>
        <li>Name:  ${name}  </li>
        <li>Age:  ${age}  </li>
        <li>Job:  ${job}  </li>
        <li>City:  ${city}  </li> 
        <li>  ${2 + 2}  </li> 
        <li> ${hello()}  </li> 
        <li> ${age >30 ? 'over 30' : 'under 30'}  </li> 
        </ul> `;


        document.body.innerHTML = html;


// >>>>> Arrays & Array Methods

const numbers = [43,56,33,23,44,36,5];
const numbers1 = new Array(43,56,33,23,44,36,5);
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date(),numbers1];

val = numbers.length;
val = Array.isArray(numbers);
val = numbers[3];
val = numbers.indexOf(44);
//insert into array
numbers[2] = 100;

// insert at end
numbers.push(80);

// insert at begining
numbers.unshift(11);

//take off from end
numbers.pop();

//take off from front
numbers.shift();

//splice (removing values in index range)
numbers.splice(1,3);

//reverse
numbers.reverse();
val = numbers.concat(numbers);
//val = mixed.sort();
val = val.sort(function(x,y){
    return x-y;
});

//reverse sort
val = val.sort(function(x,y){
    return y-x;
})


console.log(val);
console.log(numbers);
console.clear();

// >>>>> Object Literals

const person = {
    firstName: 'Amit',
    lastName: 'Korde',
    age: 32,
    email: 'amit@sxb.com',
    hobbies: ['music', 'books'],
    address: {
        city: 'Bangalore',
        state: 'Karnataka'
    },
    getBirthYear: function(){
        return 2020 - this.age;
    }
}

//get specific value
val = person.firstName;
val = person['firstName'];


val = person;
val = val.getBirthYear();
console.log(val);

const people = [
    {name: 'Amit', age: 32},
    {name: 'Kalpesh', age: 30},
    {name: 'Jagtap', age: 27}

];

console.log(people);
for(let i=0;i<people.length;i++){
    console.log(people[i].name,people[i].age);
    
}

console.clear();


// >>>>>> DATE & TIMES

let day = new Date();
//day = new Date('June 9 2020');
val = day;
val = day.getMonth();
val = day.getDate();
val = day.getDay();
val = day.getTime();
console.log(val);
console.clear();

// >>>>>> If Statements & Comparison Operators

const id = '100';

//Equal to value
if(id == 100){
    console.log(`Correct ${id}`);
}
else{
    console.log("Incorrect")
}

//Equal to value and type
if(id === 100){
    console.log(`Correct ${id}`);
}
else{
    console.log("Incorrect")
}

console.clear();

// >>>>>> Function Declarations & Expressions

function greet(firstName1 ='Amit', lastName1='Korde'){
    return 'Hello ' + firstName1 + ' '+ lastName1;
}

console.log(greet('Kalpesh'));

const square = function(x =3){
    return x*x;
}

console.log(square());


// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
    console.log('IFFE');
})();

(function(name){
    console.log('Hello '+name);
})('Amit');

console.clear();

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`edit todo ${id}`);
    }
}
todo.delete = function(){
    console.log('delete todo');
}

todo.add();
todo.edit(12);
todo.delete();

console.clear();

// >>>>>>> General Loops

for(let i =0 ; i< 10 ; i++){
    
    if(i === 2){
        console.log('2 is printing');
        continue;// continues the loop without going forward
    }

    
    if(i === 5){
        console.log('5 is printing');
        break;// breaks the loop without going to next loop counter
    }
    console.log('Number',i)
}

console.clear();

// While Loop

 let i =3;
 while (i<10){
     console.log(' number ',i);
  i++;
}

// Loop Through Array

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i =0 ; i< cars.length ; i++){
    console.log(cars[i]);
}

cars.forEach(function(car,index, array){
    console.log(index, car);
    console.log(array);
});
//console.clear();

// MAP

const users = [
    {id: 1, name: 'Amit'},
    {id: 2, name: 'Kalpesh'},
    {id: 3, name: 'Sushant'}
];

const ids = users.map(function(user){
    console.log(user.id);
    return user.id;
});
console.log(users);
console.log(ids);

console.clear();

// For In Loop

const user1 = {
    firstName: 'Amit',
    lastName: 'Korde',
    age: 32
}

for(let x in user1){
    console.log(`${x} : ${user1[x]}`);
}

console.clear();

