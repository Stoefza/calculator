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
	
});

// Adds an event listener to each number button and appends the number to numberInput
numberButtons.forEach(button => {
	button.addEventListener("click", function () {
		// Adds a decimal to the number to
		if (button.textContent == ".") {
			setDecimal(numberInput);
		}
		// allows you to only add a single 0 if there is no decimal
		else if (numberInput === "0" && button.textContent === "0") {
			numberInput = button.textContent;
			displayValue.textContent = numberInput;
		}
		// Allows you to adde additional 0's after the decimal
		else if (numberInput === "0" && button.textContent !== ".") {
			numberInput = button.textContent;
			displayValue.textContent = numberInput;
		}
		// Adds the number to numberInput
		else {
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
	firstNumber = 0;
	secondNumber = 0;
	numberInput = "0";
	operator = "";
	result = "";
	displayValue.textContent = "0";
	calcValue.textContent = "0";
}

operationButtons.forEach(operationButton => {
	operationButton.addEventListener("click", () => {
		if (firstNumber == 0) {
			result = "";
			firstNumber = parseFloat(numberInput);
			operator = operationButton.textContent;
			appendToValueDisplay(0);
			appendToCalcDisplay(firstNumber + operator);
		} else {
			if (operator === "" && numberInput == "0") {
				operator = operationButton.textContent;
				firstNumber = parseFloat(result);
				// appendToValueDisplay(operator);
				appendToCalcDisplay(firstNumber + operator);
			} else if (operator === "" && numberInput !== "0") {
				operator = operationButton.textContent;
				firstNumber = parseFloat(numberInput);
				// appendToValueDisplay(operator);
				appendToCalcDisplay(firstNumber + operator);
				appendToValueDisplay(0);
			} else {
				let newOperator = operationButton.textContent;
				secondNumber = parseFloat(numberInput);
				firstNumber = getResult(firstNumber, operator, secondNumber);
				operator = newOperator;
				appendToValueDisplay(0);
				appendToCalcDisplay(firstNumber + operator);
			}
		}

		numberInput = "0";
	});
});

equalsButton.addEventListener("click", () => {
	if (operator != "") {
		if (numberInput == "") {
			secondNumber = firstNumber;
		} else {
			secondNumber = parseFloat(numberInput);
		}
		firstNumber = getResult(firstNumber, operator, secondNumber)
		appendToValueDisplay("0");
		// appendToCalcDisplay(firstNumber)
		numberInput = "0";
		secondNumber = 0;
		operator = "";
	} else {
		// result = firstnumber;
		firstNumber = result;
		appendToCalcDisplay(result);
	}
});

function getResult(firstNumber, operator, secondNumber) {
	if ((firstNumber == 0 || secondNumber == 0) && operator == "/") {
		appendToCalcDisplay("Nope");
		firstNumber = 0;
		secondNumber = 0;
		numberInput = "0";
		operator = "";

		return 0;
	} else {
		result = Math.round((operate(firstNumber, operator, secondNumber).toFixed(3)) * 10000) / 10000;
		appendToCalcDisplay(result);
		return result;
	}
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
	} else if (numberInput == 0) {
		return numberInput
	}
}

function setDecimal(param) {
	if (!numberInput.includes(".")) {
		numberInput = numberInput + ".";
		appendToValueDisplay(numberInput);
	}
}
