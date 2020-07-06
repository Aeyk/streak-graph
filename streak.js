function gridData() {
  var data = new Array();
  var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  var ypos = 1;
  var width = 12;
  var height = 12;
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
  var width = 12;
  var height = 12;
  let max = 7 * 2;
  let today = new Date();
  let day_count = 1;
  let week_count = 1;
  for (var column = 0; column < 7; column++) {
    data.push( new Array() );
    for (var row = 0; row < 3; row++) {      
      data[column].push({
        x: xpos,
        y: ypos,
        width: width,
        height: height,
	column: column,
	row: row,
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
