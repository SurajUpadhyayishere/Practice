
// const Person = {
//   Name:"John",
//   Age: 30,
//   Job: "AI Engineer",
//   EyeColor: "Black"
// }

// let {Name,Age} = Person  

// console.log(Person)


//Creating  Arrays

// const  Fruit = ["Apple","Banana","Orange","WaterMelon"]

// let {Fruit1,Fruit2} = Fruit
// console.log(Fruit1)
// console.log(Fruit2)



// const buildCalculator   = ((firstNum,secondNum) => {
//     let result;
//     if (operation === "Add") {
//        result = firstNum + secondNum;
//     } else if (operation === "Subtract") {
//       result = firstNum - secondNum;
//     } else if (operation === "Multiply") {
//       result = firstNum * secondNum;
//     } else if (operation === "Divide") {
//       try {
//         result = firstNum / secondNum;
//       } catch (error) {
//         console.log("Dominator must be non-integer");
//       }
//     }
//     console.log(result);
// })

// let firstNum = Number(prompt("Enter The First Number: "));
// let secondNum = Number(prompt("Enter The Second Number: "));
// const operation = prompt("Enter The Operation :  ");

// operation = operation.charAt(0).toUpperCase  + operation.slice(1).toLowerCase();

// buildCalculator(firstNum,secondNum,operation)



let user =  "Alex";
let registrationList = ["John","Alex","Ryan","Yash"]

const isPresent = registrationList.includes(user) ?  "Yes":"No";

console.log(isPresent);