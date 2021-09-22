const X_CLASS = 'x';
const O_CLASS = 'o';
let xTurn
const cellElements = document.querySelectorAll('[data-cell]');

cellElements.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true });
})

function handleClick(e) {
    const cell = e.target;
    const currentClass = xTurn ? X_CLASS : O_CLASS;
    // Place Marks in clicked cells
    placeMark(cell, currentClass);
    // Check for Win
    // Check for Draw
    // Switch Turns
    swapTurns();
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    xTurn = !xTurn;
}