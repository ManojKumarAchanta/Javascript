// class MathUtil{
//     static PI = 3.14;
//     static getDiameter(radius){
//         return radius*2;
//     }
//     static getCircumference(radius){
//         return radius*MathUtil.PI*2;
//     }
// }
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(20));
// console.log(MathUtil.getCircumference(10));



class User{
    static userCount =0;
    constructor(userName){
        this.userName = userName;
        User.userCount++;
    }
    sayHello(){
        console.log(`My User name is ${this.userName}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("SPatrick");
const user3 = new User("Sandy");

console.log(user1.sayHello());
console.log(user2.sayHello());
console.log(user3.sayHello());
console.log(User.userCount);
console.log(User.userCount);
console.log(User.userCount);