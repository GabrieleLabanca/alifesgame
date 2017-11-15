function graphic_update()
{
  mysvg.selectAll('circle')
    //.data(zoo,function(d,i){ return d.get('id'); })
    .transition()
    .attr('cx',function(d){ return d.get('x'); })
    .attr('cy',function(d){ return d.get('y'); })
    .attr('r',circle_radius)
    .attr('fill',function(d){ return d.color; } );
    //.exit()
    //.transition()
    //.attr('r', 0)
    //.remove();;


}



