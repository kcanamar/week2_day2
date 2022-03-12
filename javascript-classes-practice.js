// const cohort = {
//     id: "SEIR Flex",
//     students: ["Mary", "Toni", "Fred"],
//     instructors: ["Susan", "Phil"],
//     addStudent: function (name) {
//       name = name[0].toUpperCase() + name.substr(1).toLowerCase()
//       this.students.push(name)
//     },
//     pickRandomStudent: function () {
//       const rndIdx = Math.floor(Math.random() * this.students.length)
//       return this.students[rndIdx]
//     },
//   }
// example of encapsulating data

// OOP - object oriented programming

// when building with a sandbox(classes) there are attributes and methods contained in the sandbox.

///////////////////////
// JavaScript Classes
///////////////////////
// classes are capitolized, upperCammelCase
// no commas neccessary between methods
// no commas use ; need to seperate properties in the (constructor)
class Vehicle {
    constructor(vin, make, model) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.running = false; // default value
    }// line 27- 20 is a template example
    // there are two types of method in a class Static & Prototype
    // Prototype Method - instances can use
    start() {
        this.running = true
        console.log("running....")
    }
    stop() {
        this.running = false
        console.log("we're done...")
    }
    // Static Methods - only callable by the parent class
    // Static Methods belong to the parent class. They do not call to the children of the parent class.
    static about() {
        console.log("I'am a vehicle class")
    }
};
// these are intances, instantiatied, instantiations
let v1 = new Vehicle(123456, "Toyota", "Forunner");
const car = new Vehicle(2345, "Ford", "Escape");
const plane = new Vehicle(98765, "Boeing");

// these methods are able to use the intances above
car.start()
car.stop()
console.log(car);
Vehicle.about();
// Vehicle.prototype.start = function () {
    // this.running = true
    // console.log("running...")
// }

// you can reset prototype methods on instances of class like arrays and objects
// let myArray = []
// myArray.forEach = 123
// console.log(myArray)

////////////////////////////
// Inheritance
////////////////////////////


class Plane extends Vehicle {
    constructor(vin, make, model, airline) {
        super(vin, make, model)// referances the class being extended, omits the need to right this."" as to not duplicate the 
        this.airline = airline // 
    }
    engageAutoPilot() {
        console.log("Auto Pilot Engaged...")
    }
}
const myPlane = new Plane(8758, "Springer", "Alaska", "Biplane")

class Automobile extends Vehicle {
    constructor(vin, make, model, numDoors,) {
        super(vin, make, model)
        this.numDoors = numDoors
    }
    honk(){
        console.log("Beep Beep")
    }
}

const fastCar = new Automobile(12345, "Tesla", "s4", 2);
fastCar.honk()
myPlane.engageAutoPilot()
console.log(myPlane)

// Unlike function declarations, class declarations are not hoisted - they must be declared before using them to create objects.