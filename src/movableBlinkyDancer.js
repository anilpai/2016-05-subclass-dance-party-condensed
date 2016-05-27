var MovableBlinkyDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps, "movableDancer");
  this.direction = 1;
};

MovableBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
MovableBlinkyDancer.prototype.constructor = MovableBlinkyDancer;

MovableBlinkyDancer.prototype.step = function(){
  BlinkyDancer.prototype.step.call(this);
  if(this.left >= $("body").width()) {
    this.direction = -1;
  } else if(this.left < 0){
    this.direction = 1;
  }
  var step = 10;
  var newLeft = this.left + (this.direction*step);
  this.setPosition(this.top, newLeft);  
};
