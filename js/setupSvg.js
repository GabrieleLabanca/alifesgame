function setupSvg()
{
  svg_w = document.getElementById('world-frame').clientWidth;
  //svg_h = document.getElementById('world-frame').clientHeight;
  console.log("setupSvg");
  for( i=0; i<N; i++){
    zoo.push( new Animal(svg_w*Math.random(),svg_h*Math.random()));
  }
  for( i=0; i<N_plants; i++){
    zoo.push( new Plant(svg_w*Math.random(),svg_h*Math.random()));
  }
  for( i=0; i<N_sheep; i++){
    zoo.push( new Sheep(svg_w*Math.random(),svg_h*Math.random()));
  }
  for( i=0; i<N_wolves; i++){
    zoo.push( new Wolf(svg_w*Math.random(),svg_h*Math.random()));
  }



  mysvg = d3.select("#world")
    .append("svg")
    .attr("width",svg_w)
    .attr("height",svg_h)
    .attr("style","background:"+bg_color_2+';');

  mysvg.selectAll("circle")
    .data(zoo)
    .enter()
    .append("circle")
    .attr('cx',function(d){ return d.get('x'); })
    .attr('cy',function(d){ return d.get('y'); })
    .attr('r',circle_radius)
    .attr('fill',function(d){ return d.color;  });

}
