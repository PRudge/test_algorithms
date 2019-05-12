const assert = require('assert');

function findMissingNumber(arrSeqNum, missNumArr) {
  let overAllTotal = (arrSeqNum * (arrSeqNum+1))/2;
  let missNumTotal = 0;
  missNumArr.forEach((num) => {
    missNumTotal += num;
  });

  return overAllTotal - missNumTotal;

}

describe('Missing Number', function() {

  let arrSeqNum  = 10;
  let missNumArr = [];

  beforeEach(function () {
    arrSeqNum = 5;
    missNumArr = [1, 2, 4, 5];
  });

  it('should be able to get missing number', function() {
    assert.equal(3 , findMissingNumber(arrSeqNum, missNumArr) );
  });
});
