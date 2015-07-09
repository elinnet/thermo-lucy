describe('The thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('has a temperature', function() {

    it('with a starting default of 20', function() {
      expect(thermostat.temp).toEqual(20);
    });

    it('that can be decreased in bulk', function() {
      thermostat.down(5);
      expect(thermostat.temp).toEqual(15);
    });

    it('that can be increased in bulk', function() {
      thermostat.up(3);
      expect(thermostat.temp).toEqual(23);
    });

    it('that can be increased by one', function() {
      thermostat.up(1);
      expect(thermostat.temp).toEqual(21);
    });

    it('minimum of 10', function() {
      thermostat.down(11);
      expect(thermostat.temp).toEqual(10);
    });

  });

  describe('has a power save mode', function() {

    it('which is on by default', function() {
      expect(thermostat.powerSave).toEqual(true)
    });

    it('that can be turned off', function() {
      thermostat.powerSave = true;
      thermostat.powerSaveOff();
      expect(thermostat.powerSave).toEqual(false)
    });

    it('that can be turned on', function() {
      thermostat.powerSave = false;
      thermostat.powerSaveOn();
      expect(thermostat.powerSave).toEqual(true)
    });

    it('which sets a maximum temperature of 25', function() {
      thermostat.up(6);
      expect(thermostat.temp).toEqual(25)
    });

    it('which when turned off has a maximum temperature of 32', function() {
      thermostat.powerSaveOff();
      thermostat.up(14);
      expect(thermostat.temp).toEqual(32);
    });

    it('by default and still start at 20 degrees', function() {
      thermostat.powerSaveOn();
      expect(thermostat.temp).toEqual(20);
    });

  });

  describe('when put into power save mode', function() {

    it('and the temperature is above 25 degrees will reset to 25 degrees', function() {
      thermostat.temp = 29;
      thermostat.powerSaveOn();
      expect(thermostat.temp).toEqual(25);
    });

    it('and the temperature is below 25 degrees will stay at the current temperature', function() {
      thermostat.temp = 18;
      thermostat.powerSaveOn();
      expect(thermostat.temp).toEqual(18);
    });

  });

  describe('has a display screen', function() {

    it('which is green if the temperature is below 18 degrees', function() {
      thermostat.temp = 17;
      thermostat._changeDisplay();
      expect(thermostat.colour).toEqual('Green');
    });

    it('which is yellow if the temperature is between 18 and 24 degrees', function() {
      thermostat._changeDisplay();
      expect(thermostat.colour).toEqual('Yellow');
    });

    it('which is red if the temperature is over 25 degrees', function() {
      thermostat.temp = 26;
      thermostat._changeDisplay();
      expect(thermostat.colour).toEqual('Red');
    });

    it('that will change to "Green" when the temperature is lowered from 20 to 17 degrees', function() {
      thermostat.down(3);
      expect(thermostat.colour).toEqual('Green');
    });

    it('that will change to "Yellow" when the temperature is lowered from 25 to 24 degrees', function() {
      thermostat.temp = 25;
      thermostat.down(1);
      expect(thermostat.colour).toEqual('Yellow');
    });

    it('that will change to "Yellow" when the temperature is raised from 17 to 18 degrees', function() {
      thermostat.temp = 17;
      thermostat.colour = 'Green';
      thermostat.up(1);
      expect(thermostat.colour).toEqual('Yellow');
    });

    it('that will change to "Red" when the temperature is raised from 20 to 25', function() {
      thermostat.up(5);
      expect(thermostat.colour).toEqual('Red');
    });

    it('that will change from "Green" to "Red" from the temperature is raised from 17 to 27', function() {
      thermostat.up(10);
      expect(thermostat.colour).toEqual('Red');
    });

  });

  describe('has a reset button', function() {

      it('that makes the temperature 20', function() {
      thermostat.temp = 25
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });

    it('which when pressed will change from 25 to 20 degrees and the display will turn "Yellow"', function() {
      thermostat.temp = 25;
      thermostat.colour = 'Red';
      thermostat.reset();
      expect(thermostat.colour).toEqual('Yellow');
    });

    it('which when pressed will change from 14 to 20 degrees and the display will turn "Yellow"', function() {
      thermostat.temp = 14;
      thermostat.colour = 'Green';
      thermostat.reset();
      expect(thermostat.colour).toEqual('Yellow');
    });

  });

});