function Calculator() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    this.value += number;
    return this;
};
  
Calculator.prototype.subtract = function(number) 
{
  this.value -= number;
  return this;
};
  
Calculator.prototype.multiply = function(number) {
  this.value *= number;
  return this;
};

Calculator.prototype.divide = function(number) 
{
    if (number !== 0) {
      this.value /= number;
    }
    return this;
};