describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('can display it\'s', function() {

    it('starting temperature', function() {
      expect(thermostat.temp).toEqual(20);

    });

  });

  describe('can the temperature', function() {

    it('decrease', function() {
      thermostat.down(5);
      expect(thermostat.temp).toEqual(15);

    });

  });

  describe('can the temperature', function() {

    it('increase', function() {
      thermostat.up(5);
      expect(thermostat.temp).toEqual(25);

    });

  });

  describe('has a minimum', function() {

    it('temperature of 10', function() {
      thermostat.down(11);
      expect(thermostat.temp).toEqual(10);

    });

  });

});