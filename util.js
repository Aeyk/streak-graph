function daysAgoFrom(date, days_ago) {
  return moment().subtract(days_ago, 'days')._d;
}


function countDuplicates(obj, num){
  obj[num] = (++obj[num] || 1);
  return obj;
}

function splitOnNewLines(str) {
  return str.split(/\n/).filter(s => s.length !== 0);
}

function formatDate(date) {
  return moment(date).format(moment.HTML5_FMT.DATE)
}

var colorScale = d3.scaleThreshold()
    .domain(_.range(0, 6))
    .range(d3.schemeBlues[0, 1, 2, 3, 4, 5, 6]);

