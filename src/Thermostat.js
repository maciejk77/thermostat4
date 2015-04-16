var Thermostat = function(){
  this.temperature = 20;
};

Thermostat.prototype.up = function() {
  this.temperature ++;
};

Thermostat.prototype.down = function() {
  this.temperature --;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};