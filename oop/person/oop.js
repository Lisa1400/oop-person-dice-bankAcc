/*class Person{
    constructor(name, age, gender, interests){
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests
    }

    intro(){
        console.log(`Hello, my name is ${this.name}./n I am ${this.age} years of age./n My interests are ${this.interests}.`);
    }
}

let firstPerson = new Person('Lisa Mabe', 19, 'F', 'documentaries');

firstPerson.intro();*/

module.exports = class Person{
    constructor(name, age, gender, interests){
        this.name = name
        this.age = age
        this.gender = gender
        this.interests = interests
    }

    intro(){
        console.log(`Hello, my name is ` + this.name + `. I am ` + this.age + ` years of age. I am interested in ` + this.interests + `.`);
    }
}

