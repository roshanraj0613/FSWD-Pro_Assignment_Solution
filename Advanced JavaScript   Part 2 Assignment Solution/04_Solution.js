function Shape() {}

Shape.prototype.draw = function() {
  return "I am a generic shape";
};

function Circle() {}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  return "I am a circle";
};

function Rectangle() {}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.draw = function() {
  return "I am a rectangle";
};