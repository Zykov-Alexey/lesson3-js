//задача 1
var counter = (function(){
	var count = 0;
  return function(n){
  	count = n !== undefined ? n : count;
  	return count++;
  }
}());

console.log(counter());
console.log(counter());
console.log(counter(100));
console.log(counter());
console.log(counter(500));
console.log(counter());
console.log(counter(0));