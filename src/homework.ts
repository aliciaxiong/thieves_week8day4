console.log('testing')

// 1. Given the data below, define a type alias for representing users.
// Company is optional, so ? must be added in the type User. 

type User = {
    name: string,
    age: number,
    company?: string
}

let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.



// 3. Given the Person class below, create a getter for getting the full name of a person.
// Notes: use an f string to return the full name.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string
) {}
    getFullName = (): string =>
        `${this.firstName} ${this.lastName}`
}

const person = new Person('Alicia', 'Xiong')
console.log(person.getFullName())

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 



// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
// 1 interface will be for the address
// 1 interface will be for the employee

interface address {
    street:string,
    city:string,
    zipCode:number
}

interface employee {
    name:string,
    salary:number,
    address:address
}

let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};