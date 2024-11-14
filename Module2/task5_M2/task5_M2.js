function getUniqueNumbers() {
    let numbers = [];
    let input;

    // Loop to prompt the user for numbers
    while (true) {
        input = prompt("Enter a number:");
        input = parseFloat(input);  // Parse input as a number

        // Check if the input is a duplicate
        if (numbers.includes(input)) {
            alert("The number has already been given. Stopping operation.");
            break;
        } else {
            numbers.push(input);
        }
    }

    // Sort the numbers in ascending order
    numbers.sort((a, b) => a - b);

    // Print the sorted numbers to the console
    console.log("All given numbers in ascending order:");
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}



