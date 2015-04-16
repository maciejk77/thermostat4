describe('Thermostat', function(){

   beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('can change temperature', function(){

    it('can have a default temperature', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('can increase temp by 1', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease temp by 1', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it('can reset to default value', function(){
      thermostat.temperature = 21;
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe('can have max or min temperature', function(){

    it('cannot lower temperature below 10', function(){
      thermostat.temperature = 10;
      expect( function(){ thermostat.down(); }).toThrow(new Error("You cannot go lower than 10 degrees"));

    });

    it('cannot raise over 25 degrees when powersaving is on', function() {
      thermostat.powersaving = true;
      thermostat.temperature = 25;
      expect( function(){ thermostat.up(); }).toThrow(new Error("You cannot go higher than 25 degrees"));
    });

    it('cannot raise over 32 degrees when powersaving is off', function(){
      thermostat.powersaving = false;
      thermostat.temperature = 32;
      expect( function(){ thermostat.up(); }).toThrow(new Error("You cannot go higher than 32 degrees"));
    });

  });

  describe('changes colour depending on temp', function() {

      it('changes to green when < 18', function() {
        thermostat.temperature = 17;
        thermostat.colourTemp();
        expect(thermostat.colour).toEqual("green");
      });

      it('changes to yellow when between 18 and 25', function(){
        thermostat.temperature = 17;
        thermostat.colourTemp = 'green';
        thermostat.up();
        expect(thermostat.colour).toEqual("yellow");
      });

      it('changes to red when > 25', function() {
        thermostat.powersaving = false;
        thermostat.temperature = 25;
        thermostat.up();
        thermostat.colourTemp(); // this line was above, test not passing
        expect(thermostat.colour).toEqual("red");
      });
  });

});





