// Create a function fetchData that simulates fetching data from an API. The function should return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object should represent a user with properties id, name, and age.

const data = [
    {id:1,name:'Bitisha',age:19},
    {id:2,name:'Sahira',age:18},
    {id:3,name:'Aaniya',age:20}
]

function fetchData(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },2000);
    })
}

fetchData()
.then((msg) => {
   console.log(msg)
}).catch((err) => {
    console.error(err)
});


//Create a function createCounter that returns an object with two methods: increment and getCount. The increment method should increase the internal count by 1, and the getCount method should return the current count. Use a closure to maintain the internal count variable.


function createCounter(){
    let count=0;
    return {
        increment:function(){
            count +=1
        },
        getCount:function(){
            return count
        }
    }
}

const counter  = createCounter()
console.log(counter.getCount())
counter.increment()
console.log(counter.getCount())


//Create a function processData that accepts an array of numbers and a callback function. The function should process each number in the array using the callback function and return a new array of processed numbers.

function process(arr,callback){
    const processedArray = []
    for(let i=0;i<arr.length;i++){
        processedArray.push(callback(arr[i]))
    }
    return processedArray
}

function subOne(arr){
    return arr-1
}

const firstArray = [1,2,3,4,5]
const secondArray = process(firstArray,subOne)
console.log(secondArray)


//Rewrite the fetchData function from Question 1 using async and await.


async function getData(){
    const users = await fetchData()
    return users
}

getData().then((msg)=>console.log(msg))

//Given an array of numbers, create a function that doubles each number using map.

const Number =[1,2,3,4,5]

mapp = Number.map((num)=>num+num)
console.log(mapp)


// Given an array of numbers, create a function that filters out numbers less than 10 using filter.

const arrayOfNumber2 =[4,5,10,20,30]

filtering = arrayOfNumber2.filter((num)=>num<10)
console.log(filtering)


//Given an array of numbers, create a function that finds the first number greater than 15 using find.

finding = arrayOfNumber2.find((num)=>num>15)
console.log(finding)

//Given an array of numbers, create a function that sums all numbers using reduce.

function sumArray(arr){
    const sum = arr.reduce((x,y)=>x+y)
    return sum
}

const sum = sumArray(Number)
console.log(sum)


//Given an array of user objects, write a function to transform this array into an object where the keys are user IDs and the values are the corresponding user objects.

function arrayToObj(users) {
    const userObj = users.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    }, {});

    return userObj;
}

const objArrays = arrayToObj(data);

console.log(objArrays)


//Create a Person class with a constructor that accepts name and age parameters. Add a method describe that returns a string describing the person.

class Person{
    constructor(name,age){
        this.name =name
        this.age = age
    }

    describe(){
        return `${this.name} is ${this.age} years old`
    }
}

const person1 = new Person('Bitisha',19)
console.log(person1.describe())


//Create a Student class that extends Person and adds a grade property. Add a method study that returns a string indicating the student is studying.

class Student extends Person{
    constructor(name,age,grade){
        super (name,age);
        this.grade = grade;
    }

    study(){
        return `${this.name} is studying`
    }

}

const student1 = new Student('Bitisha',20,'A')
console.log(student1.describe())
console.log(student1.study())

//Modify the fetchData function to randomly reject the promise with an error message 'Failed to fetch data'. Handle this error using .catch when calling the function.


function fetchData2(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()<0.2){
                resolve(data)
            }else{
                reject(new Error('Failed to fetch data'))
            }
        },1000);
    })
}

fetchData2()
.then((msg) => {
   console.log(msg)
}).catch((err) => {
    console.error(err)
});


//Modify the fetchData function with async/await to handle errors using try/catch blocks.
async function getData2(){
    try{
        const users = await fetchData2()
        return users
    } catch(error){
        console.error(error)
    }
}

getData2().then((msg)=>console.log(msg))
.catch((err)=>console.error(err))



//Given an array of users, where each user has a name and an array of hobbies, create a function that returns an array of all unique hobbies using reduce.

function getAllUniqueHobbies(users) {
    const allHobbies = users.reduce((x, y) => {
        return x.concat(y.hobbies);
    }, []);

    const uniqueHobbies = [...new Set(allHobbies)];
   
    return uniqueHobbies;
}

const usersData = [
    { name: 'Bitisha', hobbies: ['reading', 'writing'] },
    { name: 'Aniya', hobbies: ['writing', 'cooking'] },
    { name: 'Krita', hobbies: ['reading', 'painting'] }
];

const uniqueHobbies = getAllUniqueHobbies(usersData);
console.log(uniqueHobbies);



/*

1) Why are promises used in JavaScript? Explain the advantages of using promises over
traditional callback functions.

=>
Promises enhance the cleanliness and comprehensibility of asynchronous JavaScript code by enabling the sequential execution of tasks and centralized error management. This contributes to better readability.




2) What is a closure in JavaScript? Provide an example.
=> In JavaScript, a closure is a function that retains access to the variables defined in the scope where it was originally created, even when it's invoked in a different context. This allows the function to utilize those variables even after the surrounding code has completed its execution.

example :

function outerFunction() {
    let outerVariable = 'outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc();


3)What is a callback function and why is it used in JavaScript?

=>A callback function in JavaScript refers to a function passed as an argument to another function, intended to be executed at a later point, typically after a specific task such as data loading or event handling has been completed. This mechanism enhances the flexibility and responsiveness of JavaScript programs.



4)What are async/await in JavaScript and how do they improve asynchronous
programming?

=>Async/await in JavaScript streamlines asynchronous programming by enabling async functions to halt execution until promises are fulfilled, thereby creating the illusion of synchronous code. This advancement boosts readability, facilitates error handling through try/catch blocks, and promotes sequential code execution, leading to enhanced maintainability.


5)Write the difference between ES6 and JS.

=>  ES6, also known as ECMAScript 2015, denotes a particular iteration of JavaScript, bringing forth novel functionalities and syntax refinements to the language. On the other hand, JavaScript serves as the overarching term encompassing the complete language spectrum, including its different versions like ES6. ES6 brought about notable advancements like arrow functions, let and const for variable definition, class syntax, template literals, destructuring assignment, among others. JavaScript, in its entirety, serves as the scripting language for web pages and application development, encompassing all its iterations, including ES6.


6) What are some of the major features introduced in ES6?

=> ES6 (ECMAScript 2015) introduced several major features and syntax enhancements to JavaScript, including:

Arrow functions: A concise syntax for writing anonymous functions.
let and const: Block-scoped variable declarations.
Classes: A more convenient syntax for creating constructor functions and inheritance.
Template literals: String interpolation and multiline strings.
Destructuring assignment: Easily extract values from arrays or objects.
Default parameters: Specify default values for function parameters.
Rest parameters: Gather remaining function arguments into an array.
Spread syntax: Expand arrays or iterables into individual elements.
Promises: A built-in way to work with asynchronous operations.
Modules: A standardized way to organize and import/export code between files.

These are some of the key features introduced in ES6, which have significantly improved the readability, maintainability, and expressiveness of JavaScript code.



*/