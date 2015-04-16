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
      thermostat.resetTemp();
      expect(thermostat.reset).toEqual(20);
    });

  });

});
