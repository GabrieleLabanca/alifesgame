var Animal = function(x,y){
  var B = new Being(x,y);

  var obj = {
    otype: ['Animal'],
    get: function(i){
      return B.get(i);
    },
    set: function(i,val){
      B.set(i,val);
    },
    // creates an object which can be used with dist(,)
    create_goal_point: function(){
      var obj_goal = {
        otype: ['obj_goal'],
        goal_x: 0,
        goal_y: 0,
        get: function(i){
          if(i==='x')      {return this.goal_x;}
          else if(i==='y') {return this.goal_y;}
        },
        set: function(i,val){
          if(i==='x')      {this.goal_x = val;}
          else if(i==='y') {this.goal_y = val;}
        }
      }
      return obj_goal;
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
    color: ['black']
  };
  return obj;
};
