const cellElements = document.querySelectorAll('[data-cell]');

cellElements.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true });
})

function handleClick(e) {
    console.log('clicked');
    // Place Marks in clicked cells
    // Check for Win
    // Check for Draw
    // Switch Turns
}