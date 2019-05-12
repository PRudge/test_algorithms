const assert = require('assert');

const countingValleys = function(n, s) {

  let upDownArr = [];
  const min = 2;
  const max = 1000000;

  let numValleys = 0;
  let inValley = false;

  upDownArr = (typeof s === "string") ? s.split('') : s;

  const  arrLen = upDownArr.length;

  // check constraints

  if (arrLen < min || n < min) return;
  if (arrLen > max || n > max) return;
  if (n!= parseInt(n , 0)) return;
  if (n!= arrLen) return;

  upDownArr = upDownArr.map(steps => ((steps === "U") ? 1 : -1));

  let path = 0;

  upDownArr.forEach(function(step){
    path += step;
    if (path < 0 && !inValley){
      inValley = true;
    }
    if (path == 0 && inValley){
      numValleys ++;
      inValley = false;
    }

  });

  return numValleys;
  
}

describe('Counting Valleys', function() {

  let str;

  beforeEach(function () {
    str = "UDDDUDUU";
  });

  it('should be able to calculate number of Valleys', function() {
    assert.equal(1 , countingValleys(8, str));
  });
});
