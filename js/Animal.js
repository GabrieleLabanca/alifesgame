
var Being = function(x,y){
  this.x = x;
  this.y = y;
  this.get = function(i){
    if(i==='x')      {return this.x;}
    else if(i==='y') {return this.y;}
  }
  this.set = function(i,val){
    if(i==='x')      {this.x = val;}
    else if(i==='y') {this.y = val;}
  },
  this.banana = function(){
    console.log('BANANA');
  }
}


var Animal = function(x,y){
  var B = new Being(x,y);
  
  var obj = {
    updatePosition: function(){
      B.set('x', B.x + 0.5 - Math.random());
      B.y += 0.5 - Math.random();
      if(B.x>svg_w) B.x = svg_w;
      if(B.y>svg_h) B.y = svg_h;
  
    }
  };
  return obj;

});




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

