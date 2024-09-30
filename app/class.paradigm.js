class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHi(){
        return "Hi, my name is " + this.name 
    }
    getAge(){
        return this.age
    }
}

const user = new Person("cristian",33)
console.log(user.sayHi())
console.log(user.getAge())