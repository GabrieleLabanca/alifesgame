function update()
{
  for(a = 0; a<zoo.length; a++){
    for(b = 0; b<zoo.length; b++){
      zoo[a].think(zoo[b]); 
    }
  }
  for(a = 0; a<zoo.length; a++){
    /*var A = zoo[a];
      var t = A.get('x');
      A.set('x',t+1);
      t = A.get('y');
      A.set('y',t+1);*/

    zoo[a].updatePosition();
  }

  for(a = 0; a<zoo.length; a++){
    for(b = 0; b<a; b++){
      if(dist(zoo[a],zoo[b]) < 2*circle_radius){
        zoo[a].act(zoo[b]);
      }
    }
  }








}
