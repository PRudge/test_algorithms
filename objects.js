const assert = require('assert');

const objects = function(arr1, arr2){
  let obj = []
  for (let i = 0; i < arr1.length; i++) {
    obj = obj + arr1[i] + ":" + arr2[i] + ",";
  }

  obj = "{" + obj.substring(0, obj.length - 1) + "}"
  
  return obj;


}


describe('Objects', function() {
   let newParamArr = [];
   let paramVal = [];


  beforeEach(function () {
    newParamArr = ["Name", "Age", "Email"];
    paramVal = ["Jon", "15", "jon@gmail.com"];

  });

  it(`should be able to create an object`, function() {
    expected = '{Name:Jon,Age:15,Email:jon@gmail.com}';
    assert.deepStrictEqual(expected, objects(newParamArr, paramVal));
  });

});
