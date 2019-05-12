const assert = require('assert');

function findPairs(sum , numArray) {
  let pairsArray =[]
  for(let i = 0; i < numArray.length; i++){
    for (let j = 0; j < numArray.length; j++){
      if ((numArray[i] + numArray[j]) == sum && (i < j)){
        pairsArray.push([numArray[i], numArray[j]]);
      }
    }
  }

  return pairsArray;

}

describe('find pairs that make sum ', function() {

  let numArray = [];
  let sum = 0;


  beforeEach(function () {
    numArray = [1 , 2, 4 , 5, 3, 7, 0];
    sum = 7;
  });

  it('should be able to array of pairs', function() {
    const arrayOfPairs = findPairs(sum, numArray)
    assert.equal(3 , arrayOfPairs.length );
  });
});
