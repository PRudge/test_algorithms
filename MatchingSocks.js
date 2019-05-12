const assert = require('assert');

const matchingPairsSox = function(n, ar) {
  ar.sort();

  let pairCount = 0;
  let count = 0;
  let last = ar[0];

//   // before
// for (let i=0; i<items.length; i++) {
//   copy.push(items[i]);
// }
//
// // after
// items.forEach(function(item){
//   copy.push(item);
// });

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
  it('should be able to calculate number of pairs of socks', function() {
    const ar = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5]

    assert.equal(6 , matchingPairsSox(15, ar));
  });
});
