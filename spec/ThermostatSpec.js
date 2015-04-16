describe('Thermostat', function(){

  describe('can change temperature', function(){

    it('can have a default temperature', function(){
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
    });

    it('can increase temp by 1', function() {
      thermostat = new Thermostat();
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

  });

});
