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

arrList = [1, 2, 3, 4, 5, 6, 7];
const multipleOfTwo = (arrList) => {
  arrList.map(function (x) {
    return x * 2;
  });
};

console.log(multipleOfTwo(x));
