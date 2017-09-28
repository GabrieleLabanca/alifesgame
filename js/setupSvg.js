function setupSvg()
{
  console.log("setupSvg");
  //for(int i=0; i<N; ++i){
    zoo.push(new Animal(50,50));//100*Math.random(),100*Math.random()));
  //}

  mysvg = d3.select("#world")
    .append("svg")
    .attr("width",svg_w)
    .attr("height",svg_h)
    .attr("style","background:black");

  mysvg.selectAll("circle")
    .data(zoo)
    .enter()
    .append("circle")
    .attr('cx',function(d){ return d.get('x'); })
    .attr('cy',function(d){ return d.get('y'); })
    .attr('r',circle_radius)
    .attr('fill',"green");

}
