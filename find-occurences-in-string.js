const assert = require('assert');

const findOccurencesInString = function(letterOfInterest, strChars, numberOfChars) {

  let arrLen = 0;
  let arrOfChars = []

  const minStr = 1;
  const maxStr = 100;
  const maxNumChars = Math.pow(10, 12);
  let repeatChars = 0;
  let remainder = 0;
  let stringToTest = "";
  const findLet = letterOfInterest;
  let totalLet = 0;

  arrOfChars = (typeof string === "string") ? strChars.split('') : strChars;

  arrLen = arrOfChars.length;

  // check constraints
  if (arrLen > maxStr || numberOfChars > maxNumChars) return;

  // constraints are OK so let's go

  repeatChars = parseInt((numberOfChars/arrOfChars.length), 10);

  remainder = numberOfChars % arrOfChars.length;

  for (let i = 0; i < repeatChars; i++){
    stringToTest += strChars;
  }

  for (let i = 0; i < remainder; i++){
    stringToTest += arrOfChars[i];
  }

  arrOfChars = stringToTest.split('');
  arrOfChars.forEach((char) =>{
    if (char == findLet ){
      totalLet += 1;
    }

  });

  return totalLet;

}

describe('Find Occurences in String', function() {

  let str;
  let letterOfInterest = ""
  let sizeOfString = 0;

  beforeEach(function () {
    // str = ["a","b","b","a","a","b","a","a","b","a", "a"];

    // str = "abbaabaabaa"
    // str = "az"
    str = ["a","z", "a", "b"];
    sizeOfString = 1000000;
  });

  it(`should be able to calculate number of a's`, function() {
    letterOfInterest = "a"
    assert.equal(500000, findOccurencesInString(letterOfInterest, str, sizeOfString));
  });

  it(`should be able to calculate number of z's`, function() {
    letterOfInterest = "z";
    assert.equal(250000, findOccurencesInString(letterOfInterest, str, sizeOfString));
  });
});
