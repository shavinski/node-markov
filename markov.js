/** Textual markov chain generator. */
"use strict"


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".

    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns object of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null],
   *  }
   *
   * */

  getChains() {
    // TODO: implement this!
    const chainWords = {};

    for (let i = 0; i < this.words.length; i++){

      const nextWord = this.words[i+1]  || null

      if ((this.words[i]) in chainWords){
        chainWords[this.words[i]].push(nextWord)
      }else{
        chainWords[this.words[i]] = [nextWord]
      }
    }
    return chainWords;
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getRandomWord(words){
    return words[Math.floor(Math.random() * words.length)]
  }


/** will return a random sentence */

  getText() {
    // TODO: implement this!
    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    const firstWord = this.words[0];
    const sentence = [firstWord];

    // refactor to while loop potentially (look at solution)
    for (let word of sentence) {
      const randomWord = this.getRandomWord(this.chains[word]);

      if (randomWord === null) {
        break;
      }

      sentence.push(randomWord);
    }

    return sentence.join(' ');
  }
}

module.exports = {
  MarkovMachine,
};