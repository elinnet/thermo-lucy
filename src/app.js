var thermostat = new Thermostat();

var amountOfTemp = function() {
 return parseInt(document.getElementById("amount").value);
}

document.getElementById("up").onclick=function() {

  thermostat.up(amountOfTemp());
  console.log(thermostat.temp)
  document.getElementById("temp").innerHTML = thermostat.temp + '°c';
}