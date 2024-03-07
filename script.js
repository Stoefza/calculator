let firstNumber = "";
let secondNumber;
let numberInput = "0";
let operator;

const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.getElementById("clear").addEventListener("click", () => clear());

numberButtons.forEach(button => {
	button.addEventListener("click", function () {
		numberInput += button.textContent;
		console.log('number input:' + numberInput);
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
	operator = "";
}
