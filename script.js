let firstNumber = 0;
let secondNumber = 0;
let numberInput = "0";
let operator = "";
let result = 0;

const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.getElementById("clear").addEventListener("click", () => clear());
const displayValue = document.querySelector(".display-value");
const calcValue = document.querySelector(".calculated-display-value");
const equalsButton = document.querySelector(".equals-button");
const toggleNegative = document.getElementById("toggle-neg");

const operationButtons = document.querySelectorAll(".operator-button");

toggleNegative.addEventListener("click", () => {
	let newSignNumber = switchSign(numberInput);
	numberInput = `${newSignNumber}`;
	displayValue.textContent = `${numberInput}`;
});

// Adds an event listener to each number button and appends the number to numberInput
numberButtons.forEach(button => {
	button.addEventListener("click", function () {
		// if (button.textContent == ".") {
		// 	setDecimal(numberInput)

		// }
		if (numberInput === "0" && button.textContent === "0") {
			numberInput = button.textContent
		} else if (numberInput === "0" && button.textContent !== '.'){
			numberInput = button.textContent
			displayValue.textContent = numberInput;
		} else{
			numberInput += button.textContent;
			displayValue.textContent = numberInput;
		}
	});
});

// addition function
function add(num1, num2) {
	let value = num1 + num2;
	return value;
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
			break;
	}
}

//This clears the calculator
function clear() {
	console.log("Clearing");
	firstNumber = 0;
	secondNumber = 0;
	numberInput = "0";
	operator = "";
	result = "";
	displayValue.textContent = "0";
	calcValue.textContent = "";
}

operationButtons.forEach(operationButton => {
	operationButton.addEventListener("click", () => {
		if (firstNumber == 0) {
			result = "";
			firstNumber = parseInt(numberInput);
			operator = operationButton.textContent;
			appendToValueDisplay(operator);
			appendToCalcDisplay(firstNumber);
		} else {
			if (operator === "") {
				operator = operationButton.textContent;
				appendToValueDisplay(operator);
			} else {
				let newOperator = operationButton.textContent;
				console.log("if first exists then");
				secondNumber = parseInt(numberInput);
				result = getResult(firstNumber, operator, secondNumber);
				firstNumber = result;
				appendToCalcDisplay(result);
				operator = newOperator;
				appendToValueDisplay(operator);
			}
		}

		numberInput = "";
		console.log(`first number: ${firstNumber}`);
		console.log(`second number: ${secondNumber}`);
	});
});

equalsButton.addEventListener("click", () => {
	if (operator != "") {
		if (numberInput == "") {
			secondNumber = firstNumber;
		} else {
			secondNumber = parseInt(numberInput);
		}
		result = operate(firstNumber, operator, secondNumber);
		calcValue.textContent = Math.round(result * 10) / 10;
		displayValue.textContent = 0;
		firstNumber = result;
		numberInput = "";
		secondNumber = 0;
		operator = "";
	} else {
		result = parseInt(numberInput);
		firstNumber = result;
		appendToCalcDisplay(result);
	}
});

function getResult(firstNumber, operator, secondNumber) {
	return operate(firstNumber, operator, secondNumber);
}

function appendToCalcDisplay(strInput) {
	calcValue.textContent = strInput;
}

function appendToValueDisplay(strInput) {
	displayValue.textContent = strInput;
}

function switchSign(numberInput) {
	if (parseInt(numberInput) > 0) {
		let makeNegative = numberInput * -1;
		return makeNegative;
	} else if (parseInt(numberInput) < 0) {
		let makePositive = numberInput * -1;
		return makePositive;
	}
}

function setDecimal(param) {
	if (numberInput) {
		
	} else {
		
	}

}