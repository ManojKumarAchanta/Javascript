let array = [1,2,3,4,5];
array.forEach(function(element){
    console.log(element);
})
function double(element,index,array){
    array[index] = element * 2;

}