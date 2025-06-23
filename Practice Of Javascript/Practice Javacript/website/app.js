//Infinite Currying

// Do sum sum()2,3,4,5

// function Sum(a){
//     return function(b){
//         if(b) return a + b
//     return a
//     }
// }

// console.log(Sum(2)(3)(4)(1)(8)(2)()) //

/// Scope

// //Question 1

// let name = "Alex";

// function greet(name){
//     console.log(`Hello,${name}`) //undefined
//     name = "Flex"
//     console.log(`Hello,${name}`)
// }

// greet();

// //Question 2

// let person = "Male"

// const callPerson = (person) => {
//        console.log(person)
//        var person = "Female"
//        console.log(person)
// }

// callPerson()

// Question 3

// function letoutLoop(){
//     let i;
//    for (let i = 0; i < 10; i++) {
//    }
//    return console.log(i)
// }

// function varoutLoop() {
//     var i ;
//   for (var i = 0; i < 10; i++) {}
//   return console.log(i);
// }

// letoutLoop()
// varoutLoop()

//Question  4

// function closureFunction() {
//   let result = 2 + 9;
//   return function () {
//     let totalResult = result - 9;
//     return function () {
//       let newResult = totalResult + 8;
//       return function () {
//         let personResult = newResult + 3;
//         if (personResult > 5) {
//           const humanCalculator = () => {
//             console.log("I am Human Calculator");
//           };
//         } else {
//           const notHumanCalculator = () => {
//             console.log("I an not human Calculator");
//           };
//         }
//       };
//     };
//   };
// }

// console.log(closureFunction())


var message;
console.log(message)
message = "Hello World"