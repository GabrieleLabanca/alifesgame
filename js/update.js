function update()
{
  // think: double loop
  for(a = 0; a<zoo.length; a++){
      for(b = 0; b<zoo.length; b++){
	  if(a == b)continue;
      zoo[a].think(zoo[b]);
      zoo[a].set('status','ready');
    }
  }

  // move: single loop
  for(a = 0; a<zoo.length; a++){
    /*var A = zoo[a];
      var t = A.get('x');
      A.set('x',t+1);
      t = A.get('y');
      A.set('y',t+1);*/
    if(zoo[a].get('energy') > 0){
      zoo[a].move();
      //console.log(a,zoo[a].energy);
    } else {
      remove_dead();
      //console.log("Remove ",zoo[a]);
      zoo.splice(a,1);
    }
    /*var zoo_composition = "zoo composition: ";
    for(a = 0; a<zoo.length; a++){
      zoo_composition = zoo_composition + " " + zoo[a].get('id');
    }
    console.log(zoo_composition);
    */
  }

  // act: double loop with duplicate exclusion
  for(a = 0; a<zoo.length; a++){
    for(b = 0; b<a; b++){
      if(dist(zoo[a],zoo[b]) < 2*circle_radius){
        zoo[a].act(zoo[b]);
      }
    }
  }
}
