
let targetElement = document.getElementById("target");


let firstItem = document.createElement("li");
firstItem.textContent = "First item";

let secondItem = document.createElement("li");
secondItem.textContent = "Second item";
secondItem.classList.add("my-item");

let thirdItem = document.createElement("li");
thirdItem.textContent = "Third item";


targetElement.appendChild(firstItem);
targetElement.appendChild(secondItem);
targetElement.appendChild(thirdItem);


