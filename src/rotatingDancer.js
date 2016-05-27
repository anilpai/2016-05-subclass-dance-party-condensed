var RotatingDancer = function(top, left, timeBetweenSteps){
  this.rotationDegree = 0;
  this.rotationInterval = 10;
  Dancer.call(this, top, left, timeBetweenSteps, "rotatingDancer");
};

RotatingDancer.prototype = Object.create(Dancer.prototype);
RotatingDancer.prototype.constructor = RotatingDancer;

RotatingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.rotationDegree = (this.rotationDegree + this.rotationInterval)%360;
  if(this.$node && this.$node[0].style) {
    this.$node[0].style.transform = "rotate(" + this.rotationDegree + "deg)";
  }
};
