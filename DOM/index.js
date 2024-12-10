// //Document Object Model

// document.body.style.backgroundColor=`hsl(0,0%,15%)`;
// document.title = "MyWesite"

// const userName="";
// const welcomemessage = document.getElementById("welcome-msg");
// welcomemessage.textContent+= userName===""?'Guest':userName;

//getElementById() - Element/null
// let myHeading = document.getElementById('my-heading');
// myHeading = myHeading.style.backgroundColor = `red`;

// const h4Elements = document.getElementsByTagName('h4');
// h4Elements[0].style.backgroundColor=`yellow`;
// h4Elements[0].style.textAlign=`center`;


//DOM NAVIGATION

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild; 
// firstChild.style.backgroundColor = "Yellow";

const newH1 = document.createElement("h1");
newH1.textContent = `I Like Pizza`;
// // document.body.append(newH1);
// document.body.prepend(newH1);
// newH1.id = "myH1";
// newH1.style.textAlign = "center";
// newH1.style.backgroundColor = "blue";
// // document.getElementById('box1').append(newH1);

// const box2 = document.getElementById('box2');
// document.body.insertBefore(newH1,box2);


const boxes = document.querySelectorAll('.box');
document.body.insertBefore(newH1,boxes[2]);

