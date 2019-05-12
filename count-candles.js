const assert = require('assert');

const Candles = function () {

}

Candles.prototype.countCandles = function(ar) {
  // blow out the candles with biggest age on them, count number
  let total = 0;
  let last = 0;
  for(let i = 0; i < ar.length; i++){
    if (ar[i] > last){
      last = ar[i];
      total = 1;
    }else if (ar[i] == last){
      total += 1;
    }
  }
  return total;
}

describe('Candles', function() {

  beforeEach(function () {
    candles = new Candles();
  });

  it('should be able to count number of largest candles', function() {
    const arr = [ 8,3,2,8,1,3,5,6,8,3]
    assert.equal(3 , candles.countCandles(arr))
  });
  
});
