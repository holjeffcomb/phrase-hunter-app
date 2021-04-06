/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startBtn = document.querySelector('#btn__reset');
const letterButtons = document.querySelectorAll('button.key');
const ul = document.querySelector('#phrase ul');
const startOverlay = document.querySelector('.start');
const heartList = document.querySelectorAll('.tries');

let game = new Game();

startBtn.addEventListener('click', () => {
    game.startGame();
})

letterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        game.handleInteraction(e.target.innerText);
    });
});