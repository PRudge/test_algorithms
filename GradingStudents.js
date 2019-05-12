const assert = require('assert');

const GradingStudents = function () {

}

GradingStudents.prototype.getGrades = function(grades) {
  let divisor = 5;
  let remainder = 0;
  let diff = 0;
  let updatedGrades = new Array();

  grades.forEach(function(grade){
    remainder = grade % divisor;
    if (grade >= 38 && remainder != 0 ){
      remainder = grade % divisor;
      diff = divisor - remainder;
      if (diff < 3){
        grade += diff;
      }
    }
    updatedGrades.push(grade);
  })
  return updatedGrades;
}

describe('Grading Students', function() {
  beforeEach(function () {
    getStudentGrades = new GradingStudents();
    grades = [12,45,68,73];
    expected = [12, 45, 70, 75  ]
  });

  it('should be able to calculate new grades', function() {
    assert.deepStrictEqual(expected, getStudentGrades.getGrades(grades))
  });

});
