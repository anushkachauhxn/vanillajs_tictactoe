const X_CLASS = 'x';
const O_CLASS = 'o';
let xTurn
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');

cellElements.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true });
})

function handleClick(e) {
    const cell = e.target;
    // Place Marks in clicked cells
    placeMark(cell);
    // Check for Win
    // Check for Draw
    // Switch Turns
    swapTurns();
    setBoardHoverClass();
}

function placeMark(cell) {
    const currentClass = xTurn ? X_CLASS : O_CLASS;
    cell.classList.add(currentClass);
}

function swapTurns() {
    xTurn = !xTurn;
}

function setBoardHoverClass() {
    const currentClass = xTurn ? X_CLASS : O_CLASS;
    board.classList.remove(X_CLASS, O_CLASS);
    board.classList.add(currentClass);
}