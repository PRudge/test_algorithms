const assert = require('assert');

const kangaroo = (x1, v1, x2, v2) => {

  if(x2>x1 && v2>v1){ return "NO" } // they will never meet as x2 always ahead
  if(x1!=x2 && v1==v2){return "NO"} // they will never meet because they are increasing at same rate but don't start off at same point
  if(x1==x2){return "YES";} // they are already at same point so game over

  if(x1<x2)
  {
    while(x1<=x2)
    {
      if(x1==x2)
      {
        return "YES";
      }
      x1 += v1;
      x2 += v2;
    }
  }
  else
  {
    while(x2<=x1)
    {
      if(x1==x2)
      {
        return "YES";
      }
      x1 += v1;
      x2 += v2;
    }
  }
  return "NO";

}

describe('Kangaroos Jumping', function() {

  it('should be able to work out if Kangaroos meet_true', function() {
    const result = kangaroo(0,3,4,2)
    assert.equal("YES", result);
  });
  it('should be able to work out if Kangaroos meet_false', function() {
    const result = kangaroo(0,5,46,2)
    assert.equal("NO", result);
  });
});
