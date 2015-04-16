var Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.up = function() {
  this.temperature ++;
};

Thermostat.prototype.down = function() {
  if(this.temperature <= 10){
    throw new Error('You cannot go lower than 10 degrees');
  };
  this.temperature --;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};