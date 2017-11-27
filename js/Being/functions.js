/**
 * dist(first,second)
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

/**
 * Creates a range of numbers in an array, starting at a specified number and
 * ending before a different specified number.
 * @param {number} start  Indicates what number should be used as the first
 *     number in the returned array.  If this is the only number argument
 *     supplied, this will be used as the edge and 0 will be used as the start.
 * @param {number=} edge  Indicates the first number that should not appear in
 *     the range of numbers.  If this number preceeds the start in the range
 *     (taking into account the step), an empty array will be returned.  If not
 *     specified and not inferred this defaults to 0.
 * @param {number=} step  Indicates the difference between one number and the
 *     subsequent number placed in the returned array.  If not specified this
 *     defaults to 1.
 * @return {!Array.<number>}  Array of numbers in the specified range.
 *
 * source: http://cwestblog.com/2013/12/16/javascript-range-array-function/
 *
 */
function range(start, edge, step) {
  // If only one number was passed in make it the edge and 0 the start.
  if (arguments.length == 1) {
    edge = start;
    start = 0;
  }
 
  // Validate the edge and step numbers.
  edge = edge || 0;
  step = step || 1;
 
  // Create the array of numbers, stopping befor the edge.
  for (var ret = []; (edge - start) * step > 0; start += step) {
    ret.push(start);
  }
  return ret;
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 *
 * source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 *
 */
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
