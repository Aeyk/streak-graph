function oneWeekGridData() {
  var data = new Array();
  var xpos = 1; 
  var ypos = 1;
  var width = 64;
  var height = 64;
  let today = new Date();
  var data = new Array();
  let counter = 0;
  while(counter <= 7) {
    data.push({
      x: xpos,
      y: ypos,
      width: width,
      height: height,
      total: 0,
      date: daysAgoFrom(today, counter)
    })
    xpos += width
    counter++;
  }
  return data;
}

function oneMonthGridData() {
  var data = new Array();
  var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  var ypos = 1;
  var width = 32;
  var height = 32;
  let today = new Date();
  let day_count = 1;
  let week_count = 1;
  for (var column = 0; column < 7; column++) {
    data.push( new Array() );
    for (var row = 0; row < 4; row++) {      
      data[column].push({
        x: xpos,
        y: ypos,
        width: width,
        height: height,
	column: column,
	row: row,
	total: 0,
	date: daysAgoFrom(today, column + (7 * row))
      })
      xpos += width;
    }
    xpos = 1;
    ypos += height;
  }
  return data;
}

function sixMonthGridData() {
  var data = new Array();
  var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  var ypos = 1;
  var width = 16;
  var height = 16;
  let today = new Date();
  let day_count = 1;
  let week_count = 1;
  for (var column = 0; column < 7; column++) {
    data.push( new Array() );
    for (var row = 0; row < 24; row++) {      
      data[column].push({
        x: xpos,
        y: ypos,
        width: width,
        height: height,
	column: column,
	row: row,
	total: 0,
	date: daysAgoFrom(today, column + (7 * row))
      })
      xpos += width;
    }
    xpos = 1;
    ypos += height;
  }
  return data;
}



let clockStrExample =   ``
let moreDates = [];

// should return a datestring?
function parseDiaryClockString(clockStr) {
  return   moreDates.reduce(countDuplicates, {});
}

// takes array of datestrings YYYY-MM-DD output { string: number }
// with each key being uniq and number being the occurance rate
function makeDateCounter(datestringArray) {
  let counter = _.countBy(dateStringArray)
  concat = function(othercounter) {
    this.counter = _.mergeWith(this.counter, othercounter, (x, y) => x ? x + y : y)
    return this;
  }

  size = function() {
    return Object.keys(datestringArray).length
  }
  return { combine, size, counter};
}  
