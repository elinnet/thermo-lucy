describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has a starting temperature', function() {

    it('of 20', function() {
      expect(thermostat.display(20)).toEqual('20');

    });

  });

});