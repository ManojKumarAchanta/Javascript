// let fruits = ["apple","orange","banana","coconut","pineapple"];
// fruits.sort();
// console.log(fruits);


// let numbers = [1,10,2,9,3,8,4,7,5,6];

// numbers.sort((a,b)=>a-b);
// console.log(numbers);

const people = [
    { name: "Sponegbob", age: 30, gpa: 3.0 },
    { name: "Patrick", age: 30, gpa: 3.0 },
    { name: "Squidward", age: 30, gpa: 3.0 },
    { name: "Patrick", age: 30, gpa: 3.0 },
];
people.sort((a, b) => a.name.localeCompare(b.name));