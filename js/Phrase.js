/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let className;
        [...this.phrase].forEach(character => {
            character === ' ' ? className = 'space' : className = `hide letter ${character}`;
            const li = document.createElement('li');
            li.className = className;
            li.innerText = character;
            ul.appendChild(li);
        });

    }

    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    showMatchedLetter(letter) {
        const matched = document.querySelectorAll(`.${letter}`);
        matched.forEach(match => {
            match.className = `show letter ${letter}`;
        });
    }
}