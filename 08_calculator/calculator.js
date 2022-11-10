const add = function(...num) {
	return num[0] + num[1];
};

const subtract = function(...num) {
	return num[0] - num[1];
};

const sum = function(...num) {
	let sum = 0;
  for(let i=0; i<num[0].length; i++){
    sum += num[0][i]; 
  }
  return sum;
};

const multiply = function(...num) {
  let answer = 1;
  for(let i=0; i<num[0].length; i++){
    answer *= num[0][i]; 
  }
  return answer;
};

const power = function(...num) {
	return num[0] ** num[1];
};

const factorial = function(...num) {
  let answer = 1;
  for(let i=1; i <= num[0]; i++) {
    answer *= i;
  }
	return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
