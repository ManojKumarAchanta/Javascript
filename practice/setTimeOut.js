function sayHello(){
    console.log(`Hello`);
}

const timeOutID = setTimeout(sayHello,3000);
clearTimeout(timeOutID);