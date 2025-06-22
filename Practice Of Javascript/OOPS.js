/* 
create a function Person name , age and add method  greet()
*/

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello,${this.name} How are you`);
// };

// const callTo = new Person("Alex", 89);
// callTo.greet(); //  Hello,Alex How are  you

// Person.prototype.getDetails = function () {
//   const Detail = {
//     Name: this.name,
//     Age: this.age,
//   };
//   console.table(Detail);
// };

// const personDetail = new Person("Alex", 45);
// personDetail.getDetails();

// function  Car(speed)  {
//        this.speed = speed;
// }

// Car.prototype.speedOfCar = function(){
//          this.speed  += 10;
//          console.log(this.speed);
// }

// const whatCarSpeed  =  new Car(30);
// whatCarSpeed.speedOfCar()

// Animal method tell i am animal
// Dog  method tell i am  dog
// bullDog method tell i am bullDog

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.Intro = function () {
//   console.log(`${this.name},I am a Animal`);
// };

// function Dog(name, whichAnimal) {
//   this.whichAnimal = whichAnimal;
//   Animal.call(this,name);
// }

// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.tellGeneral = function () {
//   console.log(`${this.name},I am a ${this.whichAnimal}`);
// };

// Dog.prototype.constructor = Dog;

// function Bulldog(name,whichAnimal, beSpecific) {
//   this.beSpecific = beSpecific;
//   Animal.call(this,name)
//   Dog.call(this,whichAnimal);
// }

// Bulldog.prototype = Object.create(Dog.prototype);

// Bulldog.prototype.tellSpecific = function () {
//   console.log(
//     `I am ${this.whichAnimal} and be especific I'm ${this.beSpecific}`
//   );
// };

// Bulldog.prototype.constructor = Bulldog;

// const addTwoNum = (a, b) => {
//   const Sum = a + b;
//   return Sum;
// };

// console.log(addTwoNum(3, 7));

// const foodMenu = {
//   food: ["Burger", "Noodles", "Spaghetti", "Pizza"],
//   Menu() {
//     console.log(this.food[3]);
//   },
// };
// foodMenu.Menu();

// arrList = [1, 2, 3, 4, 5, 6, 7];
// const multipleOfTwo = (arrList) => {
//   arrList.map(function (x) {
//     return x * 2;
//   });
// };

// console.log(multipleOfTwo(x));

// const sum = ((a,b) =>{
//   let result = a + b
//   return result
// })

// console.log(sum(1,2))

// let firstName = "Suraj";
// let lastName  = "Upadhyay";

// let print =  `The fullName is ${firstName} ${lastName}`
// console.log(print)

// const person = [{name:"John", age:30},{name:"Alex",age:40}];

// console.log(person.name)

// console.log(person.age)

// const arr1 = [1,2]
// const arr2 = [3,4]

// const mergeArr = arr1.concat(arr2)
// console.log(mergeArr)

// function greet(name = "Guest") {
//     let greeting = `Hello, ${name}`;
//     return greeting
// }

// console.log(greet("alex"))

// const Calldebounce = debounce(()  => {
//   result =  console.log("Alex take 1 sec")
//   return result
// },1000)

// Calldebounce()

// const debouncedLog = debounce(() => {
//   console.log("Called!");
// }, 1000);

// // Simulate rapid calls
// debouncedLog();
// debouncedLog();
// debouncedLog();

// // "Called!" logs only once, 1 second after the last call

// // Constructor
// const multiply = new Function("x", "y", "return x * y");

// while (true) {
//   let num1 = Number(prompt("Enter the number: ")
// }

// class Book {
//   constructor(title,author ,price){
//     this.title  =  title
//     this.author = author
//     this._price = price
//   }

//   get price(){
//     return this._price;
//   }

//   set price(NewPrice){
//     if(NewPrice < 0){
//       console.error("Invalid Price Of Book")
//     }
//     else{
//       return this._price  = NewPrice;
//     }
//   }

//   getDetail(){
//     return `The Book ${this.title} author is ${this.author} price is ${this.price}`
//   }

// }

// const searchBook = new Book("The New Era","Anonymous",3000);
// searchBook.price = 23434
// console.log(searchBook.price)

