const assert = require('assert');

const findOccurencesInString = function(l, s, n) {

  let letOfInterest = l;
  let strChars = s;
  let numberOfChars = n;
  let arrLen = 0;

  let arrOfChars = []
  const maxString = 100;
  const maxNumChars = Math.pow(10, 12);
  let repeatChars = 0;
  let extras = 0;
  let stringToTest = "";
  const findLet = letOfInterest;
  let totalLet = 0;

  arrOfChars = (typeof string === "string") ? strChars.split('') : strChars;

  arrLen = arrOfChars.length;

  // check constraints
  if (arrLen > maxString || numberOfChars > maxNumChars) return;

  // constraints are OK so let's go

  repeatChars = parseInt((numberOfChars/arrOfChars.length), 10);

  extras = numberOfChars % arrOfChars.length;

  for (let i = 0; i < repeatChars; i++){
    stringToTest += strChars;
  }

  for (let i = 0; i < extras; i++){
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
  let letOfInterest = ""
  let sizeOfString = 0;

  beforeEach(function () {
    // str = ["a","b","b","a","a","b","a","a","b","a", "a"];

    // str = "abbaabaabaa"
    str = "az"
    sizeOfString = 1000000;
  });

  it(`should be able to calculate number of a's`, function() {
    letOfInterest = "a"
    assert.equal(500000, findOccurencesInString(letOfInterest, str, sizeOfString));
  });

  it(`should be able to calculate number of z's`, function() {
    letOfInterest = "z";
    assert.equal(500000, findOccurencesInString(letOfInterest, str, sizeOfString));
  });
});
