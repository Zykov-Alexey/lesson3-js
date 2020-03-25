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
console.log('-------End Задача1--------');


// задача 2
let counting = (function () {
  let count = 0;

  return {
    value(n) {
      if (n !== undefined) count = n;

      return count;
    },
    decrement() {
      count--;
    },
    increment() {
      count++;
    }
  };
}());

console.log(counting.value());
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
counting.decrement();
console.log(counting.value());
console.log(counting.value(100));
counting.decrement();
console.log(counting.value());
console.log(counting.value(200));
counting.increment();
console.log(counting.value());

console.log('-------End Задача2---------');

//задача 3
var myPrint = function(a, b, res) {
  return `${a}^${b}=${res}`
}

var myPow= function(a, b, myPrint) {

  var pow = function (a, n) {
      if (n !== 1) { 
          return a *= pow(a, n - 1);
      }
      else {
          return a;
      }
  };

  return myPrint(a, b, pow(a, b));
}

console.log(myPow(3, 4, myPrint));
console.log(myPow(2, 3, myPrint)); 
console.log('-------End Задача3---------');

//задача 4

function fullInfo() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

let yearNow = new Date().getFullYear();
let car = {
  name: 'audi',
  model: 'a6',
  engine: 2.5,
  year: 2010,
  info: fullInfo,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};
let car1 = {
  name: 'bmw',
  model: 'x5',
  engine: 3.0,
  year: 2019,
  info: fullInfo,
  get used() {
    return yearNow - this.year ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) this.year = yearNow;
  }
};
console.log('-------End Задача4---------');