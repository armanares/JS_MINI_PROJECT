let firstNum = "";
let secondNum = "";
let operator = "";
let result = "";

const add = function(a,b) {
   return a + b;
}

const substract = function(a,b) {
   return a - b;
}

const multiply = function(a,b) {
   return a * b;
}

const divide = function(a,b) {
   return a / b;
}

const operate = function(operator, a, b) {
   switch(operator) {
      case '+':
         return add(a,b);
      case '-':
         return substract(a,b);
      case '*':
         return multiply(a,b);
      case '/':
         return divide(a,b);
      default:
         return null;
   }
}

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector(".clear");

numbers.forEach(button => {

    button.addEventListener("click", () => {

        if(result !== "") {
            firstNum = "";
            operator = "";
            secondNum = "";
            result = "";
            display.textContent = "0";
        }

        if (operator === "") {
            firstNum += button.textContent;
            display.textContent = firstNum;
        } 
        else {
            secondNum += button.textContent;
            display.textContent = firstNum + operator + secondNum;
        }

    });

});

operators.forEach(button => {

    button.addEventListener("click", () => {

        operator = button.textContent;
        display.textContent += operator;

    });

});

equals.addEventListener("click", () => {

        result = operate(
        operator,
        Number(firstNum),
        Number(secondNum)
    );

    display.textContent = result;

});

clear.addEventListener("click", () => {

    firstNum = "";
    operator = "";
    secondNum = "";

    display.textContent = "0";

});