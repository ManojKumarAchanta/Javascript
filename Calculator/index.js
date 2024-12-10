

const display = document.getElementById("display");

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

function appendtoDisplay(str) {
  const currentValue = display.value;
  const lastChar = currentValue[currentValue.length - 1];

  // Check if the last character is an operator
  if (isOperator(lastChar)) {
    // If the new character is also an operator, replace the last operator with the new one
    if (isOperator(str)) {
      display.value = currentValue.replace(lastChar,lastChar) ;
    } else {
      display.value += str;
    }
  } else {
    display.value += str;
  }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}



