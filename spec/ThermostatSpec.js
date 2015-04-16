describe('Thermostat', function(){

  describe('can change temperature', function(){

    it('can have a default temperature', function(){
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
    });

  });

});
