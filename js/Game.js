/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            'home is where the heart is',
            'may the force be with you',
            'keep your eyes on the prize',
            'the world is yours',
            'time heals all wounds'
        ]
        this.activePhrase = null;
    }

    startGame() {
        const startOverlay = document.querySelector('.start');
        startOverlay.style.display = 'none';
        this.activePhrase = getRandomPhrase();
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }

    handleInteraction (letter) {
        const letterButtons = document.querySelectorAll('button.key');
        let keyBtn;
        let isMatch = false;
        letterButtons.forEach(button => {
            if (button.innerText === letter){
                keyBtn = button;
                isMatch = true;
            }
        });
    
        if (isMatch) {
            keyBtn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            if (checkForWin()){
                gameOver();
            }
        } else {
            keyBtn.classList.add('wrong');
            removeLife();
        }
    }
}