/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let className;

        // iterate through each letter in phrase and create li elements
        [...this.phrase].forEach(character => {
            character === ' ' ? className = 'space' : className = `hide letter ${character}`;
            const li = document.createElement('li');
            li.className = className;
            li.innerText = character;
            ul.appendChild(li); // append li to ul element
        });

    }

    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    // iterate through phrase li elements and change class name
    showMatchedLetter(letter) {
        document.querySelectorAll(`.${letter}`).forEach(match => {
            match.className = `show letter ${letter}`;
        });
    }
}