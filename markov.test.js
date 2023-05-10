

const {MarkovMachine} = require("./markov");

// test getChains
describe("getChain method",function(){

  let markov;

  beforeEach(function(){
    markov = new MarkovMachine("Green eggs and ham");
  })

  test("getChain should return object from text", function(){
    expect(markov.getChains()).toEqual({
      "Green": ["eggs"],
      "eggs":["and"],
      "and":["ham"],
      "ham":[null]
    })
  })

  test("random word",function(){
    let word = markov.getRandomWord(["test","test2"]);
    expect(word).toEqual(
      expect.any(String)
    )
  })

})


