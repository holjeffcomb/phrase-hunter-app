/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            new Phrase('home is where the heart is'),
            new Phrase('may the force be with you'),
            new Phrase('keep your eyes on the prize'),
            new Phrase('the world is yours'),
            new Phrase('time heals all wounds')
        ]
        this.activePhrase = null;
    }

    // Start method
    startGame() {
        this.resetBoard();
        startOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)]; // returns random phrase
    }

    handleInteraction (letter) {
        let keyBtn;
        letterButtons.forEach(button => { // find which button belongs to char and disable
            if (button.innerText === letter){
                keyBtn = button;
            }
        });
        keyBtn.disabled = true;
    
        if (this.activePhrase.checkLetter(letter)) { // check if phrase contains letter
            keyBtn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()){ // checks if game won
                this.gameOver(); // game over if true
            }
        } else { // game still continues
            keyBtn.classList.add('wrong');
            this.removeLife();
        }
    }

    checkForWin() {
        let win = true;
        [...ul.children].forEach(li => { // checks for a win depending on if an li element still contains the 'hide' class
            if (li.classList.contains('hide')) {
                win = false;
            }
        });
        return win;        
    }

    gameOver() {
        startOverlay.style.display = 'flex';
        let message;
        if (this.checkForWin()) {
            message = 'Congratulations, You Win!';
            startOverlay.classList.remove('lose');
            startOverlay.classList.add('win');
        } else {
            message = 'Oops! Better Luck Next Time.';
            startOverlay.classList.remove('win');
            startOverlay.classList.add('lose');
        }
        startOverlay.querySelector('h1').innerText = message; // set H1 to winning or losing message
    }

    removeLife() {
        this.missed++; // increment miss
        if (this.missed >= 5) {
            this.gameOver();
        } else {
            const heartToDestroy = heartList[this.missed-1].children[0]; // returns img element
            heartToDestroy.src = 'images/lostHeartNew.png'; // change img src to losing heart
        }
    }

    resetBoard() {
        ul.innerHTML = ''; // remove all li nodes from ul
        letterButtons.forEach(button => { // reset each letter button
            button.className = 'key';
            button.disabled = false;
        });
        heartList.forEach(heart => { // set all hearts back to normal
            heart.children[0].src = 'images/liveHeartNew.png';
        });
        this.missed = 0; // reset missed total
    }
}