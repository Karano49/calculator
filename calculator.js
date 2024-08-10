const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    onBtnClick(button);
  });
});

// document.querySelector("#AC").addEventListener("click", () => clear());

let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = null;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate() {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  var result = 0;
  switch (operator) {
    case "+":
      result = add(firstNumber, secondNumber);
      break;
    case "-":
      result = subtract(firstNumber, secondNumber);
      break;
    case "*":
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      result = divide(firstNumber, secondNumber);
      break;
  }
  clear();
  setDisplay(result);
}

function setDisplay(value) {
  if (displayValue) value = displayValue + value;
  document.querySelector(".display").textContent = value;
  displayValue = value;
}

function clear() {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  displayValue = 0;
  setDisplay(0);
}

function setOperator(ope) {
  if (!firstNumber) return;
  operator = ope;
  document.querySelector("#operator").textContent = `Operator: ${operator}`;
}

function setFirstNumber(number) {
  if (firstNumber) firstNumber += number;
  else firstNumber = number;
  document.querySelector("#first").textContent = `First: ${firstNumber}`;
}

function setSecondNumber(number) {
  displayValue = 0;
  setDisplay(0);
  if (secondNumber) secondNumber += number;
  else secondNumber = number;
  document.querySelector("#second").textContent = `Second: ${secondNumber}`;
}

function setNumber(number) {
  if (firstNumber && operator) setSecondNumber(number);
  else setFirstNumber(number);
}

function onBtnClick(button) {
  let input = button.textContent;
  switch (button.className) {
    case "operator":
      if (button.id === "equal") operate();
      else setOperator(input);
      break;

    case "other":
      if (button.id === "AC") clear();
      break;

    case "number":
      setNumber(input);
      setDisplay(input);
      break;
  }
}
