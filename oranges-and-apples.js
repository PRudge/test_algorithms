const assert = require('assert');

const numHits = function(s, t, a ,b, apples, oranges) {
  let distance = 0;
  let hits = {};
  let fruitCount = 0;
  let fruit = "";

  getDistanceCount("appleHits",hits, apples, a, s, t);
  getDistanceCount("orangeHits",hits, oranges, b, s, t);

  return hits;

}

const getDistanceCount = function(fruitName, hits, fruits, distFromTree, s , t){
  let distance = 0;
  let fruitCount = 0;

  fruits.forEach(function(fruit){
    distance = fruit + distFromTree;
    if (distance >= s && distance <= t){
      fruitCount +=1;
    }
  })
  fruit = fruitName;
  hits[fruit] = fruitCount;
}

describe('Oranges and Apples', function() {

  let hits = {};

  beforeEach(function(){
    hits = numHits(7, 11, 5, 15, [-2, 2, 1, 6, 4], [5, -6, 4, 2, 1])
  });

  it('should be able to count number of hits on house', function() {
    const expected = {
      appleHits: 3,
      orangeHits: 1
    }
    
    assert.deepStrictEqual(expected , hits);
  });
});
