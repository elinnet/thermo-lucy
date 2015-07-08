var thermostat = new Thermostat();

var amountOfTemp = function() {
 return parseInt(document.getElementById("amount").value);
}

document.getElementById("up").onclick=function() {
  thermostat.up(amountOfTemp());
  document.getElementById("temp").innerHTML = thermostat.temp + '°c';
};

document.getElementById("down").onclick=function() {
  thermostat.down(amountOfTemp());
  document.getElementById("temp").innerHTMl = thermostat.temp + '°c';
};