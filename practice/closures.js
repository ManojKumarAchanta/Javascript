//closures is a function defined in another function

// function outer(){
//     let message =`Hello`;
//     function inner(){
//         console.log(message);
//     }
//     inner();
// }
// outer();
// function createCounter(){
//     let count = 0;
//     function increment() {
//         count++;
//         console.log(`Count increased to ${count}`);
//     }
//     return {increment};
// }
// const counter = createCounter();

// console.log(typeof counter)
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()


let score = 0;

function increaseScore(points){
    score+=points;
    console.log(``)
}