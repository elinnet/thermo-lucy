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

  describe('is in power saving mode', function() {

    it('by default', function() {
      expect(thermostat.powerSave).toEqual(true)
    });

  });

  describe('can turn off', function() {

    it('power saving mode', function() {
      thermostat.powerSave = true;
      thermostat.powerSaveOff();
      expect(thermostat.powerSave).toEqual(false)
    });

  });

  describe('can be turn on', function() {

    it('power saving mode', function() {
      thermostat.powerSave = false;
      thermostat.powerSaveOn();
      expect(thermostat.powerSave).toEqual(true)
    });

  });

  describe('when in power saving mode', function() {

    it('has a maximum temperature of 25', function() {
      thermostat.up(6);
      expect(thermostat.temp).toEqual(25)
    });

  });

  describe('when not in power saving mode', function() {

    it('has a maximum temperature of 32', function() {
      thermostat.powerSaveOff();
      thermostat.up(14);
      expect(thermostat.temp).toEqual(32);
    });

  });

});