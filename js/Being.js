var dist = function(a,b){
  var distance = Math.sqrt(
      (a.get('x')-b.get('x')) * (a.get('x')-b.get('x'))  
      +  
      (a.get('y')-b.get('y')) * (a.get('y')-b.get('y'))
      );
  //console.log(distance);
  return distance;
}




var Being = function(x,y){
  this.otype="Being";
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.get = function(i){
    if(i==='x')      {return this.x;}
    else if(i==='y') {return this.y;}
    else if(i==='s') {return this.speed;}
  }
  this.set = function(i,val){
    if(i==='x')      {this.x = val;}
    else if(i==='y') {this.y = val;}
    else if(i==='s') {this.speed = val;}
  }
  //this.think = function(){}
  //this.move  = function(){}
  //this.act   = function(){}
  this.color = 'black';
}


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
    color: ['black']
  };
  return obj;
};

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
      //if(Math.random()>0.8) this.color = 'green';
    },
    move: function(){},
    color: ['green'],
    act: function(){}
  };
  return obj;
};

var Sheep = function(x,y){
  var A = new Animal(x,y);

  var obj = {
    otype: ['Sheep'],
    get: function(i){
      return A.get(i);
    },
    set: function(i,val){
      A.set(i,val);
    },
    handicap_s: 0,
    goal_distance: -1,
    // define goal_point as an object -> get,set necessary for distance()
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
    goal_point: undefined,
    think: function(other){
      var d = dist(this,other);
      if(d < vis_radius && other.color == 'green'){
        if(this.goal_distance == -1){
          this.goal_distance = svg_h;
        }
        if(d < this.goal_distance){
          this.goal_distance = d;
          this.goal_point = this.create_goal_point();
          this.goal_point.set('x',other.get('x'));
          this.goal_point.set('y',other.get('y'));
        }
      }
      //console.log('think \n'+this.x, this.y, this.goal_point.x, this.goal_point.y);
    },
    move: function(){
      this.set('s',sheep_speed+this.handicap_s);
      if(this.goal_distance == -1){
        A.randomWalk();
      }
      else{
        var dr = this.goal_distance;
        if(this.get('s') > dr){
          A.set('x',this.goal_point.get('x')+circle_radius);
          A.set('y',this.goal_point.get('y')+circle_radius);
          console.log(this.goal_point);
        } else {
        var dx = this.get('s')*(this.goal_point.get('x') - this.get('x'))/dr;
        var dy = this.get('s')*(this.goal_point.get('y') - this.get('y'))/dr;
        A.set('x', A.get('x') + dx);
        A.set('y', A.get('y') + dy);
        }
        if(this.get('x')>svg_w) this.set('x',svg_w);
        if(this.get('x')<0)     this.set('x',0);
        if(this.get('y')>svg_h) this.set('y',svg_h);
        if(this.get('y')<0)     this.set('y',0);

        this.goal_distance = -1;
      }

    },
    act: function(other){
      //if(dist(A,other) < 2*circle_radius)
      //console.log("touch!");
      if(other.color == 'green') {other.color = '#4f3222'; }
    },
    color: ['white']
  };
  return obj;
}



