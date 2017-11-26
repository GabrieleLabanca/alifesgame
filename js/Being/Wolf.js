/* Wolf.js */
var Wolf = function(x,y){
  var A = new Animal(x,y);

  var obj = {
    otype: ['Wolf'],
    get: function(i){
      return A.get(i);
    },
    set: function(i,val){
      A.set(i,val);
    },
    energy: A.energy,
    handicap_s: 0,
    goal_distance: -1,
    // define goal_point as an object -> get,set necessary for distance()
    create_goal_point: function(){
      return A.create_goal_point();
    },
    goal_point: undefined,
    think: function(other){
      var d = dist(this,other);
      if(d < wolf_vis_range){ // checks if 'other' is in range
        if(other.otype == 'Sheep' && other.color == 'white' ){ // case 'Sheep'
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
      }
    },
    move: function(){ //TODO implement it in Animal, but DIFFICULT
      this.set('s',wolf_speed+this.handicap_s);
      this.energy = this.energy - 1;
      if(this.goal_distance == -1){
        A.randomWalk();
      }
      else{
        var dr = this.goal_distance;
        if(this.get('s') > dr){
          A.set('x',this.goal_point.get('x')+circle_radius);
          A.set('y',this.goal_point.get('y')+circle_radius);
          //console.log(this.goal_point);
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
      if(other.otype == 'Sheep') {
        other.color = 'red'; 
        other.energy = 0;
      }
    },
    color: ['black']
  };
  return obj;
}

