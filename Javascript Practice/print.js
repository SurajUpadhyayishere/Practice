// const num = 5;
// const bool = true;
// const str = "Hello World"
// const char = "C"
// const decimal = 3.4;
// const  BigintNum = 2n;
// const empyt = null
// const undefine = undefined
// const unique  = Symbol

// console.log(typeof  num) //Number
// console.log(typeof bool)  //Boolean
// console.log(typeof str) //String
// console.log(typeof char) //Character
// console.log(typeof  decimal)  //float
// console.log(typeof BigintNum) //Bigint
// console.log(typeof empyt)  //null
// console.log(typeof undefine)  // undefined
// console.log(typeof unique)  //function

// let Str  =  "Alex"
// let Num = 4
// let bool =  false

// Str = Number(Str);
// Num = String(Num);
// bool = Symbol(bool);

// console.log(typeof Str); //Number
// console.log(typeof Num); //String
// console.log(typeof bool); //Symbol

// let undefine; //undefined
// let Null = null; //Null

// console.log(undefined == null) //true  (loose equality)
// console.log(undefined === null)  //false (strict equality)

// let userInput = prompt("Enter");
// console.log(typeof userInput);

// e

//IMPORTANT  in over iterate the index of array, of over the elements iterate the index

//Coercion
// let r = "10"   + 2
// console.log(typeof  r)

// r =  "10" -2
// console.log(typeof r)

// function greet(){
//     function message(name){
//         console.log(`Hello,${name} How are you`)
//     }
//     return message()
// }
// //outside the scope

// ///create the return function method

// const messageGreet = greet()
// messageGreet("Alex") // Hello,Alex How are you

// const time = 4:45;
// console.log(typeof time); //error

// const newTime = "4" + ":" + 45
// console.log(typeof newTime) // 4:45 (type : String)

// function PuppyBhai() {
//     function  whichTime(time){
//         console.log(`PuppyBhai Wants Puppy on `)
//     }
// }

// const Informationn = {
//     name:"Suraj Upadhyay",
//     age:17,
//     "occupation of Person":"Student",
//     city:"Delhi",
//     Gender:"Male"
// }

// console.log(Informationn)
// console.log(Informationn.age)
// console.log(Informationn.Gender)
// console.log(Informationn.city)
// console.log(Informationn['occupation of Person'])

//inside function
//return  inside function

// function greet() {
//     function message(name){
//         console.log(`Hello, ${name} How are you`)
//     }
//     //return inside function
//     return message;
// }

// const callGreet = greet()
// callGreet("Alex")

// User inputs

// export async function doubleNum (a){
//     setTimeout(() => {
//         const result =  (a ** 2);
//         return result;
//     }, 2000);

// }

// console.log(doubleNum(3))

// const checkPalindrome = (str) => {
//   const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return cleaned === cleaned.split('').reverse().join('');
// };

// console.log(checkPalindrome("Madam")); //true
// console.log(checkPalindrome("Hello")); //false

// const checkEvenNum = arr=> {
//     console.log("List Of Even Number")
//     for (const x of arr) {
//         if (x%2 === 0){
//             console.table(x)
//         }else{
//             console.log("Odd Numbers")
//             console.table(x);
//         }
//     } 
// }


/*
Filter even numbers from an array.

From an array of strings, filter names longer than 5 characters.

Given an array of numbers, filter only the positive numbers.

From a list of student objects, filter students with marks > 75.

From a list of items, filter out the ones that are out of stock.
*/

// let numGroup = [2,3,4,5,2,32,5234,234,2,3,5,46,34,234,23,43]
// const num =  numGroup.filter(x => ( x%2 === 0))
// console.log(num)


// let nameGroup =  ["Hitesh","Mohit","Danish","Faizan"]
// let name =  nameGroup.filter(names => (names.length > 5))
// console.table(name);


// let numGroup = [-93,-2,4,6,2,234,-453,234,0,324]
// const num =  numGroup.filter(x => ( x >= 0))
// console.table(num);

/*
Square each number in an array.

Convert an array of names to uppercase.

From an array of numbers, create a new array with each number +10.

Map an array of objects to just their name properties.

Given an array of strings, return their lengths.
*/

// const NumTogether = [1,2,3,4,5,6]
// let squareNum = NumTogether.map(x => (x**2))
// console.table(squareNum);



// const stringGroup = ["Hitesh", "Mohit", "Danish", "Faizan"];
// let stringName = stringGroup.map(x =>{Number(x.length)})
// console.table(stringName);



// const numStorage = [1,3,5,7,13,15,17,11,68]
// const numItem = numStorage.find((item)  => (item % 2 ===  0))
// console.log(numItem)  //68

// const numStorage = [1,2,3,4,5,6,7,8]
// const multplyNum =  numStorage.reduce((acc ,curr) => acc/curr,1)
// console.log(multplyNum)


// const numStorage = [1,-52,-532,-12] 
// const findNum = numStorage.some((numStorage) => (numStorage > 0))   //soon find the matching  value
// console.log(findNum)

// const nameString = ["Rock","Jessica","Tina","Faizal","Tanishak"]
// const onlyString =  nameString.every((name)  =>  (typeof name  == "string"))
// console.log(onlyString) //true


const classRoom  = [ 
    {name:"One",grade:89},
    {name:"Two",grade:98},
    {name:"Three",grade:45},
    {name:"Four",grade:74},
    {name:"Five",grade:83},
    {name:"Six",grade:98}
]

const onlyPassStudent  = classRoom.find((student)  => (student.grade <= 55))
console.log(onlyPassStudent) //Only Return One Value




