const person1 = {
    firstName:`SpongeBob`,
    lastName:`SquarePants`,
    age:30,
    isEmployed:true,
    sayHello:()=>{console.log(`Hi I'm ${person1.firstName}`)},
};
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
const person2 = {
    firstName:`Patrick`,
    lastName:`star`,
    age:42,
    isEmployed:false
};
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
console.log(person1.sayHello());