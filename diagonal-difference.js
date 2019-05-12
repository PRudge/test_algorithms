const assert = require('assert');

const getDifference = function(arr) {
  let endInd = arr.length;
  let j = endInd - 1;
  let totalLeftDiag = 0;
  let totalRightDiag = 0;
  for (let  i = 0; i < endInd; i++){
    totalLeftDiag += arr[i][i];

    totalRightDiag += arr[j][i];
    j -= 1;
  }
  return Math.abs(totalLeftDiag - totalRightDiag);
}

describe('Diagonal Difference', function() {
  it('should be able to calculate diagonal difference', function() {
    const arr = [ [ 11, 2, 4], [ 4, 5, 6], [ 10, 8, -12]]

    assert.equal(15 , getDifference(arr))
  });
});
