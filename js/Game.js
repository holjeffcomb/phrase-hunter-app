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

    startGame() {
        startOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }

    handleInteraction (letter) {
        let keyBtn;
        letterButtons.forEach(button => {
            if (button.innerText === letter){
                keyBtn = button;
            }
        });
    
        if (this.activePhrase.checkLetter(letter)) {
            keyBtn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()){
                this.gameOver();
            }
        } else {
            keyBtn.classList.add('wrong');
            this.removeLife();
        }
        keyBtn.disabled = true;
    }

    checkForWin() {
        let win = true;
        [...ul.children].forEach(li => {
            if (li.classList.contains('hide')) {
                win = false;
            }
        });
        return win;        
    }

    gameOver() {
        startOverlay.style.display = 'inline';
        let gameStatus = this.checkForWin();
        let message;
        if (gameStatus) {
            message = 'Congratulations, You Win!';
            startOverlay.classList.add('win');
        } else {
            message = 'Oops! Better Luck Next Time.';
            startOverlay.classList.add('lose');
        }

        startOverlay.querySelector('h1').innerText = message;
        this.resetBoard();
    }

    removeLife() {
        this.missed++;
        if (this.missed >= 5) {
            this.gameOver();
        } else {
            const heartToDestroy = heartList[this.missed-1].children[0]; // returns img element
            heartToDestroy.src = 'images/lostHeart.png';
        }
        
    }

    resetBoard() {
        ul.innerHTML = ''; // remove all li nodes from ul
        letterButtons.forEach(button => {
            button.className = 'key';
            button.disabled = false;
        });
        heartList.forEach(heart => {
            heart.children[0].src = 'images/liveHeart.png';
        });
        this.missed = 0;


    }
}