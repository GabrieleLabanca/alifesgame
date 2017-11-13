function update()
{
  // think double loop 
  for(a = 0; a<zoo.length; a++){
      for(b = 0; b<zoo.length; b++){
	  if(a == b)continue;
      zoo[a].think(zoo[b]); 
    }
  }

  // move single loop
  for(a = 0; a<zoo.length; a++){
    /*var A = zoo[a];
      var t = A.get('x');
      A.set('x',t+1);
      t = A.get('y');
      A.set('y',t+1);*/
    if(zoo[a].energy > 0){
      zoo[a].move();
      //console.log(a,zoo[a].energy);
    } else {
      remove_dead();
      console.log("Remove ",zoo[a]);
      zoo.splice(a,1);
    }
    console.log("zoo size is", zoo.length);
  }

  // act double loop with dplicate exclusion
  for(a = 0; a<zoo.length; a++){
    for(b = 0; b<a; b++){
      if(dist(zoo[a],zoo[b]) < 2*circle_radius){
        zoo[a].act(zoo[b]);
      }
    }
  }
}
