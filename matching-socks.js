const assert = require('assert');

const matchingPairsSox = function(n, ar) {
  ar.sort();

  let pairCount = 0;
  let count = 0;
  let last = ar[0];


  // for (let i =0; i<ar.length; i++){
  // ar.forEach(function(sock) {
  ar.forEach((sock) => {

    if (sock == last){
      count += 1;

    } else {
      last = sock;
      if (count > 1){ // not a single sock
        pairCount += Math.trunc(count/2); // get number of pairs ignore single socks
      }

      count = 1;
    }
  });

  if (count>1){
    pairCount += Math.trunc(count/2);
  }

  return pairCount;

}

describe('Matching Socks', function() {
  let ar = [];

  beforeEach(function(){
    ar = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]
  });

  it('should be able to calculate number of pairs of socks', function() {
    assert.equal(6 , matchingPairsSox(15, ar));
  });
});
