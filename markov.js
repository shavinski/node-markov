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


    // 
    // const chain = {
    //   "Women": ["and", "and"],
    //   "and": ["men", "small"],
    //   "men": ["both"],
    //   "both": ["little"],
    //   "little": ["and"],
    //   "small": ["cared"],
    //   "cared": ["for"],
    //   "for": ["anyone"],
    //   "anyone": ["not"],
    //   "not": ["at"]

    // }


  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  // Women and men both little and small
  // cared for anyone not at all
  // they sowed their isn't they reaped their same
  // sun moon stars rain

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