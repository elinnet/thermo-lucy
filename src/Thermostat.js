function Thermostat() {
  this.temp = 20;
  this.powerSave = true;
  this.colour = 'Yellow';
};

Thermostat.prototype.down = function(num) {
  if ((this.temp - num) < 10) {
    this.temp = 10;
  } else {
    this.temp -= num;
  };
  this._changeDisplay();
};

Thermostat.prototype.up = function(num) {
  if(this.powerSave) {
    if(this.temp + num > 25) {
      this.temp = 25
    } else {
      this.temp += num;
    }
  } else {
    if(this.temp + num > 32) {
      this.temp = 32
    } else {
      this.temp += num;
    };
  };
  this._changeDisplay();
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false;
};

Thermostat.prototype.powerSaveOn = function() {
  if (this.powerSave = true) {
    this._powerSaveReset();
  };
};

Thermostat.prototype.reset = function() {
  this.temp = 20
  this._changeDisplay();
};

Thermostat.prototype._powerSaveReset = function() {
  if (this.temp > 25) {
    this.temp = 25
  };
};

Thermostat.prototype._changeDisplay = function() {
  if(this.temp < 18) {
    this.colour = 'Green';
  };
  if(this.temp >= 18 && this.temp <= 24) {
    this.colour = 'Yellow';
  };
  if(this.temp >= 25) {
    this.colour = 'Red'
  };
};