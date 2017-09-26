var Arrow = function(x,y){
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
}




var Animal = function(x0,y0)
{
  this.x = x0; 
  this.y = y0;
  //this.r = new Arrow(x0,y0);
  //this.v = new Arrow(1,1);


}










}
