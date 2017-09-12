class Person {
  constructor(name = 'Anonymouse', age = 0) {
    this.name = name || 'test'
    this.age = age
  }
  getGreeting() {
    return `Hi ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age}`
  }
}

class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age)
    this.location = location
  }
  getGreeting() {
    let greeting = super.getGreeting()

    if (this.location) {
      return greeting = greeting += ` I'm visiting from ${this.location}`
    }

    return greeting
  }
}


// class Student extends Person {
//   constructor(name, age, major) {
//     super(name, age)
//     this.major = major
//   }
//   hasMajor() {
//     return !!this.major
//   }
//   getDescription() {
//     let description = super.getDescription()
//
//     if (this.major) {
//       description = description += ` their major is ${this.major}`
//     }
//
//     return description
//   }
// }


const me = new Traveler('Elijah Prince', 20, 'Las Vegas')

console.log(me.getGreeting());

const someoneElse = new Traveler()
console.log(someoneElse.getGreeting());
