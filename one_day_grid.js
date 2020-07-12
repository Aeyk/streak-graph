function oneDayGridData() {
  var data = new Array();
  var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
  var ypos = 1;
  var width = 64;
  var height = 64;
  let today = new Date();
  var data = new Array();
  data.push({
    x: 1,
    y: 1,
    width: width,
    height: height,
    total: 0,
    date: new Date() || today
  })
  return data;
}

var oneDayGrid = d3.select(".one-day-grid")
    .append("svg").attr("width","50%")
//	  .attr("width","auto")
//	  .attr("height","auto")

var oneDayTooltip = d3.select("body")
    .data(oneDayGridData)
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")


var oneDayCell = oneDayGrid.selectAll(".row")
    .data(oneDayGridData)
    .enter().append("g").append("rect")
    .attr("class", "square")
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
    .attr("width", function(d) { return d.width; })
    .attr("height", function(d) { return d.height; })
    .attr("stroke-width", 2)
    .on("click",() => {
      slider.classList.add("active")
    })
    .on("mouseover", (e) => {
      oneDayTooltip.text(formatDate(e.date));
      oneDayTooltip.style("visibility", "visible");})
    .on("mousemove", () => { oneDayTooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
    .on("mouseout", () => { oneDayTooltip.style("visibility", "hidden");})
    .attr("fill", (d, i) => {
      d.date = formatDate(d.date)
      d.total = 0;
      console.log(d)
      return colorScale(d.total);
    });
