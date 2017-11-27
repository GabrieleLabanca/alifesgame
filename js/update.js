function setlists(){
  ltsa = range(0, zoo.length);
  ltsb = ltsa;
  shuffle(ltsa);
  shuffle(ltsb);
}

function update()
{
  var a = 0;
  var b = 0;
  setlists();
  // think: double loop
  for(i = 0; i < zoo.length; i++) {
    a = ltsa[i];
    for(j = 0; j < zoo.length; j++) {
      b = ltsb[j];
      if(a == b) continue;
      zoo[a].think( zoo[b] );
      zoo[a].set('status','ready'); //TODO
    };
  };

  setlists();
  // move: single loop
  for(i = 0; i < zoo.length; i++){
    a = ltsa[i];
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

  setlists();
  // act: double loop with duplicate exclusion
  for(i = 0; i < zoo.length; i++){
    a = ltsa[i];
    for(j = 0; j < i; i++){
      b = ltsb[j];
      if(dist(zoo[a], zoo[b]) < 2 * circle_radius){
        zoo[a].act(zoo[b]);
      }
    }
  }
}
