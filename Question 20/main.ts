//Question 20
//They think of something you could store in a TypeScript Object.
// Write a program that creates Objects containing these items

let person_Name :string = 'Taha';

const personName_Array :string[] = ['Person','car'];

interface person {
    age : number,
    name : string,
    nationality : string,
    Student : Boolean
}



let person :person = {

    age : 26,
    name : 'Taha',
    nationality : 'Pakistan',
    Student : true
}

console.log([person])