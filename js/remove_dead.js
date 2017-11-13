function remove_dead()
{
  mysvg.selectAll('circle')
    .data(zoo)
    .select( function(d) { 
      if( d.energy <= 0 ) return this;
    })
    .remove();
}
