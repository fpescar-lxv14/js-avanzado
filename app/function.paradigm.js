function Person (name, age) {
    this.name = name,
    this.age = age
}
Person.prototype.sayHi = function() { 
    return "Hi, my name is " + this.name 
}

Person.prototype.getAge = function() { 
    return this.age 
}

const user = new Person("cristian",33)
const users = [
    new Person("luis",33),
    new Person("pedro",33),
    new Person("juan",33),
    new Person("tita",33),
    new Person("beatriz",33),
    new Person("laura",33),
    new Person("nek",33)
]
console.log(user.sayHi())
console.log(user.getAge())