// class Student {
//   constructor(name, age, rollNumber, gender) {
//     this.name = name;
//     this.age = age;
//     this._rollNumber = rollNumber;
//     this.gender = gender;
//   }

//   // return the student information
//   printInfo() {
//     return `Student name is ${this.name} age is ${this.age} and roll number is ${this._rollNumber}`;
//   }
// }

// class Marks extends Student {
//   constructor(name, age, rollNumber,gender, marks, feedback, commitment) {
//     super(name, age, rollNumber, gender);
//     this.marks = marks;
//     this.feedback = feedback;
//     this.commitment = commitment;
//   }
//   //get  the percentage of marks
//   getMarks() {
//     let  result = (this.marks / 500) * 100;
//     return result.toFixed(2);
//   }

//   //Student Learning Attitude
//   studentAttitude() {
//     let sex = this.gender === "Male" ? "He" : "She";
//     let result = this.getMarks()

//     return `Student feeling ${this.feedback}, make commitment ${sex} ${this.commitment} `;
//   }
// }

// class Activity extends  Marks{
//   constructor(name,age,rollNumber,gender,marks,feedback,commitment,interstingActictivity){
//     super(name,age,rollNumber,gender,marks,feedback,commitment)
//     this.interstingActictivity  = interstingActictivity;
//   }

//   getMarks(){
//     let result = (this.marks / 500) * 100;
//     return result.toFixed(3);
//   }

//   getActivity(){
//     return `Student like  ${this.interstingActictivity}`
//   }
// }
// const StudentInfo = new Activity(
//   "Suraj Upadhyay",
//   17,
//   234,
//   "Male",
//   460,
//   "Excited",
//   "Apply it 74% learning in real life use cases",
//   "Dance"
// );
// console.log(StudentInfo.printInfo());
// console.log(StudentInfo.studentAttitude());
// console.log(StudentInfo.getActivity())

// class Circle{
//   constructor(radius){
//     this.radius = radius
//   }
//   #radius

//   getArea(){
//     return 3.14*(this.#radius  ** 2);
//   }
// }

// class Circle{
//     #radius
//     constructor(radius){
//         this.#radius  = radius
//     }

//     get Radius(){
//         return this.#radius
//     }

//     set Radius(NewRadius){
//        return this.#radius =  NewRadius
//     }

//     getArea(){
//         return (3.14*(this.#radius **2)).toFixed(2);
//     }
// }

// const areaCircle = new Circle(7)
// areaCircle.Radius = 231
// console.log(areaCircle.Radius)
// console.log(areaCircle.getArea())

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get FullName() {
//     return `Fullname is ${this.firstName} ${this.lastName}`;
//   }

//   set updateName({ newFirstName, newLastName }) {
//     this.firstName = newFirstName;
//     this.lastName = newLastName;
//   }
// }

// const PersonName = Person("Alex","McDonalds")
// console.log(PersonName.FullName()) //Full name is Alex McDonalds

// PersonName.updateName = {newFirstName:"Peter",newLastName:"Hamburger"}
// console.log(PersonName.FullName()) //Full name is  Peter Hamburger


// class Car{
//     static carCreated = 0
//     constructor(company,model,milage,price,engine){
//         this.company = company
//         this.model =  model
//         this.milage = milage
//         this.price = price
//         this.engine = engine


//         Car.carCreated++;
//     }

//     static carCounted(){
//         return `Car Class Created: ${Car.carCreated}`;
//     }

    
// }

// const varOne = new Car("one","two","Three","Four","Five");
// const varSecond = new Car("one","two","Three","Four","Five");
// const varFour = new Car("one","two","Three","Four","Five");
// const varFou = new Car("one","two","Three","Four","Five");
// const varFor = new Car("one","two","Three","Four","Five");
// const varFive = new Car("one","two","Three","Four","Five");
// console.log(Car.carCreated)



class BankAccont{
    #balance
    static compareBalance 
    constructor(balance=10000){
        this.#balance = balance
        this.#balance.compareBalance;
    }

    get Balance(){
        return this.#balance;
    }

    deposit(amount){
        this.#balance += amount
    }

    withDraw(amount){
        this.#balance -= amount 
    }
    
    static compareBalance(acc1,acc1){
        
    }
}