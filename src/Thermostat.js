var Thermostat = function(){
  this.temperature = 20;
  this.powersaving = true;
};

Thermostat.prototype.up = function() {
  if(this.temperature >= 25){
    throw new Error("You cannot go higher than 25 degrees");
  };
  this.temperature ++;
};

Thermostat.prototype.down = function() {
  if(this.temperature <= 10){
    throw new Error("You cannot go lower than 10 degrees");
  };
  this.temperature --;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};