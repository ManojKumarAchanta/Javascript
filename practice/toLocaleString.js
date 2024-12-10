let number = 123456.789;
// number = number.toLocaleString("en-US");
// console.log(number);
number = number.toLocaleString("hi-IN",{style:"currency",currency:"INR"});
console.log(number);