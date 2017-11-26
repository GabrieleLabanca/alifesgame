function remove_dead()
{
  mysvg.selectAll('circle')
    .data(zoo,function(d,i){ return d.get('id'); })
    .select( function(d) {
      if( d.energy <= 0 ) return this;
    })
    .remove();
}
