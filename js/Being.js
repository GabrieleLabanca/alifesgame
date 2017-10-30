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
  this.get = function(i){
    if(i==='x')      {return this.x;}
    else if(i==='y') {return this.y;}
  }
  this.set = function(i,val){
    if(i==='x')      {this.x = val;}
    else if(i==='y') {this.y = val;}
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
    //x: A.x,
    //y: A.y,
    get: function(i){
      return A.get(i);
    },
    set: function(i,val){
      A.set(i,val);
    },
    goal_distance: -1,
    // define goal_point as an object -> get,set necessary for distance()
    goal_point: new function(){
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
    think: function(other){
      var d = dist(this,other);
      //console.log(d,this.goal_distance);
      if(d < vis_radius && other.color == 'green'){
        if(this.goal_distance == -1){
          this.goal_distance = svg_h;
        }
        if(d < this.goal_distance){
          this.goal_distance = d;
          this.goal_point.set('x',other.get('x'));
          this.goal_point.set('y',other.get('y'));
        }
      }
      //console.log('think \n'+this.x, this.y, this.goal_point.x, this.goal_point.y);
    },
    move: function(){
      if(this.goal_distance == -1){
        A.randomWalk();
      }
      else{
        var dr = this.goal_distance;

        var dx = (this.goal_point.get('x') - this.get('x'))/dr;
        var dy = (this.goal_point.get('y') - this.get('y'))/dr;
        console.log(dx,dy);
        A.set('x', A.get('x') + dx);
        A.set('y', A.get('y') + dy);
        console.log(A.get('x'),A.get('y'),A);
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



/*
   var Being = {
   get: function(i){
   if(i==='x')      {return this.x;}
   else if(i==='y') {return this.y;}
   },
   set: function(i,val){
   if(i==='x')      {this.x = val;}
   else if(i==='y') {this.y = val;}
   },
   banana: function(){
   console.log('BANANA');
   }
   }


   var Animal = Object.create(Being, {
   thisAnimal: { value: function(){return this;} },
   updatePosition: {
   value: function(){
   this.prototype.set('x', this.prototype.x + 0.5 - Math.random());
   this.Animal.y += 0.5 - Math.random();
   if(this.Animal.x>svg_w) this.Animal.x = svg_w;
   if(this.Animal.y>svg_h) this.Animal.y = svg_h;
   }
   }
   });

*/







/*var Arrow = function(x,y){
  this.x = x;
  this.y = y;
  this.length = 2;
  this.get = function(i) {
  if(i==='x')      {return this.x;}
  else if(i==='y') {return this.y;}
  }
  this.set = function(i,val) {
  if(i==='x')      {this.x = val;}
  else if(i==='y') {this.y = val;}
  }
  this.sum = function(otherArrow,k){
  this.x += k*otherArrow.x;
  this.y += k*otherArrow.y;
  }
  this.rho = function(){
  return Math.sqrt(this.x*this.x+this.y*this.y);
  }
  this.theta = function(){
  return Math.tan(this.y/this.x);
  }
  }

  function sumArrows(A1,A2,k){ //returns Arrow with components=a+k*b
  var A3 = new Arrow(A1.x+k*A2.x, A1.y+k*A2.y);
  return A3;
  }*/
