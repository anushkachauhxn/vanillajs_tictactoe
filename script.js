const X_CLASS = 'x';
const O_CLASS = 'o';
let xTurn
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winning-message');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');

startGame();

function startGame() {
    xTurn = true;
    setBoardHoverClass();
    cellElements.forEach((cell) => {
        cell.addEventListener('click', handleClick, { once: true });
    })
}

function handleClick(e) {
    const cell = e.target;
    // Place Marks in clicked cells
    placeMark(cell);
    // Check for Win
    if (checkWin()) {
        endGame(false);
    }
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

function checkWin() {
    const currentClass = xTurn ? X_CLASS : O_CLASS;
    // Check if: for 'some' combination in WINNING_COMBINATIONS array
    return WINNING_COMBINATIONS.some((combination) => {
        // and for 'every' index in that combination array,
        return combination.every((index) => {
            // the cell corresponding to that index contains currentClass in its classList 
            return cellElements[index].classList.contains(currentClass);
        })
    })
}

function endGame(draw) {
    if (draw) {
        console.log('draw')
    } else {
        winningMessageTextElement.innerText = `${xTurn ? "X's" : "O's"} Wins!`;
    }
    winningMessageElement.classList.add('show');
}