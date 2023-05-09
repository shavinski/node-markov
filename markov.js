/** Textual markov chain generator. */
"use strict"


class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".

    this.words = text.split(/[ \r\n]+/);
    console.log(this.words)
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
      console.log(this.words[i]);
      if ((this.words[i]) in chainWords){
        chainWords[this.words[i]].push(this.words[i+1])
      }else{
        chainWords[this.words[i]] = [this.words[i+1]]
      }
    }
    console.log(chainWords)
    return chainWords;

  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */
  getRandomWord(words){
    return Math.floor(Math.random() * words.length)
  }



  getText() {
    // TODO: implement this!
    

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
  }
}

module.exports = {
  MarkovMachine,
};