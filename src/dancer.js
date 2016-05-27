// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, className){
  this.className = className || "dancer";
  this.$node = $('<span class="'+this.className+'"></span>');
  this.timeBetweenSteps =  timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};


Dancer.prototype.step = function(){
  setTimeout(()=>this.step(), this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function(topPosition) {  
  this.setPosition(topPosition, this.left); 
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.top = top;
  this.left = left;
  this.$node.css(styleSettings);
};
