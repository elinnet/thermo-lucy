function Thermostat() {
  this.temp = 20;
}

Thermostat.prototype.down = function(num) {
    if ((this.temp - num) < 10) {
      this.temp = 10;
  } else {
      this.temp -= num;
  }
};

Thermostat.prototype.up = function(num) {
  this.temp += num;
};