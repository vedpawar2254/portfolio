

const lastNameElement = document.getElementById("last-name");
const names = ["Pawar", "Gawar", "Bimar"];
let index = 0;

function changeLastName() {
    index = (index + 1) % names.length;
    lastNameElement.textContent = names[index];
}


setInterval(changeLastName, 2000);
