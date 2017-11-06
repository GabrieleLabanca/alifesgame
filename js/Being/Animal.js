var Animal = function(x,y){
  var B = new Being(x,y);

  var obj = {
    otype: ['Animal'],
    //x: B.x,
    //y: B.y,
    get: function(i){
      return B.get(i);
    },
    set: function(i,val){
      B.set(i,val);
    },
    randomWalk: function(){
      B.set('x', B.x + speed*( 0.5 - Math.random() ));
      B.set('y', B.y + speed*( 0.5 - Math.random() ));
      if(B.x>svg_w) B.x = svg_w;
      if(B.x<0)     B.x = 0;
      if(B.y>svg_h) B.y = svg_h;
      if(B.y<0)     B.y = 0;
    },
    move: function(){
      randomWalk();
    },
    energy: B.energy,
    color: ['black']
  };
  return obj;
};
