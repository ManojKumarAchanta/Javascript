// //1. WALK THE DOG
// //2.CLEAN THE KITCHEN
// //3. TAKE OUT THE TRASH

// function walkDog(callback){
//     setTimeout(()=>{
//         console.log("You walked the dog");
//         callback();
//     },1500);
// }
// function cleanKitchen(callback) {
//   setTimeout(() => {
//     console.log("You clean the kitechen");
//     callback();
//   }, 2500);
// }
// function takeOutTrash(callback){
//     setTimeout(()=>{
//         console.log("You take out the trash🚮");
//         callback();
//     },500);
// }

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//               console.log("You finished all the chores.");

//         })
//     })
// });


//1. WALK THE DOG
//2.CLEAN THE KITCHEN
//3. TAKE OUT THE TRASH

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dogWalked=true;
            if(dogWalked){
              resolve("You walked the dog");
          }else{
            reject(`You didnt walked dog`);
          }
        }, 1500);
    })
}
function cleanKitchen() {
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const kitchenCleaned=true;
            if(kitchenCleaned){

                resolve("You clean the kitechen");
            }else{
                reject("you didnt cleaned kitchen")
            }

        }, 2500);
    })
}
function takeOutTrash(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          resolve("You take out the trash🚮");
        }, 500);
    })
    
}
walkDog().then(value =>{console.log(value); return cleanKitchen()})
        .then(value=>{ console.log(value); return takeOutTrash()})
        .then(value=>{ console.log(value); console.log(`You finished all the chores`)})

    