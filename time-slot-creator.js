const assert = require('assert');

const TimeSlotCreator = function () {

}

TimeSlotCreator.prototype.getTheTimeSlots = function(str) {

  let arr = [];
  let timeSlotLen = 2; // 2 hour time

  let strOne = str.substring(0, 2); // get opening time
  let strTwo = str.substring(6, 8); // get closing time

  let start = parseInt(strOne,10);
  let end = parseInt(strTwo,10);

  let timeSpan = end - start;
  let endPoint = timeSpan/timeSlotLen;
  let timeSlot = "";

  for(let i = 0; i < endPoint; i++){
    timeSlot = start + ":00";
    arr[i] = timeSlot;
    start += timeSlotLen;
  }
  return arr;
}

describe('Split opening hours into time slots', function() {
  beforeEach(function () {
    splitString = new TimeSlotCreator();
  });

  it('should be able to return an array of timeslots', function() {
    const string = "10:00-22:00"

    assert.deepStrictEqual(["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"], splitString.getTheTimeSlots(string))
  });
});
