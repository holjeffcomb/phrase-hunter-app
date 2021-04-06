/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startBtn = document.querySelector('#btn__reset');
const letterButtons = document.querySelectorAll('button.key');
const ul = document.querySelector('#phrase ul');
const startOverlay = document.querySelector('.start');
const heartList = document.querySelectorAll('.tries');

let game = new Game(); // start new game

startBtn.addEventListener('click', () => {
    game.startGame();
})

// Add event listeners to each letter button
letterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        game.handleInteraction(e.target.innerText);
    }); 
});

// Add keyup listener to the document object
document.addEventListener('keyup', (e) => {
    try {
        let thisButton;
        letterButtons.forEach(button => {
            if (button.innerText === e.key) {
                thisButton = button;
            }
        });
        if (!thisButton.disabled) {
            game.handleInteraction(e.key);
        }
    } catch (e) {} // will do nothing if key pressed is not a letter button
});