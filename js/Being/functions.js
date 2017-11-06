/* dist(first,second)
 * returns the pythagorean distance from 'first' to 'second'
 * requires .get(char) method, where char is either 'x' or 'y'
 */
var dist = function(a,b){
  var distance = Math.sqrt(
      (a.get('x')-b.get('x')) * (a.get('x')-b.get('x'))  
      +  
      (a.get('y')-b.get('y')) * (a.get('y')-b.get('y'))
      );
  //console.log(distance);
  return distance;
}
