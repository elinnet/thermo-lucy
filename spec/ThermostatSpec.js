describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Can display it\'s', function() {

    it('starting temperature', function() {
      expect(thermostat.temp).toEqual(20);

    });

  });

  describe('Can decrease the temperature', function() {

    it('in bulk', function() {
      thermostat.down(5);
      expect(thermostat.temp).toEqual(15);

    });

  });

  describe('Can increase the temperature', function() {

    it('in bulk', function() {
      thermostat.up(5);
      expect(thermostat.temp).toEqual(25);

    });

  });

  describe('Has a minimum', function() {

    it('temperature of 10', function() {
      thermostat.down(11);
      expect(thermostat.temp).toEqual(10);

    });

  });

  describe('Is in power save mode', function() {

    it('by default', function() {
      expect(thermostat.powerSave).toEqual(true)
    });

  });

  describe('Can turn off', function() {

    it('power save mode', function() {
      thermostat.powerSave = true;
      thermostat.powerSaveOff();
      expect(thermostat.powerSave).toEqual(false)
    });

  });

  describe('Can be put into', function() {

    it('power save mode', function() {
      thermostat.powerSave = false;
      thermostat.powerSaveOn();
      expect(thermostat.powerSave).toEqual(true)
    });

  });

  describe('When thermostat is in power saving mode', function() {

    it('it has a maximum temperature of 25', function() {
      thermostat.up(6);
      expect(thermostat.temp).toEqual(25)
    });

  });

  describe('When thermostat is not in power saving mode', function() {

    it('it has a maximum temperature of 32', function() {
      thermostat.powerSaveOff();
      thermostat.up(14);
      expect(thermostat.temp).toEqual(32);
    });

  });

  describe('Has a reset button', function() {

    it('that makes the temperature 20', function() {
      thermostat.temp = 25
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });

  });

  describe('If thermostat is put into power save mode', function() {

    it('when above 25 degrees it will reset to 25 degrees', function() {
      thermostat.temp = 29;
      thermostat.powerSaveOn();
      expect(thermostat.temp).toEqual(25);
    });

    it('when at 18 degrees it will stay at 18 degrees', function() {
      thermostat.temp = 18;
      thermostat.powerSaveOn();
      expect(thermostat.temp).toEqual(18);
    });

  });

  describe('When the tempterature is less than', function() {

    it('18 degrees display is green', function() {
      thermostat.temp = 17;
      thermostat._changeDisplay();
      expect(thermostat.colour).toEqual('Green');
    });
  
  });

  describe('When the tempterature is between', function() {

    it('18 and 24 display is yellow', function() {
      thermostat._changeDisplay();
      expect(thermostat.colour).toEqual('Yellow');
    });
  
  });

  describe('When the tempterature is over', function() {

    it('25 degrees, display is red', function() {
      thermostat.temp = 26;
      thermostat._changeDisplay();
      expect(thermostat.colour).toEqual('Red');
    });

  });

  describe('When tempterature is lowered', function() {

    it('to 17 degrees or below it will change display to "Green"', function() {
      thermostat.down(3);
      expect(thermostat.colour).toEqual('Green');
    });

    it('to 25 to 24 it will change display to "Yellow"', function() {
      thermostat.temp = 25;
      thermostat.down(1);
      expect(thermostat.colour).toEqual('Yellow');
    });

  });

  describe('When the temperature is increased', function() {

    it('from 17 to 18 degrees it will change display to "Yellow"', function() {
      thermostat.temp = 17;
      thermostat.colour = 'Green';
      thermostat.up(1);
      expect(thermostat.colour).toEqual('Yellow');
    });

    it('from 20 to 25 degrees it will change display to "Red"', function() {
      thermostat.up(5);
      expect(thermostat.colour).toEqual('Red');
    });

    it('from 17 to 27 degrees it will change display from "Green" to "Red"', function() {
      thermostat.up(10);
      expect(thermostat.colour).toEqual('Red');
    });

  });

  describe('When you press the reset button', function() {

    it('and it changes from 25 to 20 degrees, display will turn "Yellow"', function() {
      thermostat.temp = 25;
      thermostat.colour = 'Red';
      thermostat.reset();
      expect(thermostat.colour).toEqual('Yellow');
    });

    it('and it changes from 14 to 20 degrees, display will turn "Yellow"', function() {
      thermostat.temp = 14;
      thermostat.colour = 'Green';
      thermostat.reset();
      expect(thermostat.colour).toEqual('Yellow');
    });

  });

});