/* Being */
var Being = function(x,y){
  this.otype="Being";
  this.x = x;
  this.y = y;
  this.id = id_c++;
  this.speed = speed;
  this.energy = 10;// Math.floor((Math.random() * 10) + 1); // random energy betwen 1 and 10
  this.get = function(i){
    if(i==='x')       {return this.x;}
    else if(i==='y')  {return this.y;}
    else if(i==='s')  {return this.speed;}
    else if(i==='id') {return this.id;}
    else if(i==='energy') {return this.energy;}
  }
  this.set = function(i,val){
    if(i==='x')      {this.x = val;}
    else if(i==='y') {this.y = val;}
    else if(i==='s') {this.speed = val;}
    else if(i==='energy') {this.energy = val;}
  }
  //this.think = function(){}
  //this.move  = function(){}
  //this.act   = function(){}
  this.color = 'black';
}






