function graphic_update()
{
  mysvg.selectAll('circle')
    .data(zoo)
    .transition()
    .attr('cx',function(d){ return d.get('x'); })
    .attr('cy',function(d){ return d.get('y'); })
    .attr('r',circle_radius)
    .attr('fill',function(d){ return d.color; } );





}
