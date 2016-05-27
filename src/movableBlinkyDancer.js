var MovableBlinkyDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.apply(this, arguments);
  this.direction = 1;
};

  MovableBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
  MovableBlinkyDancer.prototype.constructor = MovableBlinkyDancer;

  MovableBlinkyDancer.prototype.step = function(){
    BlinkyDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //this.$node.toggle();
    if(this.left >= $("body").width()){
      this.direction = -1;
    }else if(this.left < 0){
      this.direction = 1;
    }
    var step = 10;
    var newLeft = this.left + (this.direction*step);
    this.setPosition(this.top, newLeft);
    
  };
