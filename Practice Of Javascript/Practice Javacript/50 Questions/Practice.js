// //Question 1
// console.log("Suraj Upadhyay","My Favorite Hobby is Travelling")  //  Suraj Upadhyay My Favorite hobby is Travelling

// //Question 2
// console.log((45*2)-10)  //80

// //Question 3
// const dt = new Date()
// console.log(dt.getFullYear())  //2025       getFullYear() =  Dynamic Function , getFullYear = Static Function

// //Question  4
// let firstName  =  "Suraj"
// let lastName = "Upadhyay"
// let fullName =  firstName + ''  + lastName
// console.log(fullName)  //Suraj Upadhyay

// //Question 5
// let num  =  78
// console.log(num) //78
// num  =  45
// console.log(num)  //45

// //Question 6
// console.error("Errro Occur")

// //Question 7
// let squareSide = 12;
// console.log(squareSide ** 2) //144

// //Question 8
// let NUM  = 12;
// let character = "a"
// let  word =  "suraj"
// let bool = true
// let  floating = 45.23

// console.log(typeof NUM)   //number
// console.log(typeof character) //char
// console.log(typeof word) //string
// console.log(typeof bool)  // boolean
// console.log(typeof floating)   //float

// //Question 9

// let age = 17;
// let message = age >=18 ?  "Adult" : "Not Adult";
// console.log(message)  //Not Adult

// //Question 10

// console.log(100/0)  //error

// // Part2: Variable and Data Types (10  Questions)

//what is the function declaration

// function Square(side){
//   return side  * side;
// }

// // what  is the function expression   - Anonymous Fucntion

// const Square =  function(side){
//   return  side * side;
// }

// What is the first class functions
//Treat like a variable  , can be store inside a function

// Q what is IIFE

// (function userName(name){
//     console.log(`Hello,${name} How are you`)
// })("Alex");

//function hoisting

// greet("Alex");

// function  greet(user){
//     const userName  = user.toLowerCase()
//     console.log(`The user name is ${userName}`)
// }

//Rest and Spread Operator

// function Sum(...nums){
//     console.log(nums[0]*nums[1])
// }

// var arg  = [2,3]
// Sum(...arg)

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(add(4)(5));

// function greeting(greet = "Hello") {
//   return function (name) {
//     return function () {
//         console.log("Where are you going")
//         return function(work){
//             return `${greet} ${name} what are you doing, ${work}`
//         }
//     };
//   };
// }


// console.log(greeting()("Alex")()("Cycling"))



// function basicCurry(firstName){
//     return function(lastName){
//         return `User fullName is ${firstName} ${lastName}`
//     }
// }

// console.log(basicCurry("Suraj")("Updhyay")) // User fullname is Suraj Upadhyay


// function addThreeNumber(a){
//     return function(b){
//         return function(c){
//             return a + b + c
//         }
//     }
// }

// console.log(addThreeNumber(16)(27)(7)) // 50




// function multipleTwo(a){
//     return function(b){
//         return a * b 
//     }
// }

// console.log(multipleTwo(3)(4))



// //Convert normal function into currying function 
// function curryConversion(fn){
//     return fn(a) {
//         return function(b){
//             return function(c){
//                 return a * b * c
//             }
//         }

//     }
// }

// console.log(curryConversion()(4)(67)(2))

// function addTwoNumber(a,b){
//     return a * b 
// }

// console.log(addTwoNumber(3,4))



// console.log("Synchronous Task")

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// console.log("Synchronous Task End")



// console.log("Asynchronous Task")


// async for (let i = 0; i <10; i++) {
//     await console.log(i)
// }

// console.log("Asynchronous Task End")



//Closures

// //Implement a counter using closures
// function Counter(){
//     let counter = 1
//     return function addCounter(){
//     console.log(counter++)
//     }
//     addCounter()
// }


// //Create Private variable using closures

// function sayMyName(){
//     var namePerson = "Suraj Upadhyay"
     
//     return function(){
//         console.log(namePerson)
//     }
//     sayMyName()
// }

// let callName = sayMyName()
// callName()



function subtraction(num){
    function inAction(b){
        console.log(num - b)
    }
    subtraction()
}

let subtractiontTo10 = subtraction(10)
subtractiontTo10(8) // 2
subtractiontTo10(18) // -8
subtractiontTo10(25) // -15