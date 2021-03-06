var Thermostat = function(){
  this.temperature = 20;
  this.powersaving = true;
  this.colour = "yellow";
};

Thermostat.prototype.up = function() {
  if(this.temperature >= 25 && this.powersaving){
    throw new Error("You cannot go higher than 25 degrees");
  };
  if(this.temperature >= 32){
    throw new Error("You cannot go higher than 32 degrees");
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

Thermostat.prototype.colourTemp = function() {
  if(this.temperature < 18){
    this.colour = "green";
  };

  if(this.temperature >= 18 && this.temperature <= 25) {
    this.colour = "yellow";
  };
  if(this.temperature > 25){
    this.colour = "red";
  };
};