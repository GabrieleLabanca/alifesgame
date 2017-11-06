var Plant = function(x,y){
  var B = new Being(x,y);

  var obj = {
    otype: ['Plant'],
    //x: B.x,
    //y: B.y,
    get: function(i){
      return B.get(i);
    },
    think: function(other){
      if(Math.random()>0.9) {
        //is.color = 'green';
      }
    },
    move: function(){
      if(Math.random()>0.95) {
        this.color = green;
      }
    },
    energy: B.energy,
    color: [Math.random()>0.6 ? green : brown],
    act: function(){}
  };
  return obj;
};
