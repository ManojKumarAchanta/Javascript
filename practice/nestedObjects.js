// const person = {
//     fullName:"Spongebob SquarePants",
//     age:30,
//     isStudent:true,
//     hobbies:["karate","jellyFishing","cooking"],
//     address:{
//         street:"124 Conch st",
//         city:"Bikini Bottom",
//         country:"Int. Waters"
//     }
// }
// console.log(person.address.country);

class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);

    }
}

class Address{
    constructor(street,city,country){
        this.street = street;
        this.country = country;
        this.city = city;
    }
}

const person1 = new Person("Spongebob",30,"124 Conch St.","Bikini Bottom","Int. Water");
const person2 = new Person("Patrick",37,"128 Conch St.","Bikini Bottom","Int. Water");
const person3 = new Person("Squidward",45,"126 Conch St.","Bikini Bottom","Int. Water");

console.log(person3.address.street);
console.log(person3.address.city);
console.log(person3.address.country);
