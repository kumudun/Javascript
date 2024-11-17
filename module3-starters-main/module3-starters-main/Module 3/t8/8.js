
const num1Field = document.getElementById("num1");
const num2Field = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const calculateButton = document.getElementById("calculateButton");
const resultParagraph = document.getElementById("result");


calculateButton.addEventListener("click", function () {

    const num1 = parseFloat(num1Field.value);
    const num2 = parseFloat(num2Field.value);
    const operation = operationSelect.value;


    if (isNaN(num1) || isNaN(num2)) {
        resultParagraph.textContent = "Result: Please enter valid numbers.";
        return;
    }


    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operation.";
    }


    resultParagraph.textContent = `Result: ${result}`;
});

