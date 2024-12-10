// const numbers = [1,2,3,4,5];
// const squares  = numbers.map(square)
// const cubes  = numbers.map(cube)
// console.log(squares)
// console.log(cubes)
// function square(element)
// {
//     return Math.pow(element,2);
// }
// function cube(element)
// {
//     return Math.pow(element,3);
// }

// const students = ['spongebob','sand','squidward','patrick']
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);
// console.log(studentsLower);
// console.log(studentsUpper);
// function upperCase(element){
//     return element.toUpperCase();
// }
// function lowerCase(element){
//     return element.toLowerCase();
// }\

const dates=["2024-01-10","2025-2-20","2026-3-30"];

const formattedDates = dates.map(formatDates);

function formatDates(element){
    const parts = element.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
console.log(formattedDates);


