var FlippingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps, "flippingDancer");
};

FlippingDancer.prototype = Object.create(Dancer.prototype);
FlippingDancer.prototype.constructor = ImageDancer;

FlippingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};
