class Animal {
  constructor(name, age){
        this.name =  name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at speed of ${speed}`);
    }
}
class Rabbit extends Animal {
  constructor(name, age, runSpeed){
      super(name,age);
      this.runSpeed = runSpeed;
  }
  run(){
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
    constructor(name, age, swimSpeed) {
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
    swim(swimSpeed){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name,age);
        this.flySpeed = flySpeed;
    }
    
    fly(flySpeed){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
      }
}

const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish("fish",2,12);
const hawk = new Hawk("hawk",3,50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();