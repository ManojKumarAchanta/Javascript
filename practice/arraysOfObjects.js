const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "rorangeed", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 145 },
  { name: "pineapple", color: "yellow", calories: 145 },
];

// console.log(fruits[0]);
// fruits.push({name:"grapes",color:"purple",calories:62});

// fruits.splice(1,3);
// console.log(fruits);


fruits.forEach(fruit=>{
    console.log(fruit.name);
}); 