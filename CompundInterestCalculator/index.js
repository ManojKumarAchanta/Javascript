

function calculate(){
    const totalAmount = document.getElementById("totalamount");
    const principalInput = document.getElementById("principalInput");
    const rateInput = document.getElementById("rateInput");
    const yearsInput = document.getElementById("yearsInput");

    let principal = Number(principalInput.value);
    let rate =      Number(rateInput.value/100);
    let years =     Number(yearsInput.value);
    const result = principal*Math.pow((1*rate / 1),1*years)
    totalAmount.textContent = result;
}