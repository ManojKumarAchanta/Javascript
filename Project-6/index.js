let timeOutId;
function startTimer(){
    setTimeout(()=>window.alert(`Hello`),3000);
}
function clearTimer(){
    clearTimeout(timeOutId);
}