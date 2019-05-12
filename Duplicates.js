const assert = require('assert');

function countDuplicates(numArray) {

  let counts = {},
  duplicate = 0;
  numArray.forEach(function(num) {
    counts[num] = (counts[num] || 0) + 1;
  });

  for (let key in counts) {
    if (counts.hasOwnProperty(key)) {
      counts[key] > 1 ? duplicate++ : duplicate;
    }
  }

  return duplicate;

}

describe('Find Duplicates In Array', function() {

  let numArray = [];

  beforeEach(function () {
    duplicateArray = ["z", "a", "b", "c", "d", "b", "a", "z"];
  });

  it('should be able to get duplicates', function() {
    assert.equal(3 , countDuplicates(duplicateArray) );
  });
});
