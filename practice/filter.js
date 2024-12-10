// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven);
// console.log(evenNums);
// function isEven(element){
//     return element%2===0?true:false;
// }

const ages = [16,17,18,19,20,60];
const adults = ages.filter(isAdult);
const childs = ages.filter(isChild);
console.log(adults);
console.log(childs);
function isAdult(element){
    return (element>=18)?true:false;
}
function isChild(element){
    return (element<18)?true:false;
}