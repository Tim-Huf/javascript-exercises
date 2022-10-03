const ftoc = function(fahrenheit, celsius) {
  let celsius = (fahrenheit - 32) * (5/9)
  let rounded = Math.round(celsius * 10) / 10
  return rounded

};

const ctof = function(fahrenheit, celsius) {
  let fahrenheit = (celsius * (5/9) + 32)
  let rounded = Math.round(fahrenheit * 10) / 10
  return rounded

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
