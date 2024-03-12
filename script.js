let firstNumber = 0;
let secondNumber = 0;
let numberInput = "";
let operator = "";
let result = 0;

const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.getElementById("clear").addEventListener("click", () => clear());
const displayValue = document.querySelector(".display-value");
const calcValue = document.querySelector(".calculated-display-value");
const equalsButton = document.querySelector(".equals-button");
const toggleNegative = document.getElementById("toggle-neg")

const operationButtons = document.querySelectorAll(".operator-button");

toggleNegative.addEventListener('click', () => {
	let newSignNumber = switchSign(numberInput)
	displayValue.textContent = `${newSignNumber}`

})

// Adds an event listener to each number button and appends the number to numberInput
numberButtons.forEach(button => {
	button.addEventListener("click", function () {
		if (numberInput === "" && button.textContent === "0") {
		} else {
			numberInput += parseInt(button.textContent);
			displayValue.textContent = numberInput;
			if (result) {
				// appendToDisplay(numberInput);
			} else {
			}
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
	numberInput = "";
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
			appendToDisplay(firstNumber);
		} else {
			if (operator === "") {
				operator = operationButton.textContent;
			} else {
				let newOperator = operationButton.textContent;
				console.log("if first exists then");
				secondNumber = parseInt(numberInput);
				result = getResult(firstNumber, operator, secondNumber);
				firstNumber = result;
				appendToDisplay(result);
				operator = newOperator;
			}
		}

		numberInput = "";
		console.log(`first number: ${firstNumber}`);
		console.log(`second number: ${secondNumber}`);
	});
});

equalsButton.addEventListener("click", () => {
	if (operator != "") {
		if ((numberInput == "")) {
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
	}
});

function getResult(firstNumber, operator, secondNumber) {
	return operate(firstNumber, operator, secondNumber);
}

function appendToDisplay(strInput) {
	calcValue.textContent = strInput;
}


function switchSign (numberInput){

	if (parseInt(numberInput) > 0) {
		let makeNegative = numberInput * -1
		numberInput = `${makeNegative}`
		return `${numberInput}`
		
	} else if(parseInt(numberInput) < 0){
		let makePositive = numberInput * -1
		numberInput = `${makePositive}`
		return `${numberInput}`
		
	} 
}
