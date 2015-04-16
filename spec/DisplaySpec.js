describe ('Thermostat web interface', function(){

  beforeEach(function(){
  thermostat = new Thermostat();
  jasmine.getFixtures().fixturesPath = '.';
  loadFixtures('index.html');
  });

  it('displays the temperature', function(){
    expect('#temperature').toContainText('20');
  });

  it('can increase the temperature', function(){
    $('#up').click();
    expect('#up').toContainText('21');
  });

});