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

const me = new Person('Elijah Prince', 20)

console.log(me.getDescription());

const someoneElse = new Person()
console.log(someoneElse);
