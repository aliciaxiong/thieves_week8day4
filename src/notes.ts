// testing
console.log('testing')

// Type Aliases: Creating our own Type
type Employee = {
    readonly id: number,
    name: string 
    isAdmin?: string 
}

let dylanProfile: Employee = {
    id: 0, 
    name: 'Dylan' 
}

// Union Types: Can allow a variable to be one of many types (number | string)
// TypeScript Arrow Function
const kgToLbs = (weight: (number | string)): number => {
    if (typeof weight === 'string') {
        return Number(weight) * 2.2 
    }
    return weight * 2.2
}

console.log(kgToLbs(95))

// Literal Types (exact)
let quantity: (25 | 50 | 75 | 100) = 50

// Nullish Coalescing Operator (??): We can fallback to a default value when dealing with null/undefined objects
let mph: number | null = 0 
mph = 53 
let ride = {
    // falsy values = null, undefined, 0, '', false 
    currentSpeed: mph ?? null 
}
console.log(ride)

// Type Assertions: specify a different type than the one inferred by the compiler.
// NOTE: There isn't any type conversion happening under the hood.
        // const inputEl = document.getElementById('#input') as HTMLInputElement
        // inputEl.value 

// Creating Classes

class Cohort {
    // redonly & private property 
    readonly id: number 
    private name: string
    number: number 
        constructor(cohortId: number, cohortName: string, cohortNumber: number){
        this.id = cohortId
        this.name = cohortName
        this.number = cohortNumber
    }
    printInfo = (): string => {
        return `This is cohort ${this.name}-${this.number}`
    }

    printName = (): string => {
        return this.name
    }
}

const thieves = new Cohort(0, 'thieves', 133)
console.log(thieves.printInfo())

// typeof vs instanceof
console.log(thieves instanceof Cohort)
console.log(ride instanceof Cohort)

// private properties and accessing them
console.log('private has to be used only within the class, cant be access outside of the function')
// Must use this within the class function 

// printName = (): string => {
//     return this.name
// }
//PRIVATE PROPERTY SHOULD HAVE ALEAST AN _

// Building a class with parameter properties: Preferred way
class Team {
    constructor(
        public readonly id: number, 
        private _name: string, 
        public city: string
    ){}

    printInfo = (): string => {
        return `The ${this._name} if from ${this.city}. `
    }
}

const eagles = new Team(1, 'eagles', 'philly')
console.log(eagles.printInfo())

// Interfaces vs Types
/* They both establish a shape of an object and can be used interchangeably BUT 
Its more conventional to implement Interfaces with Classes AND
Interfaces can also inherit from other Interfaces & Types, while Types cannot.
*/

// interface MUST be an object -- basically your own object

interface Player {
    playerName: string, 
    playerNumber?: number
}

class Team2 implements Player {
    constructor(
        public readonly id: number, 
        private _name: string, 
        public city: string,
        public playerName: string  
    ){}

    printInfo = (): string => {
        return `${this.playerName} players for the ${this.city} ${this._name}.`
    }
}

const bulls = new Team2(2, 'bulls', 'chicago', 'michael jordan')
console.log(bulls.printInfo())