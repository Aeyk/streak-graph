function gridData() {
  var data = new Array();
  var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  var ypos = 1;
  var width = 32;
  var height = 32;
  let max = 8 * 4 * 6;
  // iterate for rows 
  for (var row = 0; row < 8; row++) {
    data.push( new Array() );

    // iterate for cells/columns inside rows
    for (var column = 0; column < (4 * 6); column++) {
      
      let today = new Date();
      today.setDate(today.getDate() - max)
      max--;
      data[row].push({
        x: xpos,
        y: ypos,
        width: width,
        height: height,
	days_ago: today
      })
      // increment the x position. I.e. move it over by 50 (width variable)
      xpos += width;
    }
    // reset the x position after a row is complete
    xpos = 1;
    // increment the y position for the next row. Move it down 50 (height variable)
    ypos += height; 
  }
  return data;
}

function gridData2() {
  var data = new Array();
  var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  var ypos = 1;
  var width = 16;
  var height = 16;
  let max = 7 * 2;
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


function daysAgoFrom(date, days_ago) {
  return moment().subtract(days_ago, 'days')._d;
}



let clockStrExample =   `
CLOCK: [2020-06-29 Mon 13:41]--[2020-06-29 Mon 14:22] =>  0:41
  CLOCK: [2020-06-29 Mon 14:25]--[2020-06-29 Mon 15:05] =>  0:40
  CLOCK: [2020-06-29 Mon 15:07]--[2020-06-29 Mon 15:28] =>  0:21
  CLOCK: [2020-06-29 Mon 18:50]--[2020-06-29 Mon 19:06] =>  0:16
  CLOCK: [2020-06-29 Mon 16:14]--[2020-06-29 Mon 17:42] =>  1:28
  CLOCK: [2020-06-29 Mon 21:49]--[2020-06-29 Mon 22:24] =>  0:35
  CLOCK: [2020-06-29 Mon 22:25]--[2020-06-29 Mon 23:25] =>  1:00
  CLOCK: [2020-06-30 Tue 13:30]--[2020-07-01 Wed 17:56] => 28:26
  CLOCK: [2020-07-01 Wed 15:05]--[2020-07-01 Wed 17:57] =>  2:52
  CLOCK: [2020-07-06 Mon 12:53]--[2020-07-06 Mon 16:54] =>  4:01
  CLOCK: [2020-07-06 Sun 21:52]
  CLOCK: [2020-07-06 Sun 21:52]
  CLOCK: [2020-07-05 Sun 21:52]
`


// should return a datestring?
function parseDiaryClockString(clockStr) {
  dateArray = []
  splitOnNewLines(clockStr).forEach(clockStrLine => {
    date = clockStrLine.match(/\d{4}-\d{2}-\d{2}/)[0]
    dateArray.push(date)
  })
  frequencyMap = dateArray.reduce(countDuplicates, {})

  return   moreDates.reduce(countDuplicates, {...frequencyMap});
}

let moreDates = ["2020-05-06",
"2020-05-12",
"2020-05-12",
"2020-05-12",
"2020-05-13",
"2020-06-23",
"2020-06-24",
"2020-06-29",
"2020-06-30",
"2020-07-05"]



function countDuplicates(obj, num){
  obj[num] = (++obj[num] || 1);
  return obj;
}


function splitOnNewLines(str) {
  return str.split(/\n/).filter(s => s.length !== 0);
}

