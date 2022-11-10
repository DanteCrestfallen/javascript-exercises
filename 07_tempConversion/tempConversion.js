const ftoc = function(temp) {
  return Math.round(((temp - 32) * 0.5556) * 10)/10;
};

const ctof = function(temp) {
  return Math.round(((1.8 * temp) + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
