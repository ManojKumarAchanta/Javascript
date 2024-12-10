// //callback is a function that is passed as an argument to another function

// function hello(goodBye){
//     console.log('hello');
//     goodBye();
// }
// function leave()
// {
//     console.log("Leave!");
// }
// function wait()
// {
//     console.log("Wait!");
// }

// function goodBye(){
//     console.log('Good Bye!');
// }

// hello(wait);


sum(displayPage,100,2);
function sum(callback, x, y)
{

    let result = x+y;
    callback(result);
}
function displayConsole(result)
{
    console.log(result);
}



function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}