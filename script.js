let firstNumber = "";
let secondNumber;
let numberInput = "";
let operator;

const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.getElementById("clear").addEventListener("click", () => clear());
const displayValue = document.querySelector(".display-value");

// Adds an event listener to each number button and appends the number to numberInput
numberButtons.forEach(button => {
	button.addEventListener("click", function () {
		if (numberInput === "" && button.textContent === "0") {
		} else {
			numberInput += button.textContent;
			console.log("number input:" + numberInput);
			displayValue.textContent = numberInput;
		}
	});
});

// Build function to run on operator click and 
// set the firstNumber = numberInput


// addition function
function add(num1, num2) {
	return num1 + num2;
}
//subtract function
function subtract(num1, num2) {
	return num1 - num2;
}
//mulitply function
function multiply(num1, num2) {
	return num1 * num2;
}
//devide function
function devide(num1, num2) {
	return num1 / num2;
}

//Switch staement to determine which operator was selected
function operate(firstNumber, operator, secondNumber) {
	switch (operator) {
		case "+":
			return add(firstNumber, secondNumber);
		case "-":
			return subtract(firstNumber, secondNumber);
		case "*":
			return multiply(firstNumber, secondNumber);
		case "/":
			return devide(firstNumber, secondNumber);
		default:
			return "Uh Oh";
	}
}

//This clears the calculator
function clear() {
	console.log("Clearing");
	firstNumber = "";
	secondNumber = "";
    numberInput = "";
	operator = "";
	displayValue.textContent = "";
}
