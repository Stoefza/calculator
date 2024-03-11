let firstNumber = 0;
let secondNumber = 0;
let numberInput = "";
let operator;
let result = 0;
let operatorClicked = 0;

const numberButtons = document.querySelectorAll(".number-button");
const clearButton = document.getElementById("clear").addEventListener("click", () => clear());
const displayValue = document.querySelector(".display-value");
const calcValue = document.querySelector(".calculated-display-value");
const equalsButton = document.querySelector(".equals-button");

const operationButtons = document.querySelectorAll(".operator-button");

// Adds an event listener to each number button and appends the number to numberInput
numberButtons.forEach(button => {
	button.addEventListener("click", function () {
		if (numberInput === "" && button.textContent === "0") {
		} else {
			numberInput += button.textContent;
			displayValue.textContent = numberInput;
			firstNumber = parseInt(numberInput);
			// console.log(`first number: ${firstNumber}`);
		}
	});
});

// Build function to run on operator click and
// set the firstNumber = numberInput

// addition function
function add(num1, num2) {
	console.log(`the type of First Number ` + typeof(firstNumber))
	console.log(`the type of Second Number ` + typeof(secondNumber))
	let value = (num1 + num2)
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
			console.log(`the type of First Number ` + typeof(firstNumber))
			console.log(`the type of Second Number ` + typeof(secondNumber))
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
	result = 0;
	operatorClicked = 0;
	displayValue.textContent = "";
	calcValue.textContent = ""

}

operationButtons.forEach(operationButton => {
	operationButton.addEventListener("click", () => {
		operatorClicked++;
		console.log(operator)
		if (operationButton.textContent !== operator){
			operator = operationButton.textContent

		} else {
			firstNumber = operate(firstNumber,operator,firstNumber)
			calcValue.textContent = firstNumber
			console.log(`first number: ${firstNumber}`)

			console.log(operator)

		}
		
		// console.log(firstNumber);
		// console.log(`opreator clicked : ${operatorClicked}`);
		// secondNumber = firstNumber;
		// firstNumber = 0
		console.log(`first number: ${firstNumber}`)
		console.log(`second number: ${secondNumber}`)
		// calcValue.textContent = firstNumber
		// result = operate(firstNumber,operator,secondNumber)
		// calcValue.textContent = result
		// calcValue.textContent = `total: ${secondNumber}`
		// if (operatorClicked > 1){
			
		// 	calcValue.textContent = result
		// 	 	result = operate(secondNumber,operator,secondNumber)
		// 		secondNumber = result
		// 		return result
		// }
		// Set second number
		// if operator > 1 pass 2nd number twice to opariotn
		
	});
});

equalsButton.addEventListener("click", () => {});

// operationButtons.forEach(operationButton => {
// 	operationButton.addEventListener("click", () => {
// 		if (operationButton.textContent !== "=" && result == 0) {
// 			operator = operationButton.textContent;
// 			console.log(operator);
// 			firstNumber = numberInput;
// 			console.log(firstNumber);
// 			numberInput = "";
// 			displayValue.textContent = "";
// 			calcValue.textContent = firstNumber
// 			result = firstNumber;
// 		} else {
// 			if (result == 0) {
// 				secondNumber = numberInput;
// 				console.log(`First number: ${firstNumber}`);
// 				console.log(`Second number: ${secondNumber}`);
// 				result = operate(parseInt(firstNumber), operator, parseInt(secondNumber));
// 				calcValue.textContent = result
// 				displayValue.textContent = '';
// 			} else {
// 				secondNumber = numberInput;
// 				console.log(`First number: ${firstNumber}`);
// 				console.log(`Second number: ${secondNumber}`);
// 				result = operate(parseInt(result), operator, parseInt(secondNumber));
// 				calcValue.textContent = result
// 				displayValue.textContent = '';
// 			}
// 			secondNumber = "";
// 			numberInput = "";
// 		}
// 	});
// });
