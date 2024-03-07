let firstNumber = "";
let secondNumber;
let numberInput = "";
let operator;

const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.getElementById("clear").addEventListener("click", () => clear());
const displayValue = document.querySelector(".display-value");

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

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function devide(num1, num2) {
	return num1 / num2;
}

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

function clear() {
	console.log("Clearing");
	firstNumber = "";
	secondNumber = "";
    numberInput = "";
	operator = "";
	displayValue.textContent = "";
}
