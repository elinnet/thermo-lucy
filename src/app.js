var thermostat = new Thermostat();

var amountOfTemp = function() {
  if (document.getElementById("amount").value == "") {
    return 0
  } else {
    return parseInt(document.getElementById("amount").value);
  };
};

function tempSetter() {
  document.getElementById('temp').innerHTML = thermostat.temp + '°c';
  document.getElementById('temp').style.color = thermostat.colour;
}


document.getElementById("up").onclick=function() {
  thermostat.up(amountOfTemp());
  document.getElementById("temp").innerHTML = thermostat.temp + '°c';
};

document.getElementById("down").onclick=function() {
  thermostat.down(amountOfTemp());
  document.getElementById("temp").innerHTML = thermostat.temp + '°c';
};

document.getElementById("power").onchange=function() {
  if (this.checked) {
    thermostat.powerSaveOn();
    document.getElementById("temp").innerHTML = thermostat.temp + '°c';
  } else {
    thermostat.powerSaveOff();
  };
};

document.getElementById("reset").onclick=function() {
  thermostat.reset();
  document.getElementById("temp").innerHTML = thermostat.temp + '°c';
};





