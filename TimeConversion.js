const assert = require('assert');

const splitTime = function(s) {
  let hours = s.substring(0, 2);
  let hoursNum = parseInt(hours, 10);
  let amPm = s.substring(8,10);

  if (amPm == "PM"){
    if (hoursNum != 12){
      hoursNum += 12;
      hours = (hoursNum).toString();
    }
  } else if (amPm == "AM"){
    if (hoursNum == 12){
      hours = "00";
    }
  }
return hours + s.substring(2, 8);
}

describe('Time Conversion', function() {
    it('should be able to calculate time to 24 hour clock_AM', function() {
      const str = "07:05:45AM"
      assert.equal("07:05:45" , splitTime(str))
    });

    it('should be able to calculate time to 24 hour clock - PM', function() {
      const str = "07:05:45PM"
      assert.equal("19:05:45" , splitTime(str))
    });

    it('should be able to calculate time to 24 hour clock - 12PM', function() {
      const str = "12:05:45PM"
      assert.equal("12:05:45" , splitTime(str))
    });

    it('should be able to calculate time to 24 hour clock - 12AM', function() {
      const str = "12:05:45AM"
      assert.equal("00:05:45" , splitTime(str))
    });
  });
